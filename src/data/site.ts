// Nguồn nội dung trung tâm cho toàn site — copy được đối chiếu từ README/CLAUDE.md, bản dịch
// vi.json, code service và migration Supabase thật của app Flutter "Thuốc ơi"
// (github.com/Tuandiep98/thuocoi), không phải nội dung dựng sẵn. Khi app đổi giới hạn gói,
// chuỗi thông báo hay thêm tính năng, sửa ở đây — mọi trang, JSON-LD và llms.txt đều đọc từ file này.

export const site = {
  name: "Thuốc ơi",
  url: "https://thuocoi.com",
  tagline: "Lên lịch uống thuốc thông minh, từ một tấm ảnh đơn thuốc",
  description:
    "Thuốc ơi đọc đơn thuốc bằng AI, tự tạo lịch nhắc theo từng buổi và nhắc đúng giờ — kể cả khi điện thoại đang im lặng. Báo người thân khi lỡ liều, theo dõi tồn thuốc, không quảng cáo.",
  locale: "vi_VN",
};

export const storeLinks = {
  appStore: "https://apps.apple.com/us/app/thu%E1%BB%91c-%C6%A1i/id6804452525",
  // Số ID App Store thuần (không phải bundle ID) — dùng cho thẻ meta Smart App Banner của Safari.
  appStoreId: "6804452525",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.tuandiep.thuocoi",
  // Package name Android — dùng cho thẻ meta google-play-app (banner tương đương trên Chrome/Android).
  androidPackageId: "com.tuandiep.thuocoi",
};

// Trang pháp lý — nội dung Privacy/Terms fetch từ Supabase lúc build (xem content.config.ts,
// collection legalDocuments), account-deletion/support là nội dung tĩnh (collection legalPages).
// Path tương đối, bọc qua withBase() ở nơi render — theo đúng quy ước withBase() của repo.
export const legalLinks = {
  privacy: "legal/privacy/",
  terms: "legal/terms/",
  accountDeletion: "legal/account-deletion/",
  support: "legal/support/",
};

// Video preview (dựng bằng Remotion trong video/, render ra public/media/ — xem video/README.md).
// Ghép từ ảnh chụp màn hình thật + chuỗi thông báo thật của app.
export const previewVideo = {
  name: "Thuốc ơi hoạt động thế nào — video 13 giây",
  description:
    "Lịch nhắc theo buổi tạo từ đơn thuốc, thông báo có nút Đã uống / Báo lại 10 phút, cảnh báo người thân khi lỡ liều và báo thức vẫn kêu khi iPhone im lặng.",
  mp4: "media/thuocoi-preview.mp4",
 
  poster: "media/thuocoi-preview-poster.webp",
  width: 720,
  height: 900,
  duration: "PT13S",
  uploadDate: "2026-10-26",
};

// Clip ngắn cắt từ cùng video, mỗi trang tính năng một clip.
export const featureClips = {
  notifications: { mp4: "media/clip-thong-bao.mp4", poster: "media/clip-thong-bao.webp", duration: "PT4S" },
  family: { mp4: "media/clip-gia-dinh.mp4", poster: "media/clip-gia-dinh.webp", duration: "PT3S" },
  alarm: { mp4: "media/clip-bao-thuc.mp4", poster: "media/clip-bao-thuc.webp", duration: "PT3S" },
} as const;
export type ClipName = keyof typeof featureClips;

export const trustPoints = [
  {
    title: "Không quảng cáo",
    body: "Ứng dụng xử lý dữ liệu và thời điểm nhắc liên quan sức khoẻ — không đặt quảng cáo, không dùng dữ liệu sức khoẻ để nhắm mục tiêu.",
  },
  {
    title: "Nhắc ngay trên máy, không cần mạng",
    body: "Lịch uống thuốc và lời nhắc được lưu ngay trên điện thoại, vẫn nhắc đúng giờ cả khi mạng yếu hoặc mất mạng.",
  },
  {
    title: "Miễn phí không giới hạn phần lõi",
    body: "Nhập thuốc thủ công, nhắc thuốc, báo thức và lịch sử cho bản thân dùng miễn phí không giới hạn.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Chụp ảnh đơn thuốc",
    body: "Chụp hoặc tải lên tối đa 5 ảnh đơn thuốc, hoặc tệp PDF — ảnh càng rõ nét, càng đủ tên thuốc và liều dùng thì máy đọc càng chính xác.",
  },
  {
    step: "02",
    title: "AI đọc và tạo lịch nhắc",
    body: "AI tách riêng từng bước: đọc chữ trong đơn, nhận diện bác sĩ/chẩn đoán/danh sách thuốc, rồi sinh lịch theo buổi sáng, trưa, tối. Bạn luôn xem lại và xác nhận trước khi lịch được tạo.",
  },
  {
    step: "03",
    title: "Nhắc đúng giờ, kể cả khi im lặng",
    body: "Điện thoại tự nhắc từng liều bằng thông báo, kể cả khi không có mạng; trên iOS 26 trở lên có thể bật thêm báo thức riêng để lời nhắc vẫn kêu khi điện thoại đang im lặng hoặc ở chế độ Tập trung.",
  },
];

// Trang tính năng — slug là path dưới /tinh-nang/. Thứ tự ở đây là thứ tự hiển thị ở mọi nơi.
export const featureSlugs = {
  scan: "quet-don-thuoc-ai",
  reminders: "nhac-uong-thuoc",
  family: "gia-dinh",
  tracking: "theo-doi-lieu-trinh",
} as const;

export const featureHref = (slug: string) => `tinh-nang/${slug}/`;

