import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent  implements OnInit {

  @Input() title!: string;
  @Input() description!: string;
  @Input() recipe!: string;
  @Input() icon!: string;
  searchTerm: string = '';
  constructor() { }

  ngOnInit() {}

  allCards= [
    {
      title: "Weakness",
      description: "Weakness potions are used to weaken the target.",
      recipe: "To make a weakness potion, you need a water bottle and a fermented spider eye.",
      icon: "assets/potions/weakness.png"
    },
    {
      title: "Strength",
      description: "Strength potions increase the damage dealt by the player.",
      recipe: "To make a strength potion, you need a water bottle and a blaze powder.",
      icon: "assets/potions/strength.webp"
    },
    {
      title: "Regeneration",
      description: "Regeneration potions regenerate the player's health over time.",
      recipe: "To make a regeneration potion, you need a water bottle and a ghast tear.",
      icon: "assets/potions/regeneration.png"
    },
    {
      title: "Speed",
      description: "Speed potions increase the player's movement speed.",
      recipe: "To make a speed potion, you need a water bottle and sugar.",
      icon: "assets/potions/speed.webp"
    },
    {
      title: "Fire Resistance",
      description: "Fire resistance potions make the player immune to fire and lava damage.",
      recipe: "To make a fire resistance potion, you need a water bottle and a magma cream.",
      icon: "assets/potions/fire_resistence.webp"
    },
    {
      title: "Night Vision",
      description: "Night vision potions allow the player to see in the dark.",
      recipe: "To make a night vision potion, you need a water bottle and a golden carrot.",
      icon: "assets/potions/nightVision.webp"
    },
    {
      title: "Water Breathing",
      description: "Water breathing potions allow the player to breathe underwater.",
      recipe: "To make a water breathing potion, you need a water bottle and a pufferfish.",
      icon: "assets/potions/waterBreathing.webp"
    },
    {
      title: "Invisibility",
      description: "Invisibility potions make the player invisible to mobs.",
      recipe: "To make an invisibility potion, you need a water bottle and a golden carrot.",
      icon: "assets/potions/Invisibility.webp"
    },
    {
      title: "Leaping",
      description: "Leaping potions increase the player's jump height.",
      recipe: "To make a leaping potion, you need a water bottle and a rabbit's foot.",
      icon: "assets/potions/leaping.webp"
    },
    {
      title: "Harming",
      description: "Harming potions deal damage to the target.",
      recipe: "To make a harming potion, you need a water bottle and a glistering melon.",
      icon: "assets/potions/Harming.webp"
    },
    {
      title: "Healing",
      description: "Healing potions restore the player's health.",
      recipe: "To make a healing potion, you need a water bottle and a glistering melon.",
      icon: "assets/potions/Healing.webp"
    },
    {
      title: "Poison",
      description: "Poison potions deal damage to the target over time.",
      recipe: "To make a poison potion, you need a water bottle and a spider eye.",
      icon: "assets/potions/Poison.webp"
    },
    {
      title: "Turtle Master",
      description: "Turtle master potions give the player resistance and slowness.",
      recipe: "To make a turtle master potion, you need a water bottle and a turtle shell.",
      icon: "assets/potions/Turtle Master.webp"
    },
    {
      title: "Slow Falling",
      description: "Slow falling potions reduce fall damage and slow the player's fall speed.",
      recipe: "To make a slow falling potion, you need a water bottle and a phantom membrane.",
      icon: "assets/potions/Slow Falling.webp"
    }
  ]

  get filteredCards(){
    return this.allCards.filter(card => 
      card.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  }

  onSearchChange(event: any){
    this.searchTerm = event.detail.value
  }

}
