import { Component, OnInit } from '@angular/core';

export interface Card {
  title: string;
  description: string;
  image: string;
  link: string;
  routerLink: string;
}

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
    description:"Learn about Potions and its effects :D",
    image:"assets/pociones.jpeg",
    link:"Click",
    routerLink: "/potions"
    },
    {
    title:"Game mobs",
    description:"See the mobs that exist in Minecraft",
    image:"assets/mobs.webp",
    link:"Click",
    routerLink: "/mobs" 
    },
    {
    title:"Game bosses",
    description:"Learn about the bosses that exist in Minecraft",
    image:"assets/bosses.webp",
    link:"Click",
    routerLink: "/bosses" 
    },
    {
      title:"Weapons and tools",
      description:"Learn about the weapons and tools that exist in Minecraft",
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
