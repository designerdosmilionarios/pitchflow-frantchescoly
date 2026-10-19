import { getImageProps } from "next/image";

type PhotoSource = { src: string; width: number; height: number };

interface ResponsivePhotoProps {
  desktop: PhotoSource;
  mobile: PhotoSource;
  alt: string;
  className?: string;
  sizes?: string;
  fill?: boolean;
  priority?: boolean;
}

/** A picture element lets the browser download the image for its viewport only. */
export function ResponsivePhoto({
  desktop,
  mobile,
  alt,
  className = "",
  sizes = "100vw",
  fill = false,
  priority = false,
}: ResponsivePhotoProps) {
  const shared = { alt, fill, sizes, className, priority };
  const dimensions = (photo: PhotoSource) => fill
    ? { src: photo.src }
    : photo;
  const { props: desktopProps } = getImageProps({ ...shared, ...dimensions(desktop) });
  const { props: mobileProps } = getImageProps({ ...shared, ...dimensions(mobile) });

  return (
    <picture className="responsive-photo">
      <source
        media="(max-width: 700px)"
        srcSet={mobileProps.srcSet}
        sizes="100vw"
        width={mobile.width}
        height={mobile.height}
      />
      {/* getImageProps supplies optimized sources without downloading both variants. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img {...desktopProps} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} />
    </picture>
  );
}
