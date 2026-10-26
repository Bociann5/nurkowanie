import Image from "next/image";
import Link from "next/link";
import { images } from "@/content/media";
import { publicImageSrc } from "@/lib/public-image";

export function Wordmark({
  tone = "light",
  priority = false,
}: {
  tone?: "light" | "dark";
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Klub Pirania"
      className={tone === "dark" ? "inline-flex bg-paper px-2 py-1" : "inline-flex"}
    >
      <Image
        src={publicImageSrc(images.logo.src)}
        alt=""
        width={images.logo.width}
        height={images.logo.height}
        priority={priority}
        className="h-14 w-auto sm:h-16"
      />
    </Link>
  );
}