// Khối "Cài app bạn được gì" trên trang chủ — mỗi lợi ích trỏ về trang chi tiết.
export const benefits = [
  {
    title: "Quét đơn thuốc bằng AI",
    body: "Chụp tối đa 5 ảnh hoặc tải PDF, ứng dụng đọc tên thuốc, cách dùng, ngày tái khám và đề xuất lịch nhắc.",
    href: featureHref(featureSlugs.scan),
  },
  {
    title: "Thông báo có nút Đã uống",
    body: "Bấm \"Đã uống\" hoặc \"Báo lại 10 phút\" ngay trên thông báo, không cần mở ứng dụng.",
    href: featureHref(featureSlugs.reminders),
  },
  {
    title: "Nhắc lại khi có thể đã quên",
    body: "Liều chưa được xác nhận sau 45 phút sẽ được nhắc thêm một lần nữa.",
    href: featureHref(featureSlugs.reminders),
  },
  {
    title: "Báo thức khi máy im lặng",
    body: "Trên iOS 26 trở lên, lời nhắc có thể kêu như báo thức, kể cả ở chế độ im lặng hoặc Tập trung.",
    href: featureHref(featureSlugs.reminders),
  },
  {
    title: "Báo người thân khi lỡ liều",
    body: "Người chăm sóc trong nhóm Gia đình nhận thông báo đẩy khi một thành viên có thể đã bỏ lỡ liều thuốc.",
    href: featureHref(featureSlugs.family),
  },
  {
    title: "Theo dõi tiến trình và tồn thuốc",
    body: "Biết đã uống bao nhiêu liều, còn bao nhiêu thuốc — số lượng tự trừ khi bạn đánh dấu đã uống.",
    href: featureHref(featureSlugs.tracking),
  },
  {
    title: "Nhắc sắp hết thuốc, nhắc tái khám",
    body: "Báo trước khi đơn thuốc sắp dùng hết, và nhắc đúng ngày hẹn tái khám đọc được từ đơn.",
    href: featureHref(featureSlugs.tracking),
  },
  {
    title: "Báo cáo PDF/CSV mang đi khám",
    body: "Xuất lịch sử dùng thuốc theo khoảng thời gian, tạo và lưu ngay trên điện thoại.",
    href: featureHref(featureSlugs.tracking),
  },
];

// Chuỗi thông báo — lấy nguyên văn từ assets/translations/vi.json (notifications.*) và Edge
// Function send-caregiver-alerts của app. Dùng cho khối minh hoạ thông báo (NotificationStack).
export type NotificationSample = {
  title: string;
  body: string;
  actions?: string[];
  time?: string;
};

export const notificationSamples = {
  reminder: {
    title: "Đến giờ uống thuốc",
    body: "Bạn có một lời nhắc uống thuốc. Mở ứng dụng để xem chi tiết.",
    actions: ["Đã uống", "Báo lại 10 phút"],
    time: "bây giờ",
  },
  followUp: {
    title: "Vẫn còn một lời nhắc uống thuốc",
    body: "Bạn có thể đã bỏ lỡ. Mở ứng dụng để xem chi tiết.",
    time: "45 phút sau",
  },
  caregiver: {
    title: "Nhắc bỏ lỡ liều",
    body: "Thảo có thể đã bỏ lỡ liều thuốc 20:00. Mở app để xem chi tiết.",
    time: "20:45",
  },
  renewal: {
    title: "Sắp hết thuốc",
    body: "Một đơn thuốc của bạn sắp dùng hết. Mở ứng dụng để quét đơn mới.",
    time: "08:00",
  },
  inventoryLow: {
    title: "Sắp hết thuốc",
    body: "Một thuốc của bạn sắp hết. Mở ứng dụng để thêm thuốc.",
    time: "08:00",
  },
  appointment: {
    title: "Nhắc lịch hẹn",
    body: "Bạn có một lịch hẹn hôm nay. Mở ứng dụng để xem chi tiết.",
    time: "07:00",
  },
  weeklyDigest: {
    title: "Báo cáo tuân thủ hàng tuần",
    body: "Mở ứng dụng để xem tổng kết 7 ngày qua.",
    time: "Chủ nhật",
  },
} satisfies Record<string, NotificationSample>;

// Khối "Thông báo" trên trang chủ — mỗi loại thông báo app thật sự gửi.
export const notificationTypes = [
  {
    title: "Đến giờ là nhắc, có sẵn nút thao tác",
    body: "Mỗi liều có một thông báo riêng. Bấm \"Đã uống\" để ghi nhận ngay, hoặc \"Báo lại 10 phút\" khi đang bận.",
  },
  {
    title: "Nhắc lần hai sau 45 phút",
    body: "Nếu liều vẫn chưa được xác nhận, ứng dụng nhắc thêm một lần — để một lần lỡ tay vuốt thông báo không thành một liều bị quên.",
  },
  {
    title: "Người thân được báo khi bạn lỡ liều",
    body: "Bật Cảnh báo người chăm sóc trong nhóm Gia đình: liều quá giờ chưa xác nhận sẽ được báo đến điện thoại của người chăm sóc.",
  },
  {
    title: "Sắp hết thuốc, sắp đến ngày tái khám",
    body: "Báo trước khi đơn thuốc dự kiến dùng hết, nhắc lịch hẹn tái khám, và tổng kết tuân thủ mỗi sáng Chủ nhật nếu bạn bật.",
  },
];

export type Feature = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  href: string;
};

