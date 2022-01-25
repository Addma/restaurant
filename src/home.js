function createHome() {
    console.log("ME!");
    const home = document.createElement("div");
    home.classList = "home";
    const imgSlider = document.createElement("div");
    const imgDiv = document.createElement("div");
    imgSlider.classList.add("slider");
    const imgNav = document.createElement("div");
    const next = document.createElement("button");
    const prev = document.createElement("button");
    next.innerText = " >> ";
    prev.innerText = " << ";
    imgNav.append(prev, next);
    imgNav.classList.add("imgnav");
    return home;
}

export default createHome;
