import './menu.css';
/*
Class to easily create menu lists.
*/
class menuListCreator {
    constructor(){
    this.list = document.createElement("ul");
    this.items = [];
    }

    addChild(item, price) {
        let menuItem = document.createElement("li");
        let menuPrice = document.createElement("span");
        menuPrice.innerText = `$${price}`;
        menuItem.innerText = item;
        menuItem.append(menuPrice);
        this.items.push(menuItem);
        this.list.append(menuItem);
    }
    removeChild(item) {
        for (let i = 0; i < this.items.length; i++){
            if (this.items[i].innerText.length == item){
                this.list[i].remove();
            }
        }

    }
    getList() {
        console.table(this.items);
        return this.list;
    }
}
function createMenu() {
    const menu = document.createElement("div");
    menu.classList = "menu";
   // const menuTxt = document.createElement("p");
   // menuTxt.append(document.createTextNode("Chicken"));
 //   menuTxt.style.color = "white";
 //   menuTxt.classList.add("menu-header");
//    menu.append(menuTxt);
    let menuwrap = document.createElement("div");
    menuwrap.classList.add("menugrid");
    menu.append(menuwrap);
    //Menu cards creation
    let wings = document.createElement("div");
    let wingsTxt = document.createElement("p");
    wingsTxt.append(document.createTextNode("Wings"));
    let wingsList = new menuListCreator();
    wingsList.addChild("Snack", "1.25");
    wingsList.addChild("Single","6.20");
    wingsList.addChild("Double","18.95");
    wingsList.addChild("Gang Size","43.50");
    wingsList.addChild("Lite Wing & Fries","9.00");
    wingsList.addChild("Hungry Wing and Fries","12.35");
    wingsList.addChild("Wings & Chicken Caesar Salad","11.35");
    wings.append(wingsTxt, wingsList.getList());

    let bbq = document.createElement("div");
    let bbqTxt = document.createElement("p");
    bbqTxt.append(document.createTextNode("BBQ Combos"));
    let bbqList = new menuListCreator();
    bbqList.addChild("1/4 Chicken leg/breast","7.95/$9.15");
    bbqList.addChild("1/2 Chicken ","12.60");
    bbqList.addChild("1/2 Rib","13.55");
    bbqList.addChild("Full Rib","23.65");
    bbqList.addChild("1/4 Chicken & 1/2 Rib","18.15");
    bbqList.addChild("Wings & 1/2 Rib","19.35");
    bbqList.removeChild("Wings & 1/2 Rib");
    bbq.append(bbqTxt, bbqList.getList());

    let sides = document.createElement("div");
    let sidesList = new menuListCreator();
    let sidesTxt = document.createElement("p");
    let addOn = document.createElement("p");
    addOn.append(document.createTextNode("*Add "))
    sidesTxt.append(document.createTextNode("Sides"));
    sidesList.addChild("French Fries","2.75/$5.35/$11.95 (S/M/L)");
    sidesList.addChild("French Fries Poutine","4.25/$5.95/$13.95 (S/M/L)");
    sidesList.addChild("Onion Rings","4.25");
    sidesList.addChild("Mozzarella Sticks","8.55");
    sidesList.addChild("Chicken Sandwich","4.75");
    sidesList.addChild("Chicken Burger/ /with cheese", "3.65/$3.95");
    sidesList.addChild("Fish Burger", "5.85");
    sidesList.addChild("Garlic Bread /with cheese","2.79/$5.25");
    sidesList.addChild("Broccoli & Cheese Poppers","8.75");
    sidesList.addChild("Pulled Pork Sandwich","5.45");
    sidesList.addChild("Sweet & Sour Spare Ribs","8.95");
    sidesList.addChild("2 Spring Rolls","4.25");
    sidesList.addChild("Halibut & Chips", "10.35");
    sides.append(sidesTxt, sidesList.getList());    

    let fried = document.createElement("div");
    let friedList = new menuListCreator();
    let friedTxt = document.createElement("p");
    friedTxt.append(document.createTextNode("Fried Chicken"));
    friedList.addChild("2pc Meal with Fries","8.55");
    friedList.addChild("10pc Family Pack*","28.99");
    friedList.addChild("15pc Family Pack*","40.99");
    friedList.addChild("20pc Family Pack*","52.99");
    friedList.addChild("6pc Nuggets", "3.95");
    friedList.addChild("10pc Nuggets", "6.95");
    friedList.addChild("20pc Nuggets", "12.95");
    let friesMsg = document.createElement("span");
    friesMsg.classList.add("friesMsg");
    friesMsg.innerHTML = "*Add fries to Family Packs for $3*";
    fried.append(friedTxt, friedList.getList(), friesMsg);

    let salad = document.createElement("div");
    let saladTxt = document.createElement("p");
    saladTxt.append(document.createTextNode("Salads"));
    let saladList = new menuListCreator();
    let reglarge = document.createElement("p");
    reglarge.append(document.createTextNode("Regular/Large"));
    saladList.getList().append(reglarge);
    saladList.addChild("Caesar","3.80/$10.55");
    saladList.addChild("Tossed","3.60/$9.75");
    saladList.addChild("Coleslaw","3.25/$9.25");
    saladList.addChild("Macaroni","3.25/$9.25");
    saladList.addChild("Veggie Stix","4.25/$10.95");
    saladList.addChild("Crispy Chicken Caesar","4.95/$12.35");
    salad.append(saladTxt, saladList.getList());
    
    fried.classList.add("card");
    bbq.classList.add("card");
    wings.classList.add("card");
    sides.classList.add("card");
    salad.classList.add("card");

    menuwrap.append(bbq, fried, wings, sides, salad);
    return menu;
}

export default createMenu;