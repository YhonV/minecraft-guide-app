import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bosses',
  templateUrl: './bosses.page.html',
  styleUrls: ['./bosses.page.scss'],
})
export class BossesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  allCards = [
    { title: 'Ender Dragon', description: 'The Ender Dragon is a large dragon that breathes fire, spits fireballs, and can fly with great ease and maneuverability.', image: 'assets/bosses/ender dragon.webp', tips: 'Bring a bow and arrow to take out the Ender Crystals on the obsidian pillars. This will prevent the Ender Dragon from healing.' },
    { title: 'Wither', description: 'The Wither is a powerful, three-headed boss mob that is able to fly and shoot projectiles.', image: 'assets/bosses/wither.webp', tips: 'The Wither is immune to all status effects except for Wither and Poison. Bring a bow and arrow to take out the Wither from a distance.' },
    { title : 'Elder Guardian', description: 'The Elder Guardian is a stronger, larger variant of the Guardian that can only be found in or around ocean monuments.', image: 'assets/bosses/guardian.webp', tips: 'Elder Guardians are immune to knockback. Bring a bow and arrow to take out the Elder Guardians from a distance.' },
    { title: 'Warden' , description: 'The Warden is a hostile mob that is the first blind mob in Minecraft. It is a powerful mob that can kill players in two hits.', image: 'assets/bosses/warden.webp', tips: 'The Warden is blind and can only detect players through vibrations. Avoid making noise when near the Warden.' },
    { title: 'Pillager Captain', description: 'The Pillager Captain is a hostile mob that leads groups of pillagers into battle. It is armed with a crossbow and can shoot arrows at players.', image: 'assets/bosses/pillager.webp', tips: 'The Pillager Captain is immune to knockback. Bring a bow and arrow to take out the Pillager Captain from a distance.' },
  ]

  getCards() {
    return this.allCards;
  }

}