// title/body lấy nguyên văn (hoặc sát nghĩa) từ ảnh chụp màn hình App Store thật
// (assets/store_screenshots/iphone) của ứng dụng Thuốc ơi.
export const features: Feature[] = [
  {
    title: "Tạo lời nhắc từ đơn thuốc thông minh",
    body: "Ứng dụng đọc đơn thuốc và tự sắp lời nhắc theo đúng buổi sáng, trưa, tối — theo nhịp sinh hoạt bạn đã chọn, không phải giờ ứng dụng tự đặt.",
    image: "screenshot_iphone_01.png",
    imageAlt:
      "Màn hình lời nhắc buổi trưa của ứng dụng Thuốc ơi, hiển thị tên thuốc và cách dùng đọc được từ đơn",
    href: featureHref(featureSlugs.scan),
  },
  {
    title: "Tạo lời nhắc và tiến trình theo dõi tự động",
    body: "Ứng dụng tính toán số lượng thuốc trong cả liệu trình và theo dõi số liệu thực tế đã uống, để bạn biết còn bao nhiêu ngày thuốc.",
    image: "screenshot_iphone_04.png",
    imageAlt:
      "Màn hình đơn thuốc hiển thị đã uống 59/98 liều, tỉ lệ 60%, chi tiết từng loại thuốc",
    href: featureHref(featureSlugs.tracking),
  },
  {
    title: "Thêm đơn thuốc bằng hình ảnh hoặc tệp PDF",
    body: "Không có ảnh rõ? Vẫn thêm được đơn thuốc bằng tệp PDF, hoặc tự nhập từng loại thuốc mà không cần dùng đến AI.",
    image: "screenshot_iphone_03.png",
    imageAlt:
      "Màn hình thêm đơn thuốc bằng ảnh hoặc PDF trong ứng dụng Thuốc ơi",
    href: featureHref(featureSlugs.scan),
  },
  {
    title: "Tham gia Gia Đình",
    body: "Theo dõi đơn thuốc và tiến trình uống thuốc chung giữa mọi người trong gia đình — hữu ích khi con cái chăm sóc cha mẹ lớn tuổi.",
    image: "screenshot_iphone_05.png",
    imageAlt:
      "Màn hình gia đình trong ứng dụng Thuốc ơi, hiển thị hai thành viên Tôi và Thảo cùng lịch nhắc trong ngày",
    href: featureHref(featureSlugs.family),
  },
  {
    title: "Theo dõi lịch hẹn tái khám",
    body: "Ngày tái khám hoặc xét nghiệm đọc được từ đơn thuốc sẽ tự xuất hiện trong lịch, cùng với lịch uống thuốc cả tuần để dễ nhìn tổng thể.",
    image: "screenshot_iphone_07.png",
    imageAlt:
      "Màn hình lịch tuần trong ứng dụng Thuốc ơi, hiển thị các ngày cần uống thuốc và lịch hẹn tái khám",
    href: featureHref(featureSlugs.tracking),
  },
  {
    title: "Báo thức không phụ thuộc chuông im lặng",
    body: "Trên iOS 26 trở lên, lời nhắc có thể tạo báo thức riêng — vẫn kêu và hiện rõ việc cần làm (như \"Uống 3 viên thuốc và nhỏ tai\") ngay cả khi iPhone đang im lặng hoặc ở chế độ Tập trung.",
    image: "screenshot_iphone_08.png",
    imageAlt:
      "Màn hình báo thức Thuốc ơi trên iPhone, hiển thị 16:35 và nội dung uống 3 viên thuốc và nhỏ tai",
    href: featureHref(featureSlugs.reminders),
  },
];

// Nguyên tắc sản phẩm — dùng cho trang chủ (rút gọn) và /gioi-thieu/ (đầy đủ).
export const principles = [
  {
    title: "Bạn luôn là người xác nhận",
    body: "AI chỉ đề xuất. Thông tin đọc từ đơn và lịch nhắc luôn hiện ra để bạn đối chiếu với đơn gốc trước khi lưu; đoạn đọc không chắc chắn được đánh dấu rõ.",
  },
  {
    title: "Lưu trên máy trước, nhắc không cần mạng",
    body: "Lịch nhắc và lời nhắc chạy ngay trên điện thoại. Mạng chỉ cần khi quét đơn bằng AI, đồng bộ để khôi phục dữ liệu và chia sẻ trong nhóm Gia đình.",
  },
  {
    title: "Không quảng cáo, không bán dữ liệu sức khoẻ",
    body: "Mô hình là freemium + gói đăng ký. Không đặt quảng cáo và không dùng dữ liệu sức khoẻ để nhắm mục tiêu.",
  },
  {
    title: "Nhắc thuốc không bao giờ nằm sau paywall",
    body: "Nhập thuốc thủ công, nhắc thuốc, báo thức và lịch sử của bạn miễn phí không giới hạn. Gói trả phí chỉ mở thêm lượt quét AI và thành viên Gia đình.",
  },
  {
    title: "Thông báo kín đáo",
    body: "Thông báo trên màn hình khoá dùng nội dung chung chung, không hiện tên thuốc hay chẩn đoán — người đứng cạnh nhìn thấy cũng không biết bạn đang dùng thuốc gì.",
  },
  {
    title: "Không thay thế bác sĩ, dược sĩ",
    body: "Thuốc ơi giúp nhớ lịch, không chẩn đoán, không kê đơn và không kiểm tra tương tác thuốc. Mọi thắc mắc về thuốc, hãy hỏi người đã kê đơn hoặc dược sĩ.",
  },
];

export type Plan = {
  id: "free" | "pro" | "family";
  name: string;
  price: string;
  priceNote?: string;
  highlight?: boolean;
  description: string;
  benefits: string[];
};

