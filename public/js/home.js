const menuItems = document.querySelectorAll(".menu-item");
const sidebarFunctionButton = document.getElementById("sidebar-function");
const functionPopup = document.getElementById("sidebar-functionPopup");
const topFunctionPopup = document.getElementById("top-functionPopup");
const activeStyle = "bg-gray-200 rounded-[1rem]";

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.id != "sidebar-function") {
      if (item.id == "top-function") {
        if (topFunctionPopup.classList.contains("block")) {
          topFunctionPopup.classList.remove("block"); // Hide the popup
        } else {
          topFunctionPopup.classList.add("block"); // Show the popup
        }
      } else {
        functionPopup.classList.remove("block"); // Hide the popup
        functionPopup.classList.add("hidden");
        menuItems.forEach((i) =>
          i.classList.remove("bg-gray-200", "rounded-[1rem]")
        );
        item.classList.add("bg-gray-200", "rounded-[1rem]");
      }
    } else {
      if (functionPopup.classList.contains("block")) {
        functionPopup.classList.remove("block");
        functionPopup.classList.add("hidden");
      } else {
        functionPopup.classList.remove("hidden");
        functionPopup.classList.add("block");
      }
    }
  });
});
