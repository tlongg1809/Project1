// Hiện form đăng ký
function showForm(formId) {
  document
    .querySelectorAll(".form-box")
    .forEach((form) => form.classList.remove("active"));
  document.getElementById(formId).classList.add("active");
}
// Đăng nhập thử
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;
  const account = [
    { username: "admin", password: "123", role: "admin" },
    { username: "staff", password: "123", role: "staff" },
  ];
  const user = account.find(
    (acc) => acc.username == username && acc.password == password
  );
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "homepage.html";
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
});