// Giới hạn lấy từ README gốc (mục "Định hướng thương mại") và migration
// 202609050001_family_tier_limits_and_quota_scope.sql: thành viên Free 2 / Pro 3 / Family 10,
// lượt quét Free 3 / Pro 30 mỗi người, Family 150 dùng chung.
export const plans: Plan[] = [
  {
    id: "free",
    name: "Miễn phí",
    price: "0đ",
    description:
      "Đủ dùng cho nhu cầu nhắc thuốc hằng ngày, không giới hạn thời gian.",
    benefits: [
      "Nhập thuốc thủ công không giới hạn",
      "Nhắc thuốc và báo thức không giới hạn",
      "Lịch sử uống thuốc cho bản thân không giới hạn",
      "Tối đa 3 lượt quét đơn bằng AI mỗi tháng",
      "Nhóm gia đình tối đa 2 thành viên, tính cả chủ nhóm",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "",
    priceNote: "Xem giá trong ứng dụng",
    highlight: true,
    description:
      "Cho người quét đơn thuốc thường xuyên hoặc chăm sóc thêm người thân.",
    benefits: [
      "Tối đa 30 lượt quét đơn bằng AI mỗi tháng",
      "Nhóm gia đình tối đa 3 thành viên, tính cả chủ nhóm",
      "Toàn bộ quyền lợi của gói Miễn phí",
    ],
  },
  {
    id: "family",
    name: "Gia đình",
    price: "",
    priceNote: "Xem giá trong ứng dụng",
    description: "Cho cả nhà cùng dùng chung một gói, tối đa 10 thành viên.",
    benefits: [
      "Tối đa 10 thành viên, tính cả chủ nhóm",
      "150 lượt quét đơn bằng AI mỗi tháng, dùng chung cho cả nhóm",
      "Toàn bộ quyền lợi của gói Pro",
    ],
  },
];

// Bảng so sánh trên /bang-gia/ — cùng nguồn số liệu với `plans`.
export const planComparison: { label: string; values: [string, string, string] }[] = [
  { label: "Nhập thuốc thủ công, nhắc thuốc, báo thức", values: ["Không giới hạn", "Không giới hạn", "Không giới hạn"] },
  { label: "Lịch sử, tiến trình, báo cáo dùng thuốc", values: ["Có", "Có", "Có"] },
  { label: "Lượt quét đơn bằng AI mỗi tháng", values: ["3 / người", "30 / người", "150, dùng chung cả nhóm"] },
  { label: "Thành viên nhóm Gia đình (tính cả chủ nhóm)", values: ["2", "3", "10"] },
  { label: "Dùng mô hình AI mới nhất", values: ["—", "Có", "Có"] },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Thuốc ơi đọc đơn thuốc bằng cách nào?",
    answer:
      "Ảnh đơn thuốc được xử lý qua AI theo 3 bước tách biệt: đọc chữ trong ảnh, nhận diện thông tin (bác sĩ, chẩn đoán, danh sách thuốc), rồi mới sinh lịch nhắc. Kết quả luôn hiển thị trong màn hình xác nhận để bạn đối chiếu với đơn gốc trước khi lưu.",
  },
  {
    question: "Nếu AI đọc sai thông tin thuốc thì sao?",
    answer:
      "Đoạn chữ không chắc chắn sẽ được đánh dấu ngay trong nội dung đọc được, và ứng dụng luôn yêu cầu xác nhận trước khi tạo lịch nhắc. Thuốc ơi không thay thế tư vấn, chẩn đoán của bác sĩ hoặc dược sĩ — hãy đối chiếu với đơn gốc và hỏi lại chuyên gia y tế nếu chưa chắc chắn.",
  },
  {
    question: "Lời nhắc có kêu khi điện thoại đang im lặng không?",
    answer:
      "Điện thoại tự nhắc bằng thông báo, không cần mạng. Trên iOS 26 trở lên, bạn có thể bật thêm báo thức riêng cho lời nhắc để vẫn kêu khi iPhone đang im lặng hoặc ở chế độ Tập trung.",
  },
  {
    question: "Thuốc ơi có miễn phí không?",
    answer:
      "Có. Gói Miễn phí dùng nhập thuốc thủ công, nhắc thuốc và lịch sử cho bản thân không giới hạn, cùng 3 lượt quét đơn bằng AI mỗi tháng. Gói Pro và Gia đình mở thêm lượt quét AI và thành viên trong nhóm gia đình.",
  },
  {
    question: "Không có ảnh đơn thuốc rõ thì có dùng được không?",
    answer:
      "Có. Bạn có thể thêm đơn bằng tệp PDF, hoặc tự nhập tên thuốc, liều dùng và giờ uống — cách nhập tay này không dùng AI và không tính vào lượt quét đơn hằng tháng.",
  },
  {
    question: "Người thân có biết khi tôi quên uống thuốc không?",
    answer:
      "Có, nếu bạn cùng ở một nhóm Gia đình và người thân bật Cảnh báo người chăm sóc. Khi một liều đã quá giờ mà chưa được xác nhận, điện thoại của họ nhận thông báo \"Nhắc bỏ lỡ liều\" kèm giờ của liều đó — không kèm tên thuốc.",
  },
  {
    question: "Dữ liệu sức khoẻ của tôi có được dùng để quảng cáo không?",
    answer:
      "Không. Thuốc ơi không đặt quảng cáo trong ứng dụng và không dùng dữ liệu sức khoẻ để nhắm mục tiêu quảng cáo. Lịch uống thuốc và lời nhắc được lưu ngay trên điện thoại của bạn.",
  },
  {
    question: "Cả gia đình có thể dùng chung không?",
    answer:
      "Bạn mời người thân vào nhóm Gia đình bằng mã QR dùng một lần, hết hạn sau 10 phút. Gói Miễn phí cho nhóm tối đa 2 thành viên, Pro tối đa 3, gói Gia đình tối đa 10 thành viên và 150 lượt quét đơn AI mỗi tháng dùng chung. Đơn thuốc cá nhân của mỗi người vẫn tách riêng.",
  },
  {
    question: "Có xuất được lịch sử uống thuốc để mang đi khám không?",
    answer:
      "Có. Mục Báo cáo & dữ liệu tạo báo cáo PDF hoặc CSV theo khoảng thời gian (7, 30, 90 ngày, toàn bộ liệu trình hoặc tự chọn ngày). Báo cáo được tạo và lưu trên thiết bị, không chứa ảnh đơn thuốc.",
  },
  {
    question: "Thuốc ơi có kiểm tra tương tác thuốc không?",
    answer:
      "Không. Thuốc ơi chỉ giúp nhớ lịch uống theo đơn đã kê, không kiểm tra tương tác, không gợi ý hay thay đổi thuốc. Hãy hỏi bác sĩ hoặc dược sĩ khi bạn dùng nhiều loại thuốc cùng lúc.",
  },
];

// Media của từng mục trong trang tính năng: ảnh chụp màn hình thật, khối thông báo minh hoạ
// (chuỗi thật), hoặc clip video.
export type SectionMedia =
  | { kind: "image"; file: string; alt: string }
  | { kind: "notifications"; items: (keyof typeof notificationSamples)[]; clock?: string }
  | { kind: "clip"; clip: ClipName; alt: string };

export type FeatureSection = {
  heading: string;
  body: string;
  points?: string[];
  media?: SectionMedia;
  link?: { href: string; label: string };
};

export type FeaturePage = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  description: string;
  keyword: string;
  intro: string;
  hero: SectionMedia;
  sections: FeatureSection[];
  faqs: Faq[];
  relatedPosts: string[];
};

