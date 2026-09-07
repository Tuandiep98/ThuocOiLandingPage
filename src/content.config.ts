import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { supabaseLegalLoader } from './lib/legal/loader';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    // Truy vấn tìm kiếm mục tiêu của bài — dùng để đối chiếu trong blog-notes.md, không hiển thị
    // trên trang (không dùng meta keywords, không phải yếu tố xếp hạng).
    keyword: z.string(),
    // Phân khúc/góc nhìn của bài — hiển thị làm eyebrow trên trang bài viết, đồng thời là căn cứ
    // để bài sau không trùng góc độ với bài trước dù cùng chủ đề gốc (xem CLAUDE.md).
    segment: z.string(),
  }),
});

// Privacy Policy / Terms of Service — fetch từ Supabase (view legal_document_current) lúc build,
// không phải runtime, nên key Supabase không bao giờ ship xuống trình duyệt. Schema do loader tự
// cung cấp (xem src/lib/legal/loader.ts).
const legalDocuments = defineCollection({
  loader: supabaseLegalLoader({
    url: import.meta.env.SUPABASE_URL,
    anonKey: import.meta.env.SUPABASE_ANON_KEY,
  }),
});

// Account-deletion / support — nội dung tĩnh song ngữ, không qua Supabase, cùng cơ chế glob() với
// blog để dùng chung pipeline render markdown.
const legalPages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    locale: z.enum(['vi', 'en']),
    page: z.enum(['account-deletion', 'support']),
    // Nhãn eyebrow hiển thị phía trên tiêu đề — cùng vị trí/kiểu với "segment" của blog.
    kicker: z.string(),
  }),
});

export const collections = { blog, legalDocuments, legalPages };
