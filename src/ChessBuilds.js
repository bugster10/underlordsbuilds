function getSynergyNum(value, num){
    return(Math.floor(value/num)*num)
}

function isSynergy(build){
    var dict = {};
    build.heroes.forEach(function(hero){
        hero.alliances.forEach(function(alliance){
            dict[alliance] = (dict[alliance] || 0) + 1;
            });
        });
for (let [key, value] of Object.entries(dict)){

    switch (key) {
        case ('demon-hunter'):
        if (value <= 0) break;
        build.synergies[key] = (getSynergyNum(value, 1));
        break;
        case ('demon'):
        if (value <= 0) break;
        build.synergies[key] = 1;
        break;
        case (synthree[key]):
        if (value <= 2) break;
        build.synergies[key] = (getSynergyNum(value, 3));
        break;
        default:
        if (value <= 1) break;
        build.synergies[key] = (getSynergyNum(value, 2));
        break;
    }
  
}
}
//End of function

var synthree = {
    'assassin': 'assassin',
    'mage': 'mage',
    'warrior': 'warrior',
    'hunter': 'hunter',
    'dragon': 'dragon',
    'elusive': 'elusive',
    'scrappy': 'scrappy',
};

class Hero {
    constructor(name, cost, alliances){
        //name is a string
        this.name=name;
         //cost is an integer
        this.cost=cost;
       //alliance is an array
        this.alliances=alliances;
  }
  
  get showHero(){
        return (`${this.name} is a ${this.cost} cost unit and is a ${this.alliances}`
          
        )
  }
}



var abbadon = new Hero('Abbadon', 3, ['heartless', 'knight']);
var alchemist = new Hero('Alchemist', 4, ['scrappy', 'warlock']);
var antimage = new Hero('Anti-Mage', 1, ['elusive', 'demon-hunter']);
var arcwarden = new Hero('Arc Warden', 3, ['primordial', 'shaman']);
var axe = new Hero('Axe', 1, ['brawny', 'warrior']);
var batrider = new Hero('Batrider', 1, ['troll', 'knight']);
var beastmaster = new Hero('Beastmaster', 2, ['brawny', 'hunter']);
var bloodseeker = new Hero('Bloodseeker', 1, ['human', 'assassin']);
var bountyhunter = new Hero('Bounty Hunter', 1, ['scrappy', 'assassin']);
var chaosknight = new Hero('Chaos Knight', 2, ['demon', 'knight']);
var clockwerk = new Hero('Clockwerk', 1, ['scrappy', 'inventor']);
var cm = new Hero('Crystal Maiden', 2, ['human', 'mage']);
var disruptor = new Hero('Disruptor', 4, ['brawny', 'shaman']);
var doom = new Hero('Doom', 4, ['demon', 'warrior']);
var dragonknight = new Hero('Dragon Knight', 4, ['human', 'dragon', 'knight']);
var drow = new Hero('Drow Ranger', 1, ['heartless', 'hunter']);
var enchantress = new Hero('Enchantress', 1, ['savage', 'druid']);
var enigma = new Hero('Enigma', 5, ['primordial', 'warlock']);
var furion = new Hero('Furion', 2, ['elusive', 'druid']);
var gyrocopter = new Hero('Gyrocopter', 5, ['deadeye', 'inventor']);
var juggernaut = new Hero('Juggernaut', 2, ['brawny', 'warrior']);
var kunkka = new Hero('Kunkka', 4, ['human', 'warrior']);
var lich = new Hero('Lich', 5, ['heartless', 'mage']);
var kotl = new Hero('Keeper of the Light', 4, ['human', 'mage']);
var lina = new Hero('Lina', 3, ['human', 'mage']);
var lonedruid = new Hero('Lone Druid', 4, ['savage', 'druid']);
var luna = new Hero('Luna', 2, ['elusive', 'knight']);
var lycan = new Hero('Lycan', 3, ['savage','human', 'warrior']);
var medusa = new Hero('Medusa', 4, ['scaled', 'hunter']);
var mirana = new Hero('Mirana', 4, ['elusive', 'hunter']);
var morphling = new Hero('Morphling', 2, ['primordial', 'assassin']);
var necrophos = new Hero('Necrophos', 4, ['heartless', 'warlock']);
var ogremagi = new Hero('Ogre Magi', 1, ['bloodbound', 'mage']);
var omniknight = new Hero('Omniknight', 3, ['human', 'knight']);
var pa = new Hero('Phantom Assassin', 3, ['elusive', 'assassin']);
var pudge = new Hero('Pudge', 2, ['heartless', 'warrior']);
var puck = new Hero('Puck', 2, ['elusive', 'dragon', 'mage']);
var queenofpain = new Hero('Queen of Pain', 2, ['demon', 'assassin']);
var razor = new Hero('Razor', 3, ['primordial', 'mage']);
var sandking = new Hero('Sand King', 3, ['savage', 'assassin']);
var shadowfiend = new Hero('Shadow Fiend', 3, ['demon', 'warlock']);
var shadowshaman = new Hero('Shadow Shaman', 2, ['troll', 'shaman']);
var slardar = new Hero('Slardar', 2, ['scaled', 'warrior']);
var slark = new Hero('Slark', 3, ['scaled', 'assassin']);
var sniper = new Hero('Sniper', 3, ['deadeye', 'hunter']);
var techies = new Hero('Techies', 5, ['scrappy', 'inventor']);
var ta = new Hero('Templar Assassin', 4, ['elusive', 'assassin']);
var terrorblade = new Hero('Terrorblade', 3, ['demon', 'demon-hunter']);
var tide = new Hero('Tide', 5, ['scaled', 'hunter']);
var timbersaw = new Hero('Timbersaw', 2, ['scrappy', 'inventor']);
var tinker = new Hero('Tinker', 1, ['scrappy', 'inventor']);
var tiny = new Hero('Tiny', 1, ['primordial', 'warrior']);
var treant = new Hero('Treant Protector', 3, ['elusive', 'druid']);
var troll = new Hero('Troll Warlord', 4, ['troll', 'warrior']);
var tusk = new Hero('Tusk', 1, ['savage', 'warrior']);
var venomancer = new Hero('Venomancer', 3, ['savage', 'warlock']);
var viper = new Hero('Viper', 3, ['dragon', 'assassin']);
var warlock = new Hero('Warlock', 1, ['bloodbound', 'warlock']);
var windranger = new Hero('Windranger', 3, ['elusive', 'hunter']);
var witchdoctor = new Hero('Witch Doctor', 2, ['troll', 'warlock']);

