"use client";

import type { ReactNode } from "react";
import { openKakaoChat } from "@/lib/kakao";

type KakaoChatButtonProps = {
  children?: ReactNode;
  className?: string;
  "aria-label"?: string;
};

export default function KakaoChatButton({
  children = "카카오 상담",
  className = "btn-secondary",
  "aria-label": ariaLabel
}: KakaoChatButtonProps) {
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      onClick={openKakaoChat}
    >
      {children}
    </button>
  );
}
