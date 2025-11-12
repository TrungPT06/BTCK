const MenuBox = () => {
  return (
    <div class="box_menu">
      <nav id="menu" class="menu">
        <ul>
          <li class="icon_menu active">
            <a href="/" title="Trang chủ">
              <i class="fas fa-home"></i> Trang Chủ
            </a>
          </li>

          <li class="icon_menu">
            <a href="dien-thoai" title="Điện thoại di động">
              <i class="fas fa-mobile-alt"></i> Điện Thoại
            </a>
            <ul>
              <div class="container_main">
                <li>
                  <a href="dien-thoai-iphone" title="iPhone Apple">
                    <i class="far fa-angle-right"></i> iPhone (Apple)
                  </a>
                </li>
                <li>
                  <a href="dien-thoai-samsung" title="Samsung Galaxy">
                    <i class="far fa-angle-right"></i> Samsung
                  </a>
                </li>
                <li>
                  <a href="dien-thoai-xiaomi" title="Xiaomi, Redmi, Poco">
                    <i class="far fa-angle-right"></i> Xiaomi / Poco
                  </a>
                </li>
                <li>
                  <a href="dien-thoai-oppo" title="OPPO">
                    <i class="far fa-angle-right"></i> OPPO
                  </a>
                </li>
                <li>
                  <a href="dien-thoai-hang-khac" title="Các hãng khác">
                    <i class="far fa-angle-right"></i> Hãng khác
                  </a>
                </li>
              </div>
            </ul>
          </li>

          <li class="icon_menu">
            <a href="phu-kien" title="Phụ kiện điện thoại">
              <i class="fas fa-headphones"></i> Phụ Kiện
            </a>
            <ul>
              <div class="container_main">
                <li>
                  <a href="tai-nghe" title="Tai nghe các loại">
                    <i class="far fa-angle-right"></i> Tai nghe
                  </a>
                </li>
                <li>
                  <a href="sac-du-phong" title="Sạc dự phòng">
                    <i class="far fa-angle-right"></i> Sạc dự phòng
                  </a>
                </li>
                <li>
                  <a
                    href="op-lung-kinh-cuong-luc"
                    title="Ốp lưng và Kính cường lực"
                  >
                    <i class="far fa-angle-right"></i> Ốp lưng & Kính CL
                  </a>
                </li>
                <li>
                  <a href="cu-sac-cap-sac" title="Củ sạc và Cáp sạc">
                    <i class="far fa-angle-right"></i> Củ/Cáp sạc
                  </a>
                </li>
              </div>
            </ul>
          </li>

          <li class="icon_menu">
            <a href="tin-tuc-khuyen-mai" title="Tin tức và khuyến mãi">
              <i class="far fa-newspaper"></i> Tin Tức & Ưu Đãi
            </a>
            <ul>
              <div class="container_main">
                <li>
                  <a href="tin-cong-nghe" title="Tin công nghệ mới">
                    <i class="far fa-angle-right"></i> Tin Công Nghệ
                  </a>
                </li>
                <li>
                  <a href="chuong-trinh-khuyen-mai" title="Tất cả khuyến mãi">
                    <i class="far fa-angle-right"></i> Khuyến Mãi
                  </a>
                </li>
              </div>
            </ul>
          </li>

          <li class="icon_menu">
            <a href="ho-tro-lien-he" title="Trung tâm hỗ trợ và liên hệ">
              <i class="fas fa-headset"></i> Hỗ Trợ
            </a>
          </li>

          <li class="icon_menu">
            <a href="tuyen-dung" title="Tuyển dụng việc làm">
              <i class="fas fa-briefcase"></i> Tuyển Dụng
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuBox;
