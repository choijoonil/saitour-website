"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";
import { imagePaths } from "@/data/images";

type ManagedImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  fallbackSrc?: string;
};

export default function ManagedImage({
  src,
  alt,
  fallbackSrc = imagePaths.common.fallback,
  onError,
  ...props
}: ManagedImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      onError={(event) => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
        onError?.(event);
      }}
    />
  );
}
