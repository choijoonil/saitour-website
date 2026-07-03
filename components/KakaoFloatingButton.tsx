import KakaoChatButton from "@/components/KakaoChatButton";

export default function KakaoFloatingButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <KakaoChatButton
        aria-label="카카오 상담 열기"
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#FEE500] px-4 text-xs font-bold text-[#1F1F1F] shadow-[0_10px_24px_rgba(15,23,42,0.16)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#F8DC00] hover:shadow-[0_16px_36px_rgba(15,23,42,0.2)] focus:outline-none focus:ring-2 focus:ring-[#FEE500] focus:ring-offset-2 sm:min-h-12 sm:px-5 sm:text-sm"
      >
        카카오 상담
      </KakaoChatButton>
    </div>
  );
}
