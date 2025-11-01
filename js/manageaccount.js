
  const addBtn = document.getElementById("add-btn");
  const formPopup = document.getElementById("accountForm");
  const cancelBtn = document.querySelector(".cancel-btn");

  addBtn.addEventListener("click", () => {
    formPopup.style.display = "block";
  });

  cancelBtn.addEventListener("click", () => {
    formPopup.style.display = "none";
  });


