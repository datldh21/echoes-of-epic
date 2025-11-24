import {
  Home,
  BookOpen,
  Mic,
  GalleryHorizontal,
  Users,
  Puzzle,
  GitCompare,
  Twitter,
  Youtube,
  Folder,
  Flame,
  User,
  Quote,
  Heart,
  Shield,
  Brain,
  Scale
} from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export const NAV_LINKS = [
  { href: '/', label: 'Trang chủ', icon: Home },
  { href: '/museum', label: 'Bảo tàng số', icon: BookOpen },
  { href: '/podcast', label: 'Podcast', icon: Mic },
  { href: '/gallery', label: 'Xưởng sáng tạo', icon: GalleryHorizontal },
  { href: '/debate', label: 'Diễn đàn', icon: Users },
  { href: '/minigame', label: 'Góc tri thức', icon: Puzzle },
  { href: '/legacy', label: 'Nhịp cầu thời gian', icon: GitCompare },
];

export const FOOTER_LINKS = [
  { href: '#', label: 'Padlet', icon: Folder },
  { href: '#', label: 'YouTube', icon: Youtube },
  { href: '#', label: 'Drive', icon: Folder },
];

export const FEATURE_CARDS = [
  { title: "Bảo tàng số", description: "Không gian triển lãm số mô phỏng, tái hiện nhân vật trong đoạn trích.", icon: BookOpen, href: "/museum" },
  { title: "Podcast", description: "Lắng nghe tâm tư của những người trong cuộc.", icon: Mic, href: "/podcast" },
  { title: "Xưởng sáng tạo", description: "Không gian trưng bày những sản phẩm nghệ thuật do học sinh sưu tầm và sáng tạo.", icon: GalleryHorizontal, href: "/gallery" },
  { title: "Diễn đàn", description: "Bảo vệ quan điểm của bạn về các lựa chọn.", icon: Users, href: "/debate" },
  { title: "Góc tri thức", description: "Thử tài chiến lược, bảo vệ thành Troy.", icon: Puzzle, href: "/minigame" },
  { title: "Nhịp cầu thời gian", description: "Soi chiếu giá trị sử thi vào cuộc sống hiện đại.", icon: GitCompare, href: "/legacy" },
];

export const ILIAD_TIMELINE = [
    { year: "Năm 1", event: "Paris bắt cóc Helen, chiến tranh nổ ra." },
    { year: "Năm 2-8", event: "Giao tranh kéo dài, nhiều anh hùng ngã xuống." },
    { year: "Năm 9", event: "Achilles mâu thuẫn, rút khỏi cuộc chiến." },
    { year: "Năm 10", event: "Ngựa gỗ và sự sụp đổ của thành Troy." },
];

export const TROY_MAP_LOCATIONS = [
  { name: "Cổng Scaean", description: "Cổng chính của thành Troy, nơi diễn ra nhiều trận đánh và cuộc chia ly lịch sử.", top: "50%", left: "10%" },
  { name: "Cung điện Priam", description: "Nơi ở của hoàng gia Troy, trung tâm quyền lực của thành phố.", top: "30%", left: "45%" },
  { name: "Đền thờ Apollo", description: "Một ngôi đền linh thiêng được người dân Troy tôn kính.", top: "70%", left: "60%" },
  { name: "Trại quân Hy Lạp", description: "Nằm bên ngoài tường thành, nơi quân đội Achaean đóng quân suốt 10 năm.", top: "85%", left: "25%" },
];

const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const findCharacterAvatar = (avatarId: string) => {
    return PlaceHolderImages.find(img => img.id === avatarId)?.imageUrl;
};

export const CHARACTERS = [
  {
    name: "HÉCTƠ (HECTOR)",
    avatarId: 'hector-avatar',
    description: "Hoàng tử, tổng chỉ huy quân đội Troy. Một người chồng, người cha yêu thương gia đình nhưng đặt trách nhiệm với tổ quốc lên hàng đầu.",
    info: { "Quê quán": "Thành Troy", "Dòng dõi": "Vua Priam", "Sứ mệnh": "Bảo vệ thành Troy" },
    qualities: [ "Dũng cảm", "Trách nhiệm", "Yêu thương", "Danh dự" ],
    quote: "…chiến tranh là bổn phận của mỗi người đàn ông sinh ra ở thành Ilion này, và nhất là của ta."
  },
  {
    name: "ĂNGĐRÔMÁC (ANDROMACHE)",
    avatarId: 'andromache-avatar',
    description: "Vợ của Hector. Nàng đại diện cho tình yêu, gia đình và nỗi đau của người phụ nữ trong chiến tranh.",
    info: { "Quê quán": "Thebe", "Dòng dõi": "Vua Eetion", "Sứ mệnh": "Giữ gìn hạnh phúc gia đình" },
    qualities: [ "Vị tha", "Yêu thương", "Tinh tế", "Kiên cường" ],
    quote: "Chàng ơi, lòng can đảm của chàng sẽ giết chết chàng, chàng không biết thương đứa con thơ dại của chúng ta ư…"
  },
  {
    name: "A-XCHI-A-NẮC (ASTYANAX)",
    avatarId: 'astyanax-avatar-new',
    description: "Biểu tượng của hy vọng, tình yêu gia đình và tương lai của Troy.",
    info: { "Quê quán": "Thành Troy", "Dòng dõi": "Hoàng tử thành Troy", "Sứ mệnh": "Tương lai của vương quốc" },
    qualities: [],
    quote: ""
  },
];

