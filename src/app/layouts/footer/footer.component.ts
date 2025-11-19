import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  // Navigation links
  navigationLinks = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Wines', route: '/wines' },
    { name: 'Vineyard', route: '/vineyard' },
    { name: 'Boutique', route: '/boutique' },
    { name: 'Cellar', route: '/cellar' },
  ];

  // Wine Cellar contact info
  wineCellarInfo = {
    title: 'Wine Cellar',
    contacts: [
      { text: 'Village Shalauri, Telavi, Georgia', type: 'address' },
      { text: '+995 577508029', type: 'phone', href: 'tel:+995577508029' },
      {
        text: 'info@dakishvili.ge',
        type: 'email',
        href: 'mailto:info@dakishvili.ge',
      },
    ],
  };

  // Wine Boutique contact info
  wineBoutiqueInfo = {
    title: 'Wine Boutique',
    contacts: [
      { text: 'Erekle II №2, Telavi, Georgia', type: 'address' },
      { text: '+995 571162362', type: 'phone', href: 'tel:+995571162362' },
      {
        text: 'boutique@dakishvili.ge',
        type: 'email',
        href: 'mailto:boutique@dakishvili.ge',
      },
    ],
  };

  // Social media links
  socialLinks = [
    {
      name: 'Facebook',
      icon: 'fa-brands fa-facebook-f',
      url: 'https://facebook.com/dakishvili',
      ariaLabel: 'Visit our Facebook page',
    },
    {
      name: 'Instagram',
      icon: 'fa-brands fa-instagram',
      url: 'https://instagram.com/dakishvili',
      ariaLabel: 'Visit our Instagram page',
    },
    {
      name: 'YouTube',
      icon: 'fa-brands fa-youtube',
      url: 'https://youtube.com/dakishvili',
      ariaLabel: 'Visit our YouTube channel',
    },
  ];

  // Copyright info
  copyrightText = '© 2025 Dakishvili Familly Vineyards';
  currentYear = new Date().getFullYear();

  constructor() {}

  // Handle contact clicks
  onContactClick(contact: any): void {
    if (contact.href) {
      window.location.href = contact.href;
    }
  }

  // Handle social media clicks
  onSocialClick(socialLink: any): void {
    window.open(socialLink.url, '_blank', 'noopener noreferrer');
  }
}
