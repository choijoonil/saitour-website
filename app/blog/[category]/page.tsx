import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import SectionTitle from "@/components/SectionTitle";
import { blogCategories, getBlogCategory, getBlogPostsByCategory } from "@/data/blog";

type BlogCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return blogCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: BlogCategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getBlogCategory(slug);

  if (!category) {
    return {
      title: "블로그"
    };
  }

  return {
    title: `${category.title} 블로그`,
    description: category.description
  };
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { category: slug } = await params;
  const category = getBlogCategory(slug);

  if (!category) {
    notFound();
  }

  const posts = getBlogPostsByCategory(slug);

  return (
    <section className="section-y bg-paper">
      <div className="container-px mx-auto max-w-7xl">
        <SectionTitle eyebrow="BLOG" title={category.title} description={category.description} />
        <nav className="mb-8 mt-6 flex flex-wrap gap-2" aria-label="블로그 카테고리">
          <Link
            href="/blog"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-navy transition hover:border-brand-primary hover:text-brand-primary"
          >
            전체
          </Link>
          {blogCategories.map((item) => (
            <a
              key={item.slug}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-current={item.slug === slug ? "page" : undefined}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                item.slug === slug
                  ? "border-brand-primary bg-brand-primary text-white"
                  : "border-slate-200 bg-white text-navy hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {posts.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-[20px] border border-slate-100 bg-white p-8 text-sm leading-7 text-slate-600 shadow-soft">
            이 카테고리에 등록된 게시글이 없습니다.
          </div>
        )}
      </div>
    </section>
  );
}
