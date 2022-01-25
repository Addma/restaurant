function createMenu() {
    console.log("ME!");
    const menu = document.createElement("div");
    menu.classList = "menu";
    const menuTxt = document.createElement("p");
    menuTxt.append(document.createTextNode("Menu"));
    menuTxt.style.color = "white";
    menuTxt.classList.add("menu-header");
    menu.append(menuTxt);
    return menu;
}

export default createMenu;