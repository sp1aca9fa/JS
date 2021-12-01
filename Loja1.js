//Loja 1   
var welcome = "Hello, welcome! :D<br><br>Type the number of the desired action. Please don't type random shit.<br><br>1. Receive basic items;<br>2. Check inventory<br>3. Check stats<br>4. Co-co-coming soooon<br>5. cOMinG SoOn<br><br>"
document.getElementById("p1").innerHTML = welcome;
var inputwlcm = document.createElement("input")
inputwlcm.setAttribute("id","inputwlcm")
inputwlcm.setAttribute("type","text")
p1.appendChild(inputwlcm)

// consertar este codigo, ta dando uns erros loucos; receber o input do textbox e tal...
const label1 = document.createElement("label1")
label1.setAttribute("for", "inputwlcm")
label1.innetHTML = "Seu input"
inputwlcm.insertBefore(inputwlcm, label1)

//var p2 = document.createElement("p2")
//var inputwlcm = document.createTextNode("<input type=\"text\" id=\"member\" name=\"member\" value=\"\">")
//p2.appendChild(inputwlcm)
//p1.appendChild(p2)

var inventory = []
var enemyhp = 100

function WeaponEquip(options){
    var options = options || {};
    this.name = options.name || "DefaultWeaponEquip";
    this.attack = options.attack || 10;
    this.durability = options.durability || 100;
    this.decrease = options.decrease || 0.25;
    this.doattack = function(){
        this.durability -= this.decrease;
        enemyhp -= this.attack;
        if (this.durability < 0){
            alert("Your weapon broke!")
        }
    }
}

function ArmorEquip(options){
    var options = options || {};
    this.name = options.name || "DefaultArmorEquip";
    this.defense = options.defense || 10;
    this.durability = options.durability || 100;
    this.decrease = options.decrease || 0.25;
    this.dodefense = function(){
        this.durability -= this.decrease;
        enemyhp -= this.defense;
        if (this.durability < 0){
            alert("Your armor broke!")
        }
    }
}

var DentedSword = new WeaponEquip({
    name: "Dented Sword",
    attack: 10,
    durability: 100,
    decrease: 0.25
})

var RustyArmor = new ArmorEquip ({
    name: "Rusty Armor",
    defense: 10,
    durability: 100,
    decrease: 0.25
})
startmenu: while (true) {
    if (inputwlcm >= 1 && inputwlcm <= 5){
        switch(inputwlcm){
        case "1":
            if (confirm("Do you want to receive your items?")) {
                var inventory = [DentedSword, RustyArmor]
                const ReceiveBasicItems = [DentedSword, RustyArmor]
                alert("You received your basic items as below! Good luck with that shit.\n"+ ReceiveBasicItems.map((itemnames) => {return itemnames.name}) +"\nLet's go back to the beginning..")
                inputwlcm = []
                var inputwlcm = prompt("Hello, welcome! :D\nType the number of the desired action.\nPlease don't type random shit.\n1. Receive basic items;\n2. Check inventory\n3. Check stats\n4. Co-co-coming soooon\n5. cOMinG SoOn");
                continue startmenu;
                break;
            } else {
                alert("Who needs this shit anyway?")
                inputwlcm = []
                var inputwlcm = prompt("Hello, welcome! :D\nType the number of the desired action.\nPlease don't type random shit.\n1. Receive basic items;\n2. Check inventory\n3. Check stats\n4. Co-co-coming soooon\n5. cOMinG SoOn");
                continue startmenu;
            }
        break;
        //case "2": 
        //    ShowInventory;
        //break;
        default:
            alert("Coming soon!");
            inputwlcm = []
            var inputwlcm = prompt("Hello, welcome! :D\nType the number of the desired action.\nPlease don't type random shit.\n1. Receive basic items;\n2. Check inventory\n3. Check stats\n4. Co-co-coming soooon\n5. cOMinG SoOn");
            continue startmenu;
        //case 3:
        //    alert("Coming soon!");
        //break;
        //case 4:
        //    alert("Coming soon!");
        //break;
        //case 5:
        //    alert("Coming soon!");
        //break;
        }
    } else {
    alert("You had ONE job. No loops for you.")
    break;
    }
};

// var ShowInventory = alert("Items received:\n");