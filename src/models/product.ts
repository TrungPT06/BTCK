// src/product.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export const products: Product[] = [
  // 10 SẢN PHẨM MỚI ĐƯỢC CHUYỂN ĐỔI (ID 23 - 32)
  {
    id: 23,
    title: "iPhone 15 Pro Max 256GB",
    price: 1199,
    description:
      "Chip Apple A17 Pro (3nm) mạnh mẽ nhất, vỏ Titanium cao cấp, hệ thống camera 48MP tiên tiến với zoom quang 5x. Màn hình Super Retina XDR 120Hz. Sản phẩm hàng đầu của Apple.",
    category: "smartphone_flagship",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525489_sd.jpg",
    rating: {
      rate: 4.9,
      count: 12500,
    },
  },

  {
    id: 25,
    title: "Xiaomi 15T Pro 5G 256GB",
    price: 749,
    description:
      "Hiệu năng flagship với Chip Dimensity 9400+, màn hình AMOLED lớn 6.83 inch và sạc siêu nhanh 90W. Camera chất lượng, phù hợp cho gaming.",
    category: "smartphone_flagship",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.Zs8ImTLMg38l3Qb47CtsPAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: {
      rate: 5.0,
      count: 850,
    },
  },
  {
    id: 26,
    title: "iPhone 14 Pro Max 128GB",
    price: 1099,
    description:
      "Chip Apple A16 Bionic, công nghệ Dynamic Island độc đáo, màn hình 6.7 inch, pin cực tốt. Màu sắc Deep Purple nổi bật.",
    category: "smartphone_flagship",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487403_sd.jpg",
    rating: {
      rate: 4.8,
      count: 20100,
    },
  },
  {
    id: 27,
    title: "Samsung Galaxy A56 5G 256GB",
    price: 419,
    description:
      "Điện thoại tầm trung mạnh mẽ, Chip Exynos 1580, Màn hình 120Hz, kháng nước IP67. Thiết kế hiện đại, camera 50MP.",
    category: "smartphone_midrange",
    image: "https://m.media-amazon.com/images/I/61obK5fZzbL._AC_.jpg",
    rating: {
      rate: 4.9,
      count: 9200,
    },
  },
  {
    id: 28,
    title: "OPPO Reno12 5G 128GB",
    price: 405,
    description:
      "Thiết kế mỏng nhẹ và thời trang, camera chụp ảnh chân dung AI ấn tượng. Chip Dimensity ổn định, hỗ trợ sạc nhanh SuperVOOC.",
    category: "smartphone_midrange",
    image:
      "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno12-f-en/product/860-720-orange-green.png",
    rating: {
      rate: 4.8,
      count: 4100,
    },
  },
  {
    id: 29,
    title: "Xiaomi Redmi Note 14 Pro 5G 256GB",
    price: 325,
    description:
      "Giá tốt với cấu hình mạnh, Chip Dimensity 7300-Ultra, Màn hình AMOLED 120Hz, Camera chính 200MP.",
    category: "smartphone_budget",
    image:
      "https://www.pricerunner.se/product/3196309206/Xiaomi-Redmi-Note-14-Pro-5G-8GB-RAM-256GB.jpg",
    rating: {
      rate: 4.9,
      count: 5800,
    },
  },
  {
    id: 30,
    title: "Samsung Galaxy Z Fold 5 256GB",
    price: 1475,
    description:
      "Điện thoại gập cao cấp, màn hình lớn 7.6 inch, tối ưu hóa cho đa nhiệm và công việc. Thiết kế bản lề cải tiến.",
    category: "smartphone_folding",
    image:
      "https://cdn.nguyenkimmall.com/images/detailed/885/10055880-dien-thoai-samsung-galaxy-z-fold-5-5g-12gb-256gb-xanh_d%C6%B0%C6%A1ng-6.jpg",
    rating: {
      rate: 4.7,
      count: 2100,
    },
  },
  {
    id: 31,
    title: "OPPO Find N2 Flip 256GB",
    price: 739,
    description:
      "Điện thoại gập vỏ sò thời trang, màn hình phụ dọc lớn tiện lợi, công nghệ camera Hasselblad.",
    category: "smartphone_folding",
    image: "https://m.media-amazon.com/images/I/81ww2RdmvzL._AC_SX679_.jpg",
    rating: {
      rate: 4.7,
      count: 2900,
    },
  },
  {
    id: 32,
    title: "Xiaomi Redmi 13 128GB",
    price: 179,
    description:
      "Điện thoại giá rẻ hiệu năng tốt, pin trâu 5030 mAh, camera 108MP ấn tượng trong phân khúc. Màn hình lớn.",
    category: "smartphone_budget",
    image:
      "https://itouchcommunications.com/wp-content/uploads/2024/07/xiaomi-redmi-13.jpg",
    rating: {
      rate: 4.9,
      count: 7400,
    },
  },
];
