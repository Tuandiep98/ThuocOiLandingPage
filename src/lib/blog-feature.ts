import { featurePages, featureSlugs, type FeaturePage } from '../data/site';

type FeatureSlug = (typeof featureSlugs)[keyof typeof featureSlugs];

// Trang tính năng liên quan của một bài blog — hiển thị thành khối "Tính năng liên quan" cuối bài,
// để link nội bộ từ blog dồn về các trang /tinh-nang/. Ưu tiên frontmatter `feature` (bài mới khai
// báo tường minh); bài cũ không có thì đoán theo keyword/segment/tiêu đề. Thứ tự luật có chủ đích:
// bài về người thân/chăm sóc → Gia đình trước, rồi đơn thuốc → Quét đơn, rồi tồn thuốc/tái khám →
// Theo dõi liệu trình; còn lại đều là chủ đề nhớ giờ uống → Nhắc uống thuốc.
const RULES: { slug: FeatureSlug; pattern: RegExp }[] = [
  {
    slug: featureSlugs.family,
    pattern: /cha mẹ|bố mẹ|người thân|người già|gia đình|vợ chồng|anh chị em|con dâu|con rể|nhắc con|cho con|của con|con mắc|trẻ nhỏ|trẻ em|trẻ sơ sinh|người chăm sóc|nhà nhiều người|người khác trong nhà/,
  },
  {
    slug: featureSlugs.scan,
    pattern: /chụp ảnh|đọc đơn|đọc hiểu đơn|ghi tắt|nhập tay|quét|đơn thuốc điện tử|mất đơn|thời hạn bao lâu/,
  },
  {
    slug: featureSlugs.tracking,
    pattern: /tái khám|bảo hiểm|lĩnh thuốc|xuất viện|nhiều chuyên khoa|nhiều loại thuốc|đơn thuốc cũ|xét nghiệm|hết thuốc/,
  },
];

export function featureForPost(post: {
  feature?: string;
  keyword: string;
  segment: string;
  title: string;
}): FeaturePage {
  const explicit = post.feature && featurePages.find((page) => page.slug === post.feature);
  if (explicit) return explicit;

  const text = `${post.keyword} ${post.segment} ${post.title}`.toLowerCase().normalize('NFC');
  const slug = RULES.find((rule) => rule.pattern.test(text))?.slug ?? featureSlugs.reminders;
  return featurePages.find((page) => page.slug === slug)!;
}
