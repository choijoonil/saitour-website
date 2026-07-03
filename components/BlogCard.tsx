import Link from "next/link";
import type { BlogPost } from "@/data/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card card-hover flex h-full flex-col">
      <div className="flex items-center justify-between gap-3 text-xs font-semibold text-slate-500">
        <Link href={`/blog/${post.categorySlug}`} className="text-brand-primary transition hover:text-brand-accent-pink">
          {post.category}
        </Link>
        <time dateTime={post.date}>{post.date}</time>
      </div>
      <h3 className="mt-4 text-xl font-bold leading-7 text-navy">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary mt-auto w-full border-mint text-mint hover:bg-mint hover:text-white"
      >
        블로그에서 보기
      </a>
    </article>
  );
}
