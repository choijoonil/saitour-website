import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-y bg-paper">
      <div className="container-px mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-navy">페이지를 찾을 수 없습니다.</h1>
        <p className="mt-4 text-slate-600">요청하신 페이지가 없거나 주소가 변경되었습니다.</p>
        <Link href="/" className="btn-primary mt-7">
          홈으로 이동
        </Link>
      </div>
    </section>
  );
}
