//Q4) Create a class of item (itemid, itemname, itemprice, category) 
//and create object of the class and print each detail of item. 
//With arrow functions.

class Item{
    itemid:number;
     itemname:string;
     itemprice:number
     category:string
     
     constructor(itemid:number,itemname:string,itemprice:number,category:string) {
      this.itemid=itemid;
      this.itemname=itemname;
      this.itemprice=itemprice;
      this.category=category;
}
}
let o=new Item(1,"Pants",1200,"Clothing")
let print1=(o:Item)=>{
    console.log(o);
}
print1(o);