export const featurePages: FeaturePage[] = [
  {
    slug: featureSlugs.scan,
    navLabel: "Quét đơn thuốc bằng AI",
    eyebrow: "Quét đơn thuốc",
    h1: "Quét đơn thuốc bằng AI, tự tạo lịch nhắc uống thuốc",
    metaTitle: "App quét đơn thuốc bằng AI, tự tạo lịch nhắc — Thuốc ơi",
    description:
      "Chụp tối đa 5 ảnh hoặc tải PDF đơn thuốc, Thuốc ơi đọc tên thuốc, cách dùng, ngày tái khám và đề xuất lịch nhắc theo buổi. Bạn luôn xác nhận trước khi lưu.",
    keyword: "app quét đơn thuốc",
    intro:
      "Thuốc ơi đọc ảnh chụp hoặc tệp PDF đơn thuốc bằng AI qua ba bước tách biệt: đọc chữ, nhận diện thông tin thuốc, rồi đề xuất lịch nhắc theo buổi sáng, trưa, tối. Mọi kết quả đều hiện ra để bạn đối chiếu với đơn gốc và xác nhận trước khi lịch nhắc được tạo.",
    hero: {
      kind: "image",
      file: "screenshot_iphone_03.png",
      alt: "Màn hình thêm đơn thuốc bằng ảnh, camera hoặc tệp PDF trong ứng dụng Thuốc ơi",
    },
    sections: [
      {
        heading: "Thêm đơn bằng ảnh, camera hoặc PDF",
        body: "Chụp hoặc chọn tối đa 5 ảnh cho một đơn dài nhiều trang, hoặc tải tệp PDF đơn thuốc. Ảnh càng rõ nét, đủ tên thuốc và cách dùng thì kết quả đọc càng chính xác.",
        link: { href: "blog/meo-chup-anh-don-thuoc-ro-net-de-ai-doc-dung/", label: "Mẹo chụp ảnh đơn thuốc rõ nét" },
      },
      {
        heading: "Ba bước AI tách biệt, dễ kiểm tra",
        body: "Mỗi bước chỉ làm một việc, nên khi có chỗ sai bạn biết sai ở đâu:",
        points: [
          "Đọc chữ: chỉ chép lại nội dung trên đơn, không suy đoán — đoạn không chắc chắn được đánh dấu ngay trong nội dung.",
          "Nhận diện thông tin: bác sĩ, cơ sở khám, chẩn đoán, ngày kê đơn, ngày tái khám và danh sách thuốc.",
          "Đề xuất lịch nhắc: theo buổi hoặc theo giờ, cách ngày hay theo thứ trong tuần, trước hoặc sau ăn nếu đơn ghi. Thuốc dùng \"khi cần\" không bị ép vào lịch cố định.",
        ],
        media: {
          kind: "image",
          file: "screenshot_iphone_01.png",
          alt: "Màn hình lời nhắc buổi trưa của ứng dụng Thuốc ơi, hiển thị tên thuốc và cách dùng đọc được từ đơn",
        },
      },
      {
        heading: "Bạn luôn là người xác nhận",
        body: "Thông tin đọc được hiện trong màn hình xác nhận trước khi lưu. Với đơn đã bắt đầu trong 30 ngày gần đây, bạn chọn giữ ngày trên đơn (các liều đã qua được đánh dấu là đã uống) hoặc tính lại liệu trình từ hôm nay. Bạn cũng có thể chỉ lưu thông tin đơn mà không tạo lịch nhắc nào.",
      },
      {
        heading: "Giờ nhắc theo nhịp sinh hoạt của bạn",
        body: "Khi đơn ghi \"sáng, trưa, tối\", ứng dụng dùng các mốc giờ bạn đã thiết lập theo nhịp sinh hoạt của mình — không phải giờ do ứng dụng tự đặt. Mỗi thành viên trong nhóm Gia đình có thể có mốc giờ riêng.",
      },
      {
        heading: "Không muốn dùng AI? Nhập tay",
        body: "Tự nhập tên thuốc, liều, những giờ uống, ngày bắt đầu và thời gian dùng. Cách này không gọi AI, không tính vào lượt quét đơn và dùng chung hệ thống nhắc, báo thức với đơn được quét.",
        link: { href: "blog/nhap-tay-hay-quet-ai-chon-cach-them-thuoc/", label: "Nên nhập tay hay quét bằng AI?" },
      },
      {
        heading: "Mẹo & lưu ý đi kèm đơn thuốc",
        body: "Ứng dụng tách riêng lưu ý từ bác sĩ ghi trên đơn và các gợi ý chung do AI tạo, kèm nhắc rõ rằng thông tin chỉ mang tính tham khảo, không thay thế tư vấn, chẩn đoán của bác sĩ hoặc dược sĩ.",
      },
      {
        heading: "Lượt quét theo gói",
        body: "Gói Miễn phí có 3 lượt quét đơn bằng AI mỗi tháng, Pro có 30 lượt mỗi người, gói Gia đình có 150 lượt dùng chung cả nhóm. Một phiên đọc đơn (tối đa 5 ảnh) tính là một lượt.",
        link: { href: "bang-gia/", label: "Xem bảng giá" },
      },
    ],
    faqs: [
      {
        question: "AI có đọc được đơn thuốc viết tay không?",
        answer:
          "Có thể, nhưng chữ viết tay khó đọc, ảnh mờ hoặc bị cắt dễ làm kết quả thiếu hoặc sai. Đoạn không chắc chắn được đánh dấu để bạn kiểm tra; nếu vẫn không rõ, hãy hỏi lại dược sĩ và nhập tay.",
      },
      {
        question: "Một lượt quét đơn được tính thế nào?",
        answer:
          "Một phiên đọc đơn — gồm đọc chữ, nhận diện thông tin và đề xuất lịch nhắc cho tối đa 5 ảnh — tính là một lượt. Nhập thuốc thủ công không tính lượt.",
      },
      {
        question: "Ứng dụng có tự đổi liều thuốc không?",
        answer:
          "Không. Thuốc ơi chỉ chép lại cách dùng ghi trên đơn và đề xuất lịch theo đó; bạn xác nhận trước khi lưu. Mọi thay đổi về liều phải do bác sĩ hoặc dược sĩ quyết định.",
      },
    ],
    relatedPosts: [
      "meo-chup-anh-don-thuoc-ro-net-de-ai-doc-dung",
      "doc-hieu-don-thuoc-bac-si-ghi-tat",
      "nhap-tay-hay-quet-ai-chon-cach-them-thuoc",
      "don-thuoc-dien-tu-la-gi",
    ],
  },
  {
    slug: featureSlugs.reminders,
    navLabel: "Nhắc uống thuốc",
    eyebrow: "Thông báo & báo thức",
    h1: "Nhắc uống thuốc đúng giờ: thông báo, báo lại và báo thức",
    metaTitle: "App nhắc uống thuốc đúng giờ, kể cả khi máy im lặng — Thuốc ơi",
    description:
      "Thông báo nhắc từng liều có nút Đã uống và Báo lại 10 phút, nhắc lần hai sau 45 phút, báo thức vẫn kêu khi iPhone im lặng. Không cần mạng, không lộ tên thuốc.",
    keyword: "app nhắc uống thuốc",
    intro:
      "Thuốc ơi nhắc từng liều bằng thông báo ngay trên điện thoại, không cần mạng. Bạn bấm \"Đã uống\" hoặc \"Báo lại 10 phút\" ngay trên thông báo; nếu liều vẫn chưa được xác nhận, ứng dụng nhắc thêm một lần sau 45 phút. Trên iOS 26 trở lên có thể bật báo thức để vẫn kêu khi máy im lặng.",
    hero: {
      kind: "clip",
      clip: "notifications",
      alt: "Video minh hoạ thông báo Đến giờ uống thuốc với hai nút Đã uống và Báo lại 10 phút",
    },
    sections: [
      {
        heading: "Thông báo có sẵn nút thao tác",
        body: "Đến giờ, điện thoại hiện thông báo \"Đến giờ uống thuốc\". Bấm \"Đã uống\" để ghi nhận liều ngay — không cần mở ứng dụng — hoặc \"Báo lại 10 phút\" khi đang bận. Âm báo riêng cho giờ uống thuốc giúp bạn phân biệt với thông báo khác.",
        media: { kind: "notifications", items: ["reminder"], clock: "08:00" },
      },
      {
        heading: "Nhắc lần hai khi có thể bạn đã bỏ lỡ",
        body: "Lỡ tay vuốt mất thông báo là chuyện thường. Nếu sau 45 phút liều vẫn chưa được xác nhận, ứng dụng gửi thêm một lời nhắc. Khi bạn đã đánh dấu đã uống, lời nhắc lần hai tự huỷ.",
        media: { kind: "notifications", items: ["followUp", "reminder"], clock: "08:45" },
        link: { href: "blog/quen-uong-thuoc-1-lan-co-sao-khong/", label: "Quên uống thuốc 1 lần có sao không?" },
      },
      {
        heading: "Báo thức không phụ thuộc chế độ im lặng (iOS 26+)",
        body: "Trên iOS 26 trở lên, lời nhắc có thể tạo báo thức riêng: vẫn kêu và hiện rõ nội dung cần uống ngay cả khi iPhone đang im lặng hoặc ở chế độ Tập trung. Bật báo thức trong phần cài đặt thông báo của ứng dụng.",
        media: { kind: "clip", clip: "alarm", alt: "Video màn hình báo thức Thuốc ơi trên iPhone lúc 16:35, nội dung uống 3 viên thuốc và nhỏ tai" },
      },
      {
        heading: "Kín đáo trên màn hình khoá",
        body: "Thông báo dùng nội dung chung chung như \"Bạn có một lời nhắc uống thuốc\", không hiện tên thuốc hay chẩn đoán. Chi tiết chỉ hiện khi bạn mở ứng dụng.",
      },
      {
        heading: "Hoạt động cả khi mất mạng",
        body: "Lời nhắc được lên lịch ngay trên điện thoại sau khi bạn xác nhận đơn, nên vẫn đến đúng giờ khi bạn đi máy bay, về quê sóng yếu hay tắt dữ liệu di động.",
        link: { href: "blog/giu-dung-gio-uong-thuoc-khi-di-cong-tac-du-lich/", label: "Giữ đúng giờ uống thuốc khi đi xa" },
      },
      {
        heading: "Những lời nhắc khác bạn sẽ nhận",
        body: "Ngoài giờ uống thuốc, ứng dụng còn nhắc lịch hẹn tái khám, báo khi đơn thuốc hoặc một loại thuốc sắp hết, và — nếu bạn bật — gửi tổng kết tuân thủ 7 ngày vào mỗi sáng Chủ nhật.",
        media: { kind: "notifications", items: ["appointment", "renewal", "weeklyDigest"], clock: "08:00" },
        link: { href: featureHref(featureSlugs.tracking), label: "Theo dõi liệu trình và tồn thuốc" },
      },
    ],
    faqs: [
      {
        question: "Không có mạng có nhận được lời nhắc không?",
        answer:
          "Có. Lời nhắc được lên lịch ngay trên điện thoại nên vẫn đến đúng giờ khi không có mạng. Chỉ quét đơn bằng AI, đồng bộ và cảnh báo người chăm sóc mới cần kết nối.",
      },
      {
        question: "Vì sao thông báo không hiện tên thuốc?",
        answer:
          "Để bảo vệ quyền riêng tư: màn hình khoá có thể bị người khác nhìn thấy. Thông báo chỉ nói bạn có một lời nhắc uống thuốc; chi tiết hiện khi bạn mở ứng dụng.",
      },
      {
        question: "Android có báo thức như iPhone không?",
        answer:
          "Báo thức riêng vượt chế độ im lặng hiện dành cho iOS 26 trở lên. Trên Android, lời nhắc đến bằng thông báo với âm báo riêng cho giờ uống thuốc; hãy cho phép thông báo và báo thức trong cài đặt để nhắc đúng giờ.",
      },
      {
        question: "Bấm \"Báo lại 10 phút\" thì sao?",
        answer:
          "Lời nhắc được dời thêm 10 phút và liều vẫn chưa được ghi nhận cho đến khi bạn bấm \"Đã uống\".",
      },
    ],
    relatedPosts: [
      "cach-dat-loi-nhac-uong-thuoc-tren-dien-thoai",
      "quen-uong-thuoc-1-lan-co-sao-khong",
      "dau-hieu-quen-lieu-uong-trung-lieu-thuoc",
      "uong-thuoc-dung-gio-khi-lam-ca-dem-xoay-ca",
    ],
  },
  {
    slug: featureSlugs.family,
    navLabel: "Nhóm Gia đình",
    eyebrow: "Gia đình & người chăm sóc",
    h1: "Nhóm Gia đình: cùng theo dõi uống thuốc, báo khi người thân lỡ liều",
    metaTitle: "Theo dõi cha mẹ uống thuốc từ xa với nhóm Gia đình — Thuốc ơi",
    description:
      "Mời người thân bằng mã QR, xem đơn thuốc và tiến trình của nhau, nhận thông báo đẩy khi cha mẹ có thể đã bỏ lỡ liều. Tối đa 10 thành viên với gói Gia đình.",
    keyword: "theo dõi cha mẹ uống thuốc từ xa",
    intro:
      "Với nhóm Gia đình của Thuốc ơi, bạn mời người thân bằng mã QR dùng một lần, cùng xem đơn thuốc và tiến trình uống thuốc, và có thể bật Cảnh báo người chăm sóc: khi một thành viên có thể đã bỏ lỡ liều, điện thoại của bạn nhận thông báo đẩy để kịp gọi hỏi thăm.",
    hero: {
      kind: "clip",
      clip: "family",
      alt: "Video minh hoạ thông báo Nhắc bỏ lỡ liều: Thảo có thể đã bỏ lỡ liều thuốc 20:00",
    },
    sections: [
      {
        heading: "Mời người thân bằng mã QR",
        body: "Bạn tạo mã QR mời, người thân quét bằng ứng dụng để tham gia. Mã chỉ dùng được một lần và tự hết hạn sau 10 phút, nên chụp lại hay gửi nhầm cũng không bị người lạ vào nhóm.",
        media: {
          kind: "image",
          file: "screenshot_iphone_05.png",
          alt: "Màn hình gia đình trong ứng dụng Thuốc ơi, hiển thị hai thành viên Tôi và Thảo cùng lịch nhắc trong ngày",
        },
      },
      {
        heading: "Cảnh báo người chăm sóc khi có liều bị lỡ",
        body: "Bật \"Báo liều bị bỏ lỡ\" và chọn theo dõi tất cả thành viên (kể cả người tham gia sau) hoặc chỉ những người bạn chọn. Hệ thống kiểm tra định kỳ các liều đã quá giờ mà chưa được xác nhận, rồi gửi thông báo đẩy \"Nhắc bỏ lỡ liều\" tới điện thoại của bạn.",
        points: [
          "Thông báo chỉ nói ai có thể đã lỡ liều và liều lúc mấy giờ — không ghi tên thuốc.",
          "Chỉ người bật cảnh báo mới nhận; quyền thông báo được hỏi khi bạn bật tính năng, không hỏi trước.",
        ],
        media: { kind: "notifications", items: ["caregiver"], clock: "20:45" },
        link: { href: "blog/nhac-bo-me-uong-thuoc-tu-xa/", label: "Cách nhắc bố mẹ uống thuốc từ xa" },
      },
      {
        heading: "Chia sẻ đúng đơn bạn muốn",
        body: "Bạn chọn đơn nào thêm vào nhóm: một bản sao đơn thuốc và lịch nhắc liên quan được chia sẻ, đơn cá nhân vẫn giữ nguyên. Gỡ khỏi nhóm bất cứ lúc nào mà không mất dữ liệu của mình.",
      },
      {
        heading: "Đặt giờ nhắc theo nhịp sinh hoạt của từng người",
        body: "Cha mẹ ăn sáng lúc 6 giờ, con đi làm ăn lúc 8 giờ? Bạn có thể thiết lập mốc giờ \"sáng, trưa, tối\" riêng cho từng thành viên, để lời nhắc từ đơn khớp với sinh hoạt thật của người dùng thuốc.",
        link: { href: "blog/cach-quan-ly-thuoc-cho-nguoi-gia-song-mot-minh/", label: "Quản lý thuốc cho người già sống một mình" },
      },
      {
        heading: "Số thành viên theo gói",
        body: "Gói Miễn phí cho nhóm tối đa 2 thành viên, Pro tối đa 3, gói Gia đình tối đa 10 thành viên (tính cả chủ nhóm) và 150 lượt quét đơn AI mỗi tháng dùng chung. Khi gói hết hạn, dữ liệu nhóm vẫn được giữ.",
        link: { href: "bang-gia/", label: "So sánh các gói" },
      },
    ],
    faqs: [
      {
        question: "Người trong nhóm có xem được mọi đơn thuốc của tôi không?",
        answer:
          "Không. Chỉ những đơn bạn chủ động thêm vào nhóm mới hiển thị cho nhóm; đơn cá nhân vẫn riêng tư và bạn có thể gỡ đơn khỏi nhóm bất cứ lúc nào.",
      },
      {
        question: "Khi nào người chăm sóc nhận được cảnh báo?",
        answer:
          "Khi một liều của thành viên được theo dõi đã quá giờ khá lâu mà vẫn chưa được đánh dấu đã uống. Hệ thống kiểm tra định kỳ, nên cảnh báo đến sau giờ uống một khoảng chứ không ngay lập tức.",
      },
      {
        question: "Cha mẹ ở xa, không ở cùng nhà có dùng được không?",
        answer:
          "Được. Nhóm Gia đình đồng bộ qua mạng nên không cần ở cùng nơi; mỗi người dùng ứng dụng trên điện thoại của mình và tham gia nhóm bằng mã QR.",
      },
      {
        question: "Một nhóm có tối đa bao nhiêu người?",
        answer:
          "Tuỳ gói hiệu lực của nhóm: Miễn phí 2 thành viên, Pro 3 thành viên, Gia đình 10 thành viên, tính cả chủ nhóm.",
      },
    ],
    relatedPosts: [
      "nhac-bo-me-uong-thuoc-tu-xa",
      "cach-quan-ly-thuoc-cho-nguoi-gia-song-mot-minh",
      "nha-nhieu-nguoi-cung-uong-thuoc-khong-nham-lan",
      "anh-chi-em-thay-phien-cham-cha-me-ban-giao-lich-uong-thuoc",
    ],
  },
  {
    slug: featureSlugs.tracking,
    navLabel: "Theo dõi liệu trình",
    eyebrow: "Tiến trình, tồn thuốc & báo cáo",
    h1: "Theo dõi liệu trình: tiến trình, tồn thuốc, tái khám và báo cáo",
    metaTitle: "Theo dõi liệu trình, tồn thuốc và xuất báo cáo dùng thuốc — Thuốc ơi",
    description:
      "Biết đã uống bao nhiêu liều, còn bao nhiêu thuốc, được nhắc trước khi hết thuốc và ngày tái khám, xuất báo cáo PDF/CSV lịch sử dùng thuốc để mang theo khi đi khám.",
    keyword: "theo dõi lịch sử uống thuốc",
    intro:
      "Thuốc ơi tính số liều của cả liệu trình và ghi nhận từng liều đã uống, nên bạn luôn biết đã uống bao nhiêu, còn bao nhiêu ngày thuốc. Ứng dụng còn nhắc trước khi sắp hết thuốc, nhắc lịch tái khám, gửi tổng kết hằng tuần nếu bạn bật, và xuất báo cáo PDF hoặc CSV để mang theo khi đi khám.",
    hero: {
      kind: "image",
      file: "screenshot_iphone_04.png",
      alt: "Màn hình đơn thuốc hiển thị đã uống 59/98 liều, tỉ lệ 60%, chi tiết từng loại thuốc",
    },
    sections: [
      {
        heading: "Tiến trình của từng đơn thuốc",
        body: "Mỗi đơn hiển thị số liều đã uống trên tổng số liều và tỉ lệ phần trăm, chi tiết đến từng loại thuốc. Khi bạn uống đúng giờ nhiều ngày liền, đơn hiện số ngày liên tiếp — chỉ là con số để tự theo dõi, không có điểm thưởng hay xếp hạng.",
      },
      {
        heading: "Theo dõi tồn thuốc (không bắt buộc)",
        body: "Nhập số lượng thuốc đang có, ứng dụng tự trừ mỗi khi bạn đánh dấu đã uống. Mua thêm thì bấm thêm thuốc, đếm lại thì chỉnh số còn lại. Khi một loại thuốc sắp hết, bạn nhận thông báo để kịp mua.",
        media: { kind: "notifications", items: ["inventoryLow"], clock: "08:00" },
      },
      {
        heading: "Nhắc trước khi đơn thuốc dùng hết",
        body: "Từ lịch liều và số thuốc đã có, ứng dụng dự báo ngày hết thuốc — sớm hơn ngày cuối liệu trình nếu số thuốc mua ít hơn. Ba ngày trước đó, bạn nhận thông báo và một banner mời quét đơn mới, để kịp đi tái khám hoặc mua thêm theo chỉ định.",
        media: { kind: "notifications", items: ["renewal"], clock: "08:00" },
        link: { href: "blog/co-nen-dung-lai-don-thuoc-cu/", label: "Có nên dùng lại đơn thuốc cũ?" },
      },
      {
        heading: "Lịch tuần và lịch hẹn tái khám",
        body: "Ngày tái khám hoặc xét nghiệm đọc được từ đơn tự xuất hiện trong lịch, cùng lịch uống thuốc cả tuần. Đến ngày hẹn, ứng dụng gửi lời nhắc lịch hẹn.",
        media: {
          kind: "image",
          file: "screenshot_iphone_07.png",
          alt: "Màn hình lịch tuần trong ứng dụng Thuốc ơi, hiển thị các ngày cần uống thuốc và lịch hẹn tái khám",
        },
        link: { href: "blog/chuan-bi-truoc-tai-kham-doc-dung-don-thuoc-moi/", label: "Chuẩn bị trước khi tái khám" },
      },
      {
        heading: "Tổng kết tuân thủ mỗi tuần",
        body: "Bật \"Nhắc tuân thủ hằng tuần\" trong cài đặt để nhận tổng kết 7 ngày qua vào mỗi sáng Chủ nhật: đã uống bao nhiêu trên tổng số liều đến hạn.",
        media: { kind: "notifications", items: ["weeklyDigest"], clock: "08:00" },
      },
      {
        heading: "Xuất báo cáo dùng thuốc PDF hoặc CSV",
        body: "Mục Báo cáo & dữ liệu tạo báo cáo để mang theo khi đi khám hoặc lưu hồ sơ:",
        points: [
          "Chọn khoảng thời gian: 7, 30, 90 ngày gần nhất, toàn bộ liệu trình, toàn bộ dữ liệu hoặc tự chọn ngày.",
          "Chọn tất cả đơn hoặc một đơn, đơn đang uống hay đã hoàn thành.",
          "Báo cáo gồm tổng quan, đơn thuốc, lịch sử từng liều (đã uống, bỏ qua, chưa xác nhận) và tỷ lệ đã uống.",
          "Tệp được tạo và lưu trên thiết bị, không chứa ảnh đơn thuốc hay nội dung đọc từ ảnh. Bạn tự chọn mở hoặc chia sẻ.",
        ],
      },
    ],
    faqs: [
      {
        question: "Không nhập số lượng thuốc thì có dùng được không?",
        answer:
          "Được. Theo dõi tồn thuốc là tuỳ chọn; không nhập thì ứng dụng vẫn nhắc và ghi nhận tiến trình theo lịch liều bình thường.",
      },
      {
        question: "Báo cáo dùng thuốc có được gửi lên máy chủ không?",
        answer:
          "Không. Báo cáo được tạo và lưu ngay trên điện thoại; chỉ khi bạn bấm chia sẻ thì tệp mới được gửi đi qua ứng dụng bạn chọn.",
      },
      {
        question: "Báo cáo có thay thế hồ sơ bệnh án không?",
        answer:
          "Không. Dữ liệu trong báo cáo do người dùng ghi nhận và chỉ dùng để tham khảo, không thay thế hồ sơ, chẩn đoán hoặc tư vấn của nhân viên y tế.",
      },
    ],
    relatedPosts: [
      "chuan-bi-truoc-tai-kham-doc-dung-don-thuoc-moi",
      "quan-ly-nhieu-loai-thuoc-cung-luc-sau-xuat-vien",
      "uong-thuoc-bao-hiem-y-te-canh-ngay-linh-thuoc-moi",
      "co-nen-dung-lai-don-thuoc-cu",
    ],
  },
];

export const findFeaturePage = (slug: string) => featurePages.find((page) => page.slug === slug);
