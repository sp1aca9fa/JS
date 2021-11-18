//Loja 1   
var items = function (name, cost, saleprice, attack, defense, durability){
    this.name = name;
    this.cost = cost;
    this.saleprice = saleprice;
    this.durability = durability;
}
var welcomeprompt = prompt("Hello! Type the number of the desired action.\n1. Receive basic items;\n2. Check inventory"); // completar o menu inicial

do ("action" + welcomeprompt);
while (Number.isInteger(welcomeprompt) && welcomeprompt >= 1 && welcomeprompt <= 5);

var ReceiveBasicItems = confirm("Do you want to receive your items?");
var action1 = ReceiveBasicItems;
var action2 = ShowInventory;

if (ReceiveBasicItems) {
    new items ("Sword de probre", 2, 0.5, 10, 0, 100)
    new items ("Armor de probre", 2, 0.5, 0, 10, 100)
    new items ("Predrinhas", 0, 0.01, 0, 0, 30000)
    alert("You received your basic items! Good luck with that shit.")
    welcomeprompt
} else {
    alert("Who needs this shit anyway?")
    welcomeprompt
};

var ListofItems = items.map((item) => {
    return item.name
})

var ShowInventory = alert("Items received:\n"+ListofItems);
