const menuItems = document.querySelectorAll('.menu-item');
const sidebarFunctionButton = document.getElementById('sidebar-function');
const functionPopup = document.getElementById('sidebar-functionPopup');
const topFunctionPopup = document.getElementById("top-functionPopup");

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (item.id != "sidebar-function") {
            if (item.id == "top-function") {
              if (topFunctionPopup.style.display == "block")
                topFunctionPopup.style.display = "none";
              else topFunctionPopup.style.display = "block";
            } else {
              functionPopup.style.display = "none";
              menuItems.forEach((i) => i.classList.remove("active"));
              item.classList.add("active");
            }
        } else {
          if (functionPopup.style.display == "block")
            functionPopup.style.display = "none";
          else functionPopup.style.display = "block";
        }
    });
});


document.addEventListener('click', (e) => {
    if (!functionPopup.contains(e.target) && !sidebarFunctionButton.contains(e.target)) {
        functionPopup.style.display = 'none';
    }
});

document.addEventListener('click', (e) => {
    if (!topFunctionPopup.contains(e.target) && !document.getElementById('top-function').contains(e.target)) {
        topFunctionPopup.style.display = 'none';
    }
});

