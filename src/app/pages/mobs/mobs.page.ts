import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobs',
  templateUrl: './mobs.page.html',
  styleUrls: ['./mobs.page.scss'],
})
export class MobsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  allCards=[
    { title: 'Zombie', description: 'Zombies are common undead hostile mobs that attack players.', image: 'assets/mobs/zombie.png', tips: 'Zombies are slow and can be easily avoided. Use a sword or axe to take out zombies quickly.' },
    { title: 'Skeleton', description: 'Skeletons are common undead hostile mobs that attack players with arrows.', image: 'assets/mobs/skeleton.webp', tips: 'Skeletons are weak but can attack from a distance. Use a shield to block their arrows.' },
    { title: 'Creeper', description: 'Creepers are common hostile mobs that explode when they get close to players.', image: 'assets/mobs/creeper.png', tips: 'Creepers are silent and can sneak up on players. Keep an eye out for their hissing sound.' },
    { title: 'Spider', description: 'Spiders are common hostile mobs that can climb walls and jump at players.', image: 'assets/mobs/spider.png', tips: 'Spiders are fast and can climb walls. Use a sword or axe to take out spiders quickly.' },
    { title: 'Enderman', description: 'Endermen are tall, black mobs with purple eyes that can teleport and pick up blocks.', image: 'assets/mobs/enderman.webp', tips: 'Endermen are neutral unless provoked. Avoid making eye contact with Endermen to prevent them from attacking.' },
    { title: 'Witch', description: 'Witches are hostile mobs that attack players with harmful potions.', image: 'assets/mobs/witch.png', tips: 'Witches are immune to poison and healing potions. Use a bow and arrow to take out witches from a distance.' },
    { title: 'Slime', description: 'Slimes are hostile mobs that split into smaller slimes when killed.', image: 'assets/mobs/slime.jpeg', tips: 'Slimes are slow and can be easily avoided. Use a sword or axe to take out slimes quickly.' },
    { title: 'Ghast', description: 'Ghasts are large, floating hostile mobs that shoot fireballs at players.', image: 'assets/mobs/ghast.png', tips: 'Ghasts are immune to arrows and can fly. Use a bow and arrow to take out ghasts from a distance.' },
    { title: 'Blaze', description: 'Blazes are hostile mobs that shoot fireballs at players.', image: 'assets/mobs/blaze.png', tips: 'Blazes are immune to fire and can fly. Use a bow and arrow to take out blazes from a distance.' },
    { title: 'Hoglin', description: 'Hoglins are hostile mobs that attack players on sight.', image: 'assets/mobs/hoglin.jpeg', tips: 'Hoglins are immune to fire and can be bred with crimson fungi. Use a sword or axe to take out hoglins quickly.' },
    { title: 'Piglin', description: 'Piglins are neutral mobs that become hostile when provoked.', image: 'assets/mobs/piglin.png', tips: 'Piglins are immune to fire and can be traded with gold ingots. Avoid attacking piglins to prevent them from becoming hostile.' },
    { title: 'Endermite', description: 'Endermites are small, hostile mobs that spawn when an ender pearl is used.', image: 'assets/mobs/endermite.png', tips: 'Endermites are fast and can teleport. Use a sword or axe to take out endermites quickly.' },
    { title: 'Guardian', description: 'Guardians are hostile mobs that attack players with laser beams.', image: 'assets/mobs/guardian.webp', tips: 'Guardians are immune to knockback and can swim. Use a bow and arrow to take out guardians from a distance.' },
    { title: 'Shulker', description: 'Shulkers are hostile mobs that shoot projectiles at players.', image: 'assets/mobs/shulker.webp', tips: 'Shulkers are immune to arrows and can teleport. Use a bow and arrow to take out shulkers from a distance.' },
    { title: 'Strider', description: 'Striders are passive mobs that can be ridden with a saddle and warped fungus on a stick.', image: 'assets/mobs/strider.webp', tips: 'Striders are immune to fire and can be ridden across lava. Use a saddle and warped fungus on a stick to ride striders.' },
    { title: 'Vindicator', description: 'Vindicators are hostile mobs that attack players with an iron axe.', image: 'assets/mobs/vindicator.webp', tips: 'Vindicators are immune to knockback and can open doors. Use a sword or axe to take out vindicators quickly.' },
    { title: 'Evoker', description: 'Evokers are hostile mobs that summon vexes to attack players.', image: 'assets/mobs/evoker.webp', tips: 'Evokers are immune to arrows and can summon vexes. Use a bow and arrow to take out evokers from a distance.' },
    { title: 'Vex', description: 'Vexes are hostile mobs that attack players with melee attacks.', image: 'assets/mobs/vex.webp', tips: 'Vexes are fast and can fly. Use a sword or axe to take out vexes quickly.' },
    { title: 'Phantom', description: 'Phantoms are hostile mobs that attack players who have not slept for three or more in-game days.', image: 'assets/mobs/phantom.webp', tips: 'Phantoms are immune to arrows and can fly. Use a bow and arrow to take out phantoms from a distance.' },
    { title: 'Pillager', description: 'Pillagers are hostile mobs that attack players with crossbows.', image: 'assets/mobs/pillager.webp', tips: 'Pillagers are immune to knockback and can shoot arrows. Use a shield to block their arrows.' },
    { title: 'Ravager', description: 'Ravagers are hostile mobs that can charge at players and destroy blocks.', image: 'assets/mobs/ravager.webp', tips: 'Ravagers are immune to knockback and can destroy blocks. Use a sword or axe to take out ravagers quickly.' },
    { title: 'Husk', description: 'Husks are common undead hostile mobs that attack players.', image: 'assets/mobs/husk.webp', tips: 'Husks are immune to fire and can spawn in deserts. Use a sword or axe to take out husks quickly.' },
    { title: 'Drowned', description: 'Drowned are common undead hostile mobs that spawn in oceans and rivers.', image: 'assets/mobs/drowned.webp', tips: 'Drowned are immune to fire and can swim. Use a sword or axe to take out drowned quickly.' },
    { title: 'Zombified Piglin', description: 'Zombified Piglins are undead mobs that are neutral unless provoked.', image: 'assets/mobs/zombified piglin.webp', tips: 'Zombified Piglins are immune to fire and can be traded with gold ingots. Avoid attacking zombified piglins to prevent them from becoming hostile.' },
    { title: 'Stray', description: 'Strays are common undead hostile mobs that attack players with arrows.', image: 'assets/mobs/stray.webp', tips: 'Strays are immune to fire and can spawn in cold biomes. Use a shield to block their arrows.' },
    { title: 'Wandering Trader', description: 'Wandering Traders are passive mobs that trade with players.', image: 'assets/mobs/wandering trader.webp', tips: 'Wandering Traders are immune to all status effects. Use emeralds to trade with wandering traders.' },
    { title: 'Axolotl', description: 'Axolotls are passive mobs that can be picked up in buckets and used to fight underwater mobs.', image: 'assets/mobs/axolotl.webp', tips: 'Axolotls are immune to all status effects except for regeneration. Use a bucket to pick up axolotls and fight underwater mobs.' },
    { title: 'Goat', description: 'Goats are passive mobs that can jump high and ram into players.', image: 'assets/mobs/goat.webp', tips: 'Goats are immune to fall damage and can jump high. Use a shield to block their ramming attacks.' },
    { title: 'Glow Squid', description: 'Glow Squids are passive mobs that emit light underwater.', image: 'assets/mobs/glow squid.webp', tips: 'Glow Squids are immune to all status effects. Use a bucket to pick up glow squids and place them in water to emit light.' },
    { title: 'Pig' , description: 'Pigs are passive mobs that can be ridden with a saddle and carrot on a stick.', image: 'assets/mobs/pig.webp', tips: 'Pigs are immune to all status effects. Use a saddle and carrot on a stick to ride pigs.', isPassive: true },
    { title: 'Sheep', description: 'Sheep are passive mobs that can be sheared for wool.', image: 'assets/mobs/sheep.webp', tips: 'Sheep are immune to all status effects. Use shears to shear sheep for wool.', isPassive: true },
    { title: 'Cow', description: 'Cows are passive mobs that can be milked for milk.', image: 'assets/mobs/cow.webp', tips: 'Cows are immune to all status effects. Use a bucket to milk cows for milk.', isPassive: true },
    { title: 'Chicken', description: 'Chickens are passive mobs that lay eggs and drop feathers.', image: 'assets/mobs/chicken.webp', tips: 'Chickens are immune to all status effects. Use a sword or axe to take out chickens quickly.', isPassive: true },
    { title: 'Rabbit', description: 'Rabbits are passive mobs that can be bred with carrots.', image: 'assets/mobs/rabbit.webp', tips: 'Rabbits are immune to all status effects. Use carrots to breed rabbits.', isPassive: true },
    { title: 'Turtle', description: 'Turtles are passive mobs that lay eggs on beaches.', image: 'assets/mobs/turtle.webp', tips: 'Turtles are immune to all status effects. Use a sword or axe to take out turtles quickly.', isPassive: true },
    { title: 'Parrot', description: 'Parrots are passive mobs that can be tamed with seeds.', image: 'assets/mobs/parrot.webp', tips: 'Parrots are immune to all status effects. Use seeds to tame parrots.', isPassive: true },
    { title: 'Wolf', description: 'Wolves are passive mobs that can be tamed with bones.', image: 'assets/mobs/wolf.webp', tips: 'Wolves are immune to all status effects. Use bones to tame wolves.', isPassive: true },
    { title: 'Ocelot', description: 'Ocelots are passive mobs that can be tamed with fish.', image: 'assets/mobs/ocelot.webp', tips: 'Ocelots are immune to all status effects. Use fish to tame ocelots.', isPassive: true },
    { title: 'Llama', description: 'Llamas are passive mobs that can be tamed with hay bales.', image: 'assets/mobs/llama.webp', tips: 'Llamas are immune to all status effects. Use hay bales to tame llamas.', isPassive: true },
    { title: 'Panda', description: 'Pandas are passive mobs that can be bred with bamboo.', image: 'assets/mobs/panda.webp', tips: 'Pandas are immune to all status effects. Use bamboo to breed pandas.', isPassive: true },
    { title: 'Fox', description: 'Foxes are passive mobs that can be tamed with sweet berries.', image: 'assets/mobs/fox.webp', tips: 'Foxes are immune to all status effects. Use sweet berries to tame foxes.', isPassive: true },
    { title: 'Bee', description: 'Bees are passive mobs that pollinate flowers and produce honey.', image: 'assets/mobs/bee.webp', tips: 'Bees are immune to all status effects. Use a bottle to collect honey from beehives.', isPassive: true },
    { title: 'Cat', description: 'Cats are passive mobs that can be tamed with fish.', image: 'assets/mobs/cat.webp', tips: 'Cats are immune to all status effects. Use fish to tame cats.', isPassive: true },
    { title: 'Horse', description: 'Horses are passive mobs that can be ridden with a saddle and carrot on a stick.', image: 'assets/mobs/horse.webp', tips: 'Horses are immune to all status effects. Use a saddle and carrot on a stick to ride horses.', isPassive: true },
  ]

  getCards(){
    return this.allCards;
  }

  showPassive(){
    return this.allCards.filter(card => card.isPassive === true);
  }

}
