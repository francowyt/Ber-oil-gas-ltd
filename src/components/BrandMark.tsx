import { useCallback, useState } from "react";
import logo from "@/assets/ber-logo-clear.png";

/** Official company mark with an always-legible name if the image cannot load. */
export function BrandMark({
  fallbackClassName = "",
  decorative = false,
  loading,
}: {
  fallbackClassName?: string;
  decorative?: boolean;
  loading?: "eager" | "lazy";
}) {
  const [loaded, setLoaded] = useState(false);
  const checkCachedImage = useCallback((image: HTMLImageElement | null) => {
    if (image?.complete) setLoaded(image.naturalWidth > 0);
  }, []);

  return (
    <span className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden text-center font-display text-xs leading-tight font-bold text-primary ${fallbackClassName}`}>
      <span
        role={decorative ? undefined : "img"}
        aria-label={decorative ? undefined : "BER OIL & GAS LTD logo"}
        aria-hidden={decorative ? true : undefined}
        className={loaded ? "sr-only" : "border-l-2 border-flame pl-1"}
      >
        BER OIL &amp; GAS LTD
      </span>
      <img
        ref={checkCachedImage}
        src={logo}
        alt=""
        aria-hidden="true"
        width={655}
        height={638}
        loading={loading}
        className={`absolute inset-0 h-full w-full object-contain ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      />
    </span>
  );
}
