//Q4) Create a class of item (itemid, itemname, itemprice, category) 
//and create object of the class and print each detail of item. 
//With arrow functions.
var Item = /** @class */ (function () {
    function Item(itemid, itemname, itemprice, category) {
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.category = category;
    }
    return Item;
}());
var o = new Item(1, "Pants", 1200, "Clothing");
var print1 = function (o) {
    console.log(o);
};
print1(o);
