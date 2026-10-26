import Image from "next/image";
import type { ClubImage } from "@/content/media";
import { publicImageSrc } from "@/lib/public-image";

const motionClass = {
  still: "",
  drift: "hero-drift",
  settle: "photo-settle",
} as const;

export function Photo({
  image,
  priority = false,
  sizes = "(min-width: 1024px) 60vw, 100vw",
  frame = "natural",
  treatment = "still",
  className = "",
}: {
  image: ClubImage;
  priority?: boolean;
  sizes?: string;
  frame?: "natural" | "portrait" | "wide" | "fill";
  treatment?: keyof typeof motionClass;
  className?: string;
}) {
  const motion = motionClass[treatment];

  if (frame === "fill") {
    return (
      <Image
        src={publicImageSrc(image.src)}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${motion} ${className}`}
      />
    );
  }

  if (frame === "natural") {
    const picture = (
      <Image
        src={publicImageSrc(image.src)}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes={sizes}
        className={`h-auto w-full ${motion} ${className}`}
      />
    );

    if (treatment === "still") {
      return picture;
    }

    return <div className="overflow-hidden">{picture}</div>;
  }

  const aspect = frame === "portrait" ? "aspect-[3/4]" : "aspect-[16/9]";

  return (
    <div className={`relative overflow-hidden bg-deep ${aspect}`}>
      <Image
        src={publicImageSrc(image.src)}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${frame === "portrait" ? "object-top" : ""} ${motion} ${className}`}
      />
    </div>
  );
}
