"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import type { NavItem } from "@/content/site";
import { Wordmark } from "@/components/Wordmark";

function itemCurrent(pathname: string, href: NavItem["href"]): boolean {
  return pathname === href;
}

export function DesktopNav({ items }: { items: readonly NavItem[] }) {
  const pathname = usePathname();
  const listRef = useRef<HTMLUListElement>(null);
  const [mark, setMark] = useState({ x: 0, w: 0, visible: false });

  const place = useCallback((target: HTMLElement | null) => {
    const list = listRef.current;

    if (!list || !target) {
      setMark((current) => ({ ...current, visible: false }));
      return;
    }

    const listBox = list.getBoundingClientRect();
    const box = target.getBoundingClientRect();
    setMark({ x: box.left - listBox.left, w: box.width, visible: true });
  }, []);

  const placeCurrent = useCallback(() => {
    place(listRef.current?.querySelector<HTMLElement>('[aria-current="page"]') ?? null);
  }, [place]);

  useLayoutEffect(() => {
    placeCurrent();

    const onResize = () => placeCurrent();
    window.addEventListener("resize", onResize);

    let active = true;
    document.fonts?.ready.then(() => {
      if (active) {
        placeCurrent();
      }
    });

    return () => {
      active = false;
      window.removeEventListener("resize", onResize);
    };
  }, [pathname, placeCurrent]);

  return (
    <nav aria-label="Główne" className="hidden lg:block">
      <ul
        ref={listRef}
        className="relative flex flex-wrap items-center justify-end gap-x-6 gap-y-2"
        onMouseLeave={placeCurrent}
        onBlur={(event) => {
          const next = event.relatedTarget;
          if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
            placeCurrent();
          }
        }}
      >
        <span
          aria-hidden="true"
          className="nav-mark"
          style={{
            width: mark.w,
            transform: `translateX(${mark.x}px)`,
            opacity: mark.visible ? 1 : 0,
          }}
        />
        {items.map((item) => {
          const current = itemCurrent(pathname, item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`inline-block pb-2 font-display text-[0.98rem] font-semibold uppercase tracking-[0.14em] ${
                  current ? "text-deep" : "text-ink"
                }`}
                onMouseEnter={(event) => place(event.currentTarget)}
                onFocus={(event) => place(event.currentTarget)}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function MobileNav({ items }: { items: readonly NavItem[] }) {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | null>(null);
  const panelId = useId();
  const [open, setOpen] = useState(false);

  function clearCloseTimer() {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    dialog?.classList.remove("is-closing");
    dialog?.close();
    setOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const onChange = () => {
      if (media.matches) {
        dialogRef.current?.classList.remove("is-closing");
        dialogRef.current?.close();
        setOpen(false);
        document.body.style.overflow = "";
      }
    };

    media.addEventListener("change", onChange);

    return () => {
      media.removeEventListener("change", onChange);
      document.body.style.overflow = "";
    };
  }, []);

  function syncOpen(isOpen: boolean) {
    setOpen(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  function openMenu() {
    const dialog = dialogRef.current;

    if (!dialog || dialog.open) {
      return;
    }

    clearCloseTimer();
    dialog.classList.remove("is-closing");
    dialog.showModal();
    syncOpen(true);
    closeRef.current?.focus();
  }

  function closeMenu() {
    const dialog = dialogRef.current;

    if (!dialog?.open || dialog.classList.contains("is-closing")) {
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      dialog.close();
      return;
    }

    dialog.classList.add("is-closing");

    let settled = false;
    const finish = () => {
      if (settled) {
        return;
      }

      settled = true;
      dialog.classList.remove("is-closing");

      if (dialog.open) {
        dialog.close();
      }
    };

    const onEnd = (event: TransitionEvent) => {
      if (event.target !== dialog || event.propertyName !== "transform") {
        return;
      }

      dialog.removeEventListener("transitionend", onEnd);
      finish();
    };

    dialog.addEventListener("transitionend", onEnd);
    closeTimer.current = window.setTimeout(() => {
      closeTimer.current = null;
      dialog.removeEventListener("transitionend", onEnd);
      finish();
    }, 560);
  }

  return (
    <>
      <button
        type="button"
        className="inline-flex min-h-11 items-center gap-3 px-1 font-display text-sm font-semibold uppercase tracking-[0.16em] lg:hidden"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={openMenu}
      >
        <span aria-hidden="true" className="flex flex-col gap-1.5">
          <span className="block h-0.5 w-5 bg-navy" />
          <span className="block h-0.5 w-5 bg-navy" />
          <span className="block h-0.5 w-5 bg-navy" />
        </span>
        Menu
      </button>
      <dialog
        ref={dialogRef}
        id={panelId}
        aria-label="Menu"
        className="nav-dialog"
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onToggle={() => {
          syncOpen(dialogRef.current?.open ?? false);
        }}
        onClose={() => {
          syncOpen(false);
        }}
      >
        <div className="flex h-full flex-col px-5 py-6">
          <div className="flex items-center justify-between gap-4">
            <Wordmark tone="dark" />
            <button
              ref={closeRef}
              type="button"
              className="inline-flex min-h-11 items-center px-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-paper"
              onClick={closeMenu}
            >
              Zamknij
            </button>
          </div>
          <nav aria-label="Główne" className="mt-8 overflow-auto">
            <ul className="border-t border-line-dark">
              {items.map((item) => {
                const current = itemCurrent(pathname, item.href);

                return (
                  <li key={item.href} className="border-b border-line-dark">
                    <Link
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      className={`accent-row block border-l-[3px] py-4 pl-4 font-display text-5xl leading-none ${
                        current ? "border-turquoise text-paper" : "border-transparent text-paper"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </dialog>
    </>
  );
}
