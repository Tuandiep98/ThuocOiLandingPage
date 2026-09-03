// Nguồn nội dung trung tâm cho landing page — copy được đối chiếu từ README/CLAUDE.md
// và bản dịch vi.json thật của app Flutter "Thuốc ơi" (github.com/Tuandiep98/thuocoi),
// không phải nội dung dựng sẵn.

export const site = {
  name: 'Thuốc ơi',
  url: 'https://thuocoi.app', // TODO: cập nhật khi có domain thật
  tagline: 'Lên lịch uống thuốc thông minh, từ một tấm ảnh đơn thuốc',
  description:
    'Thuốc ơi đọc đơn thuốc bằng AI, tự tạo lịch nhắc theo từng buổi và nhắc đúng giờ — kể cả khi điện thoại đang im lặng. Miễn phí nhập thuốc thủ công không giới hạn, dùng chung cho cả gia đình.',
  locale: 'vi_VN',
};

export const storeLinks = {
  appStore: 'https://apps.apple.com/us/app/thu%E1%BB%91c-%C6%A1i/id6804452525',
  googlePlay: 'https://play.google.com/store/apps/details?id=com.tuandiep.thuocoi',
};

// Trang pháp lý chính thức (nguồn dữ liệu sống — không copy nội dung vào đây để tránh lệch phiên bản).
export const legalLinks = {
  privacy: 'https://tuandiep98.github.io/ThuocOiPublicPage/#/privacy?lang=vi',
  terms: 'https://tuandiep98.github.io/ThuocOiPublicPage/#/terms?lang=vi',
};

export const trustPoints = [
  {
    title: 'Không quảng cáo',
    body: 'Ứng dụng xử lý dữ liệu và thời điểm nhắc liên quan sức khoẻ — không đặt quảng cáo, không dùng dữ liệu sức khoẻ để nhắm mục tiêu.',
  },
  {
    title: 'Lưu ngay trên máy của bạn',
    body: 'Lịch uống thuốc và lời nhắc được lưu ngay trên điện thoại, vẫn hoạt động bình thường cả khi mạng yếu hoặc mất mạng.',
  },
  {
    title: 'Miễn phí không giới hạn phần lõi',
    body: 'Nhập thuốc thủ công, nhắc thuốc và lịch sử cho bản thân dùng miễn phí không giới hạn.',
  },
];

export const howItWorks = [
  {
    step: '01',
    title: 'Chụp ảnh đơn thuốc',
    body: 'Chụp hoặc tải lên tối đa 5 ảnh đơn thuốc, hoặc tệp PDF — ảnh càng rõ nét, càng đủ tên thuốc và liều dùng thì máy đọc càng chính xác.',
  },
  {
    step: '02',
    title: 'AI đọc và tạo lịch nhắc',
    body: 'AI tách riêng từng bước: đọc chữ trong đơn, nhận diện bác sĩ/chẩn đoán/danh sách thuốc, rồi sinh lịch theo buổi sáng, trưa, tối. Bạn luôn xem lại và xác nhận trước khi lịch được tạo.',
  },
  {
    step: '03',
    title: 'Nhắc đúng giờ, kể cả khi im lặng',
    body: 'Điện thoại tự nhắc từng liều bằng thông báo, kể cả khi không có mạng; trên iOS 26 trở lên có thể bật thêm báo thức riêng để lời nhắc vẫn kêu khi điện thoại đang im lặng hoặc ở chế độ Tập trung.',
  },
];

export type Feature = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

