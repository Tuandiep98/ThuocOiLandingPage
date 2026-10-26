import { site, type Faq } from '../data/site';
import { withBase } from './base';

// URL tuyệt đối (canonical/JSON-LD) cho một path tương đối của site — luôn qua withBase().
export const absoluteUrl = (path: string) => new URL(withBase(path), site.url).toString();

export type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

// FAQPage sinh từ cùng mảng câu hỏi được render trên trang — text hiển thị và structured data
// không thể lệch nhau. Google đã ngừng hiển thị rich result FAQ (05/2026) nhưng các AI answer
// engine vẫn đọc markup này.
export function faqJsonLd(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function videoJsonLd(video: {
  name: string;
  description: string;
  mp4: string;
  poster: string;
  duration: string;
  uploadDate: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: absoluteUrl(video.poster),
    contentUrl: absoluteUrl(video.mp4),
    uploadDate: video.uploadDate,
    duration: video.duration,
    inLanguage: 'vi',
  };
}

export function webPageJsonLd(page: { name: string; description: string; path: string; type?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': page.type ?? 'WebPage',
    name: page.name,
    description: page.description,
    url: absoluteUrl(page.path),
    inLanguage: 'vi',
    isPartOf: { '@type': 'WebSite', name: site.name, url: site.url },
  };
}
