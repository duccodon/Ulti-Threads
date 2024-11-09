const menuItems = document.querySelectorAll('.menu-item');
const sidebarFunctionButton = document.getElementById('sidebar-function');
const functionPopup = document.getElementById('sidebar-functionPopup');


menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (item.id != "sidebar-function") {
            functionPopup.style.display = 'none';
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        } else {
            if (functionPopup.style.display == 'block')
                functionPopup.style.display = 'none';
            else
                functionPopup.style.display = 'block';
        }
    });
});


document.addEventListener('click', (e) => {
    if (!functionPopup.contains(e.target) && !sidebarFunctionButton.contains(e.target)) {
        functionPopup.style.display = 'none';
    }
});