// title/body lấy nguyên văn (hoặc sát nghĩa) từ ảnh chụp màn hình App Store thật
// (assets/store_screenshots/iphone) của ứng dụng Thuốc ơi.
export const features: Feature[] = [
  {
    title: 'Tạo lời nhắc từ đơn thuốc thông minh',
    body: 'Ứng dụng đọc đơn thuốc và tự sắp lời nhắc theo đúng buổi sáng, trưa, tối — theo nhịp sinh hoạt bạn đã chọn, không phải giờ ứng dụng tự đặt.',
    image: 'screenshot_iphone_01.png',
    imageAlt: 'Màn hình lời nhắc buổi trưa của ứng dụng Thuốc ơi, hiển thị tên thuốc và cách dùng đọc được từ đơn',
  },
  {
    title: 'Tạo lời nhắc và tiến trình theo dõi tự động',
    body: 'Ứng dụng tính toán số lượng thuốc trong cả liệu trình và theo dõi số liệu thực tế đã uống, để bạn biết còn bao nhiêu ngày thuốc.',
    image: 'screenshot_iphone_04.png',
    imageAlt: 'Màn hình đơn thuốc hiển thị đã uống 59/98 liều, tỉ lệ 60%, chi tiết từng loại thuốc',
  },
  {
    title: 'Thêm đơn thuốc bằng hình ảnh hoặc tệp PDF',
    body: 'Không có ảnh rõ? Vẫn thêm được đơn thuốc bằng tệp PDF, hoặc tự nhập từng loại thuốc mà không cần dùng đến AI.',
    image: 'screenshot_iphone_03.png',
    imageAlt: 'Màn hình thêm đơn thuốc bằng ảnh hoặc PDF trong ứng dụng Thuốc ơi',
  },
  {
    title: 'Tham gia Gia Đình',
    body: 'Theo dõi đơn thuốc và tiến trình uống thuốc chung giữa mọi người trong gia đình — hữu ích khi con cái chăm sóc cha mẹ lớn tuổi.',
    image: 'screenshot_iphone_05.png',
    imageAlt: 'Màn hình gia đình trong ứng dụng Thuốc ơi, hiển thị hai thành viên Tôi và Thảo cùng lịch nhắc trong ngày',
  },
  {
    title: 'Theo dõi lịch hẹn tái khám',
    body: 'Ngày tái khám hoặc xét nghiệm đọc được từ đơn thuốc sẽ tự xuất hiện trong lịch, cùng với lịch uống thuốc cả tuần để dễ nhìn tổng thể.',
    image: 'screenshot_iphone_07.png',
    imageAlt: 'Màn hình lịch tuần trong ứng dụng Thuốc ơi, hiển thị các ngày cần uống thuốc và lịch hẹn tái khám',
  },
  {
    title: 'Báo thức không phụ thuộc chuông im lặng',
    body: 'Trên iOS 26 trở lên, lời nhắc có thể tạo báo thức riêng — vẫn kêu và hiển thị rõ tên thuốc, giờ uống ngay cả khi iPhone đang im lặng hoặc ở chế độ Tập trung.',
    image: 'screenshot_iphone_08.png',
    imageAlt: 'Màn hình báo thức Thuốc ơi trên iPhone, hiển thị 16:35 và nội dung uống 3 viên thuốc và nhỏ tai',
  },
];

export type Plan = {
  id: 'free' | 'pro' | 'family';
  name: string;
  price: string;
  priceNote?: string;
  highlight?: boolean;
  description: string;
  benefits: string[];
};