export const PODCASTS = [
    {
      id: 1,
      title: "Lời nhắn gửi từ người chiến binh",
      speaker: "Héctơ",
      avatar: findImage('hector-avatar'),
      summary: "Hector chia sẻ về sự giằng xé giữa tình yêu gia đình và danh dự của một chiến binh, một người gánh vác vận mệnh của cả thành Troy.",
      transcript: "Ta đứng đây, giữa tình yêu và danh dự. Andromache, con trai ta, là tất cả những gì ta có. Nhưng thành Troy đang cháy. Bổn phận gọi tên ta. Một ngày nào đó, con trai ta sẽ hiểu. Rằng cha nó đã không lùi bước. Đây là lời nhắn của ta, từ một chiến binh, một người cha."
    },
    {
      id: 2,
      title: "Nhật ký của người vợ trong ngày chia ly",
      speaker: "Andromache",
      avatar: findImage('andromache-avatar'),
      summary: "Nỗi lòng của Andromache khi chứng kiến người chồng yêu thương lao vào cuộc chiến mà nàng biết rằng chàng sẽ không trở về.",
      transcript: "Ngày hôm nay, chàng đã đi. Ta đã thấy cái chết trong mắt chàng. Lòng can đảm của chàng sẽ giết chết chàng. Astyanax còn quá nhỏ. Ai sẽ bảo vệ chúng ta? Bức tường thành này liệu có đủ vững chãi khi không còn chàng? Nhật ký này, là những giọt nước mắt của ta."
    },
    {
      id: 3,
      title: "Homer trả lời phỏng vấn",
      speaker: "Homer",
      avatar: findImage('homer-avatar'),
      summary: "Nhà thơ mù Homer lý giải về bi kịch, chủ nghĩa anh hùng và những giá trị nhân văn mà ông đã gửi gắm qua Iliad.",
      transcript: "Các bạn hỏi ta về anh hùng. Hector là một anh hùng. Achilles cũng vậy. Nhưng bi kịch của họ mới là điều ta muốn kể. Sự lựa chọn. Định mệnh. Và tình người, thứ ánh sáng le lói trong đêm dài của chiến tranh. Đó là những gì còn lại, sau tất cả."
    },
    {
      id: 4,
      title: "Thư gửi cha",
      speaker: "Astyanax khi trưởng thành",
      avatar: findImage('astyanax-avatar'),
      summary: "Một bức thư giả tưởng từ Astyanax, giờ đã lớn, gửi cho người cha Hector mà cậu chỉ biết qua lời kể.",
      transcript: "Thưa cha, con viết những dòng này từ một thành Troy đã không còn. Mẹ kể con nghe về cha, về sự dũng cảm, về tình yêu của cha. Con đã cố gắng sống xứng đáng với cái tên của cha. Liệu cha có tự hào? Bức thư này, là tất cả những gì con có thể gửi cho cha, qua làn khói của thời gian."
    }
  ];

export const DEBATE_CHARACTERS = ["Hector", "Andromache", "Priam", "Achilles"];

export const MINIGAME_CHOICES = [
    {
      title: "Đóng cổng thành phòng thủ",
      result: "Chiến lược an toàn! Phòng thủ giúp bảo toàn lực lượng nhưng cũng cho kẻ địch thời gian củng cố. Trong lịch sử, phòng thủ bị động kéo dài có thể dẫn đến cạn kiệt tài nguyên và tinh thần chiến đấu. Hector, dù là một chiến binh dũng mãnh, cũng hiểu tầm quan trọng của việc bảo vệ tường thành."
    },
    {
      title: "Gửi sứ giả hoà giải",
      result: "Một nỗ lực ngoại giao! Việc này thể hiện mong muốn hòa bình và có thể cứu vãn sinh mạng. Tuy nhiên, trong bối cảnh cuộc chiến Iliad, lòng kiêu hãnh và sự trả thù của quân Hy Lạp đã lên quá cao, khiến cho việc hòa giải gần như bất khả thi. Vua Priam đã từng thử, nhưng không thành công."
    },
    {
      title: "Ra quân tổng lực",
      result: "Một lựa chọn táo bạo! Tấn công tổng lực có thể tạo ra bất ngờ và giành chiến thắng quyết định, nhưng cũng đầy rủi ro. Nếu thất bại, toàn bộ quân đội có thể bị tiêu diệt. Đây là lựa chọn mà các anh hùng như Achilles hay Hector thường phải cân nhắc: giữa vinh quang chớp nhoáng và sự an nguy của cả dân tộc."
    }
  ];
