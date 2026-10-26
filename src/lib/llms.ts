import {
  site,
  plans,
  benefits,
  principles,
  featurePages,
  featureHref,
  faqs,
  legalLinks,
} from '../data/site';
import { absoluteUrl } from './seo';

// llms.txt / llms-full.txt sinh lúc build từ site.ts — cùng nguồn với trang, nên không thể lệch
// số liệu (trước đây llms.txt là file tĩnh và từng ghi sai giới hạn gói).

const link = (label: string, path: string) => `[${label}](${absoluteUrl(path)})`;

function header(): string[] {
  return [
    `# ${site.name}`,
    '',
    `> Ứng dụng di động (iOS, Android) hỗ trợ lên lịch uống thuốc: chụp/quét đơn thuốc, AI đọc và trích xuất thông tin thuốc, tự sinh lịch nhắc theo buổi, rồi nhắc đúng giờ bằng thông báo/báo thức trên điện thoại; báo người thân trong nhóm Gia đình khi có liều bị lỡ. Hướng tới người dùng Việt Nam, gồm cả người chăm sóc cha mẹ lớn tuổi.`,
    '',
    '## Sản phẩm làm gì',
    '',
    ...benefits.map((item) => `- ${item.title}: ${item.body}`),
    '',
    '## Nguyên tắc',
    '',
    ...principles.map((item) => `- ${item.title}: ${item.body}`),
    '',
    '## Mô hình giá (freemium, không quảng cáo)',
    '',
    ...plans.map((plan) => `- ${plan.name}: ${plan.benefits.join('; ')}.`),
    '- Giá gói trả phí hiển thị trong ứng dụng (App Store/Google Play).',
  ];
}

export function buildLlmsTxt(): string {
  return [
    ...header(),
    '',
    '## Trang',
    '',
    `- ${link('Trang chủ', '')}: tổng quan, video giới thiệu, cách hoạt động.`,
    `- ${link('Tính năng', 'tinh-nang/')}`,
    ...featurePages.map((page) => `  - ${link(page.navLabel, featureHref(page.slug))}: ${page.description}`),
    `- ${link('Bảng giá', 'bang-gia/')}`,
    `- ${link('Giới thiệu', 'gioi-thieu/')}: mục tiêu, nguyên tắc, cách ứng dụng xử lý dữ liệu.`,
    `- ${link('Câu hỏi thường gặp', 'cau-hoi-thuong-gap/')}`,
    `- ${link('Blog', 'blog/')}: bài viết về dùng thuốc đúng cách (biên tập theo ${link('chính sách biên tập', 'chinh-sach-bien-tap/')}).`,
    `- ${link('Chính sách quyền riêng tư', legalLinks.privacy)} · ${link('Điều khoản', legalLinks.terms)} · ${link('Xoá tài khoản', legalLinks.accountDeletion)} · ${link('Hỗ trợ', legalLinks.support)}`,
    '',
    `## Bản đầy đủ`,
    '',
    `- ${link('llms-full.txt', 'llms-full.txt')}: toàn bộ nội dung trang tính năng và hỏi đáp dạng văn bản.`,
    '',
  ].join('\n');
}

export function buildLlmsFullTxt(): string {
  const featureBlocks = featurePages.flatMap((page) => [
    `## ${page.h1}`,
    '',
    `URL: ${absoluteUrl(featureHref(page.slug))}`,
    '',
    page.intro,
    '',
    ...page.sections.flatMap((section) => [
      `### ${section.heading}`,
      '',
      section.body,
      ...(section.points ? ['', ...section.points.map((point) => `- ${point}`)] : []),
      '',
    ]),
    '### Hỏi đáp',
    '',
    ...page.faqs.flatMap((faq) => [`**${faq.question}**`, faq.answer, '']),
  ]);

  return [
    ...header(),
    '',
    ...featureBlocks,
    '## Câu hỏi thường gặp',
    '',
    ...faqs.flatMap((faq) => [`**${faq.question}**`, faq.answer, '']),
    'Thuốc ơi không thay thế tư vấn, chẩn đoán hoặc điều trị của bác sĩ hay dược sĩ.',
    '',
  ].join('\n');
}
