document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const btnClose = document.querySelector(".close");
  const btnDong = document.getElementById("dong");
  const btnLuu = document.getElementById("luu");
  const inputTenMay = document.getElementById("tenMay");
  const selectTrangThai = document.getElementById("trangThai");
  const btnThemMay = document.getElementById("btnThemMay");
  const container = document.querySelector(".may-tinh-container");

  let currentMachine = null;
  let isAdding = false;

  btnThemMay.onclick = () => {
    isAdding = true;
    inputTenMay.value = "";
    selectTrangThai.value = "trong";
    document.getElementById("modal-title").textContent = "Thêm máy tính mới";
    modal.style.display = "flex";
  };

  const attachEvents = (div) => {
    div.querySelector(".btn-edit").onclick = (e) => {
      e.stopPropagation();
      isAdding = false;
      currentMachine = div;
      inputTenMay.value = div.querySelector("h3").textContent;
      selectTrangThai.value = div.querySelector("p").classList[0];
      document.getElementById("modal-title").textContent = "Sửa máy tính";
      modal.style.display = "flex";
    };

    div.querySelector(".btn-del").onclick = (e) => {
      e.stopPropagation();
      if (confirm(`Xóa ${div.querySelector("h3").textContent}?`)) div.remove();
    };
  };

  btnClose.onclick = btnDong.onclick = () => {
    modal.style.display = "none";
  };

  btnLuu.onclick = () => {
    const tenMay = inputTenMay.value.trim() || "Máy mới";
    const trangThai = selectTrangThai.value;
    const textTrangThai = {
      trong: "Máy trống",
      "su-dung": "Đang sử dụng",
      hong: "Máy hỏng",
    }[trangThai];

    if (isAdding) {
      const div = document.createElement("div");
      div.className = "may-tinh";
      div.innerHTML = `
        <h3>${tenMay}</h3>
        <p class="${trangThai}">${textTrangThai}</p>
        <div class="actions">
          <button class="btn-edit"><i class="fa-solid fa-pen"></i></button>
          <button class="btn-del"><i class="fa-solid fa-trash"></i></button>
        </div>`;
      container.appendChild(div);
      attachEvents(div);
    } else if (currentMachine) {
      currentMachine.querySelector("h3").textContent = tenMay;
      const p = currentMachine.querySelector("p");
      p.className = trangThai;
      p.textContent = textTrangThai;
    }

    modal.style.display = "none";
  };

  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
  document.querySelectorAll(".may-tinh").forEach(attachEvents);
});