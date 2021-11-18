//Loja 1   
var inputwelcomeprompt = prompt("Hello, welcome! :D\nType the number of the desired action.\nPlease don't type random shit.\n1. Receive basic items;\n2. Check inventory\n3. Check stats\n4. Co-co-coming soooon\n5. cOMinG SoOn");

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
    if (inputwelcomeprompt >= 1 && inputwelcomeprompt <= 5){
        switch(inputwelcomeprompt){
        case "1":
            if (confirm("Do you want to receive your items?")) {
                var inventory = [DentedSword, RustyArmor]
                const ReceiveBasicItems = [DentedSword, RustyArmor]
                alert("You received your basic items as below! Good luck with that shit.\n"+ ReceiveBasicItems.map((itemnames) => {return itemnames.name}) +"\nLet's go back to the beginning..")
                inputwelcomeprompt = []
                var inputwelcomeprompt = prompt("Hello, welcome! :D\nType the number of the desired action.\nPlease don't type random shit.\n1. Receive basic items;\n2. Check inventory\n3. Check stats\n4. Co-co-coming soooon\n5. cOMinG SoOn");
                continue startmenu;
                break;
            } else {
                alert("Who needs this shit anyway?")
                inputwelcomeprompt = []
                var inputwelcomeprompt = prompt("Hello, welcome! :D\nType the number of the desired action.\nPlease don't type random shit.\n1. Receive basic items;\n2. Check inventory\n3. Check stats\n4. Co-co-coming soooon\n5. cOMinG SoOn");
                continue startmenu;
            }
        break;
        //case "2": 
        //    ShowInventory;
        //break;
        default:
            alert("Coming soon!");
            inputwelcomeprompt = []
            var inputwelcomeprompt = prompt("Hello, welcome! :D\nType the number of the desired action.\nPlease don't type random shit.\n1. Receive basic items;\n2. Check inventory\n3. Check stats\n4. Co-co-coming soooon\n5. cOMinG SoOn");
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