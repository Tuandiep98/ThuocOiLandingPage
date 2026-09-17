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
    // Tiêu đề/mô tả CTA cuối bài tuỳ biến theo chủ đề — không có thì rơi về mặc định trong
    // [slug].astro. Hàng nút App Store/Google Play luôn cố định, không tuỳ biến (xem CLAUDE.md).
    ctaTitle: z.string().optional(),
    ctaDescription: z.string().optional(),
    // Tham chiếu tới một `tag` trong src/data/blog-images.ts — CHỈ được chọn từ danh sách đã
    // duyệt sẵn đó (không tự tạo crop mới), và chỉ khi `usedWhen` khớp thật với nội dung bài.
    // Đa số bài không cần ảnh — để trống là bình thường (xem CLAUDE.md).
    imageTag: z.string().optional(),
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
