import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const MenuTop = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="menu_top">
      <ul>
        <li>
          <Link to="/trang1">Trang 1</Link>
        </li>
        <li>
          <Link to="/trang2">Trang 2</Link>
        </li>
        {/* ... (các link bên ngoài khác) ... */}
        <li>
          <a target="blank" href="https://lms.giadinh.edu.vn/">
            Giỏ hàng
          </a>
        </li>
        <li>
          <a target="blank" href="https://library.giadinh.edu.vn/search">
            Lịch sử mua hàng
          </a>
        </li>
        {/* ... (ví dụ các link khác) ... */}

        {/* ================================================= */}
        {/* THÊM MỚI: Link "Quản lý" chỉ hiện khi admin đăng nhập */}
        {user && (
          <li>
            <Link to="/admin/products" className="admin-link">
              Quản lý Sản phẩm
            </Link>
          </li>
        )}
        {/* ================================================= */}

        {/* LI cuối cùng cho Đăng nhập/Đăng xuất */}
        <li>
          {user ? (
            <>
              <span className="username">👤 {user.username}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Đăng xuất
              </button>
            </>
          ) : (
            <Link to="/login" className="login-link">
              Đăng nhập
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};
export default MenuTop;
