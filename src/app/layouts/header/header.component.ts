import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchQuery: string = '';
  isMenuOpen: boolean = false;
  currentLanguage: string = 'ქარ';

  leftMenuItems = [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Wines', route: '/wines' },
  ];

  rightMenuItems = [
    { label: 'Vineyard', route: '/vineyard' },
    { label: 'Boutique', route: '/boutique' },
    { label: 'Cellar', route: '/cellar' },
  ];

  constructor(private router: Router) {}

  onSearch() {
    console.log('Searching for:', this.searchQuery);
    // აქ შეგიძლია search ლოგიკა დაამატო
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;

    const currentUrl = this.router.url; // მაგ.: "/about" ან "/ka/about"
    const segments = currentUrl.split('/').filter(s => s); // ["about"] ან ["ka", "about"]

    if (language === 'ქარ') {
      // ქართულზე გადასვლა
      if (segments[0] !== 'ka') {
        this.router.navigate(['/ka', ...segments]);
      }
    } else if (language === 'ENG') {
      // ინგლისურზე გადასვლა
      if (segments[0] === 'ka') {
        this.router.navigate(['/', ...segments.slice(1)]);
      }
    }
  }
}