class Build {
constructor(name, ...heroes){
    //String
    this.name=name;
    //Integer
    this.level=heroes.length;
    //Dict of heroes
    this.heroes=heroes;
    this.synergies={};
    isSynergy(this);
  }
  
    listSynergies(){
        let synergiesStr = "";
        for (let [key, value] of Object.entries(this.synergies)){
            synergiesStr += (`(${value}) ${key.charAt(0).toUpperCase() + key.slice(1)}, `);
        }
        return synergiesStr.slice(0, -2);

    }

    listHeroes(){
        let heroesStr = "";
        this.heroes.forEach(function(e) {            
            heroesStr += (`${e.name}, `);

          });
          return heroesStr.slice(0, -2);
        }
        

    get showBuild(){
        return (`\`\`\`Build name: ${this.name}\nRequired Level: ${this.level}\nHeroes: ${this.listHeroes()}\nSynergies: ${this.listSynergies()}\`\`\` `);
    }
  
}

var johnbuild = new Build('Demon Hunters', antimage, terrorblade, furion, treant, shadowfiend, doom, necrophos, kunkka);
var huke = new Build('3 Mage 4 Brawny', axe, juggernaut, beastmaster, disruptor, cm, razor, kotl, arcwarden);
var sixscrappy = new Build('6 Scrappy', alchemist, tinker, clockwerk, timbersaw, bountyhunter, techies, shadowfiend, kunkka);
var sixsavage = new Build('6 Savage', enchantress, tusk, lycan, sandking, venomancer, lonedruid, witchdoctor, troll);
var sixass = new Build('6 Assassin', queenofpain, bloodseeker, slark, morphling, ta, pa, tiny);
var sixass2 = new Build('6 Assassin 3 Elusive 2 Savage', queenofpain, bloodseeker, slark, sandking, ta, pa, treant, lonedruid);
var huntwar = new Build('3 Hunter 3 Warr', tusk, lycan, medusa, drow, sniper, kunkka, gyrocopter, doom);
var sixknight = new Build('6 Knight 2 Dragon', omniknight, luna, abbadon, chaosknight, batrider, dragonknight, viper);


module.exports = {
    johnbuild,
    huke,
    sixscrappy,
    sixsavage,
    sixass,
    sixass2,
    huntwar,
    sixknight,
}