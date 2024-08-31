import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string = 'Minecraft Guide';
  searchTerm: string = '';

  constructor() {}

  allCards = [
    {
    title:"Potions",
    description:"Potions are concoctions that, depending on the potion, generate or do not generate a type of effect, with a limited time.",
    image:"assets/pociones.jpeg",
    link:"Click",
    routerLink: "/potions"
    },
    {
    title:"Game mobs",
    description:"A creature (mob, derived from mobile, in English) is a living entity in the game, which can move, perform actions, and receive or inflict damage. Different types of creatures often have unique AI and loot.",
    image:"assets/mobs.webp",
    link:"Click",
    routerLink: "/mobs" 
    },
    {
    title:"Game bosses",
    description:"Bosses are hostile creatures that are more difficult to defeat than normal hostile creatures and sub-bosses. They usually have several types of attacks that they can use in a pattern.",
    image:"assets/bosses.webp",
    link:"Click",
    routerLink: "/bosses" 
    },
    {
      title:"Weapons and tools",
      description:"Weapons and tools are items that can be used to attack enemies or break blocks. They can be made from different materials, each with its own characteristics.",
      image:"assets/weaponsNtools.webp",
      link:"Click",
      routerLink: "/weaponsNtools"
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
