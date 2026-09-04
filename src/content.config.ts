import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

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

export const collections = { blog };