// Giới hạn/giá trị lấy nguyên từ mục "Định hướng thương mại và giới hạn sử dụng" trong README gốc.
export const plans: Plan[] = [
  {
    id: 'free',
    name: 'Miễn phí',
    price: '0đ',
    description: 'Đủ dùng cho nhu cầu nhắc thuốc hằng ngày, không giới hạn thời gian.',
    benefits: [
      'Nhập thuốc thủ công không giới hạn',
      'Nhắc thuốc và báo thức không giới hạn',
      'Lịch sử uống thuốc cho bản thân không giới hạn',
      'Tối đa 3 lượt quét đơn bằng AI mỗi tháng',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '',
    priceNote: 'Xem giá trong ứng dụng',
    highlight: true,
    description: 'Cho người quét đơn thuốc thường xuyên hoặc chăm sóc thêm một người thân.',
    benefits: [
      'Tối đa 30 lượt quét đơn bằng AI mỗi tháng',
      'Tạo nhóm gia đình tối đa 2 thành viên',
      'Toàn bộ quyền lợi của gói Miễn phí',
    ],
  },
  {
    id: 'family',
    name: 'Gia đình',
    price: '',
    priceNote: 'Xem giá trong ứng dụng',
    description: 'Cho cả nhà cùng dùng chung một gói, tối đa 5 thành viên.',
    benefits: [
      'Tối đa 5 thành viên, tính cả chủ nhóm',
      '150 lượt quét đơn bằng AI mỗi tháng, dùng chung cho cả nhóm',
      'Toàn bộ quyền lợi của gói Pro',
    ],
  },
];

export const faqs = [
  {
    question: 'Thuốc ơi đọc đơn thuốc bằng cách nào?',
    answer:
      'Ảnh đơn thuốc được xử lý qua AI theo 3 bước tách biệt: đọc chữ trong ảnh, nhận diện thông tin (bác sĩ, chẩn đoán, danh sách thuốc), rồi mới sinh lịch nhắc. Kết quả luôn hiển thị trong màn hình xác nhận để bạn đối chiếu với đơn gốc trước khi lưu.',
  },
  {
    question: 'Nếu AI đọc sai thông tin thuốc thì sao?',
    answer:
      'Đoạn chữ không chắc chắn sẽ được đánh dấu ngay trong nội dung đọc được, và ứng dụng luôn yêu cầu xác nhận trước khi tạo lịch nhắc. Thuốc ơi không thay thế tư vấn, chẩn đoán của bác sĩ hoặc dược sĩ — hãy đối chiếu với đơn gốc và hỏi lại chuyên gia y tế nếu chưa chắc chắn.',
  },
  {
    question: 'Không có ảnh đơn thuốc rõ thì có dùng được không?',
    answer:
      'Có. Bạn có thể thêm đơn bằng tệp PDF, hoặc tự nhập tên thuốc, liều dùng và giờ uống — cách nhập tay này không dùng AI và không tính vào lượt quét đơn hằng tháng.',
  },
  {
    question: 'Lời nhắc có kêu khi điện thoại đang im lặng không?',
    answer:
      'Điện thoại tự nhắc bằng thông báo, không cần mạng. Trên iOS 26 trở lên, bạn có thể bật thêm báo thức riêng cho lời nhắc để vẫn kêu khi iPhone đang im lặng hoặc ở chế độ Tập trung.',
  },
  {
    question: 'Dữ liệu sức khoẻ của tôi có được dùng để quảng cáo không?',
    answer:
      'Không. Thuốc ơi không đặt quảng cáo trong ứng dụng và không dùng dữ liệu sức khoẻ để nhắm mục tiêu quảng cáo. Lịch uống thuốc và lời nhắc được lưu ngay trên điện thoại của bạn.',
  },
  {
    question: 'Cả gia đình có thể dùng chung một tài khoản không?',
    answer:
      'Bạn có thể mời người thân vào nhóm Gia đình bằng mã QR dùng một lần và tự hết hạn. Gói Pro tối đa 2 thành viên, gói Gia đình tối đa 5 thành viên dùng chung quota quét đơn AI hằng tháng. Đơn thuốc và lời nhắc của mỗi người vẫn tách riêng.',
  },
  {
    question: 'Thuốc ơi có miễn phí không?',
    answer:
      'Có. Gói Miễn phí dùng nhập thuốc thủ công, nhắc thuốc và lịch sử cho bản thân không giới hạn, cùng 3 lượt quét đơn bằng AI mỗi tháng. Gói Pro và Gia đình mở thêm lượt quét AI và chia sẻ nhóm gia đình.',
  },
];
