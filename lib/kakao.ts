import { KAKAO_CHAT_URL } from "@/constants/site";

export function openKakaoChat() {
  if (typeof window === "undefined") {
    return;
  }

  window.open(KAKAO_CHAT_URL, "_blank", "noopener,noreferrer");
}
