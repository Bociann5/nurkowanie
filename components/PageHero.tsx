import Image from "next/image";
import type { ClubImage } from "@/content/media";
import { publicImageSrc } from "@/lib/public-image";

export function PageHero({
  kicker,
  title,
  lede,
  image,
  caption,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  image?: ClubImage;
  caption?: string;
}) {
  return (
    <section className="bg-navy text-paper">
      <div
        className={
          image
            ? "grid lg:min-h-[32rem] lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)]"
            : undefined
        }
      >
        <div className={`inset-x py-14 md:py-20 lg:py-24 ${image ? "lg:pr-12" : ""}`}>
          {kicker ? (
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-turquoise">
              {kicker}
            </p>
          ) : null}
          <h1 className={`text-[clamp(3.3rem,7vw,6.4rem)] ${kicker ? "mt-3" : ""}`}>{title}</h1>
          {lede ? (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist md:text-xl">{lede}</p>
          ) : null}
        </div>
        {image ? (
          <figure className="relative min-h-72 overflow-hidden sm:min-h-96 lg:min-h-full">
            <Image
              src={publicImageSrc(image.src)}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            {caption ? (
              <figcaption className="absolute inset-x-0 bottom-0 bg-navy px-4 py-2.5 text-sm leading-snug text-paper">
                {caption}
              </figcaption>
            ) : null}
          </figure>
        ) : (
          <div className="h-1.5 bg-turquoise" aria-hidden="true" />
        )}
      </div>
    </section>
  );
}
