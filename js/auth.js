
document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  //Kiểm tra đăng nhập, chưa đăng nhập thì bị sút ra khỏi hệ thống
  if (!user) {
    window.location.href = "login-register.html";
  //Đăng nhập thành công thì hiện tên tài khoản và vai trò 
  } else {
    const h3 = document.querySelector(".user-detail h3");
    const span = document.querySelector(".user-detail span");
    h3.textContent = user.username;
    if (user.role === "admin") {
      span.textContent = "Quản trị viên";
    } else {
      span.textContent = "Nhân viên";
    }
  }

  // Nút đăng xuất
  document.getElementById("logout").addEventListener("click", (e) => {
    e.preventDefault();
    const confirmLogout = confirm("Bạn có muốn đăng xuất không?");
    if (confirmLogout) {
      localStorage.removeItem("user");
      window.location.href = "login-register.html";
    }
  });
});


