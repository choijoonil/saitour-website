import Link from "next/link";
import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import SectionTitle from "@/components/SectionTitle";
import { blogCategories, blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "블로그",
  description: "한국 여행 준비에 필요한 정보를 정리한 사이투어 블로그입니다."
};

export default function BlogPage() {
  return (
    <section className="section-y bg-paper">
      <div className="container-px mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="BLOG"
          title="사이투어 블로그"
          description="여행 준비에 필요한 정보와 운영 이야기를 네이버 블로그에서 확인해보세요."
        />
        <nav className="mb-8 mt-6 flex flex-wrap gap-2" aria-label="블로그 카테고리">
          {blogCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/blog/${category.slug}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-navy transition hover:border-brand-primary hover:text-brand-primary"
            >
              {category.title}
            </Link>
          ))}
        </nav>
        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
