import { BrandMark } from "./BrandMark";

/**
 * Image with a subtle BER Oil & Gas logo mark applied in the corner,
 * so site imagery reads as company-owned without obscuring the picture.
 */
export function BrandedImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  width,
  height,
  loading = "lazy",
  position = "bottom-right",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  position?: "bottom-right" | "bottom-left" | "top-right";
}) {
  const pos =
    position === "bottom-left"
      ? "bottom-4 left-4"
      : position === "top-right"
        ? "top-4 right-4"
        : "bottom-4 right-4";

  return (
    <figure className={`relative isolate overflow-hidden rounded-sm ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={`h-full w-full object-cover transition-transform duration-700 ease-out ${imgClassName}`}
      />
      <span
        className={`absolute ${pos} flex items-center gap-2 rounded-sm bg-white/92 px-2.5 py-1.5 shadow-sm backdrop-blur-sm`}
      >
        <BrandMark
          decorative
          loading="lazy"
          fallbackClassName="h-7 w-10 text-[0.4rem]"
        />
        <span className="font-display text-[0.6rem] leading-tight font-semibold tracking-[0.16em] text-navy uppercase">
          BER Oil
          <br />&amp; Gas Ltd
        </span>
      </span>
    </figure>
  );
}
