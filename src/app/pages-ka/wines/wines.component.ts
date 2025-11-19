// src/app/pages/wines/wines.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Wine {
  id: number;
  name: string;
  type: WineType;
  image: string;
  description: string;
  region: string;
  year: number;
  alcohol: number;
  volume: string;
  grapes: string[];
  tastingNotes: string;
  servingTemp: string;
  price: number;
}

export enum WineType {
  DESSERT = 'საამერტო',
  KVEVRI = 'ქვევრის',
  CLASSIC = 'კლასიკური',
  SPARKLING = 'ცქრიალა'
}

@Component({
  selector: 'app-wines',
  standalone: true,  // ეს ხაზი დაამატე!
  imports: [CommonModule, FormsModule],  // და ეს!
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.scss']
})



export class WinesComponent implements OnInit {
  wines: Wine[] = [];
  filteredWines: Wine[] = [];
  selectedType: string = '';
  selectedWine: Wine | null = null;
  isDetailView: boolean = false;

  constructor(private router: Router) {
    this.initializeWines();
  }

  ngOnInit() {
    this.filteredWines = this.wines;
    // Debug info
    console.log('WinesComponent initialized');
    console.log('Initial wines count:', this.wines.length);
  }

    initializeWines() {
    this.wines = [
      {
        id: 1,
        name: 'რქაწითელი',
        type: WineType.KVEVRI,
        image: '/assets/wines/ქვევრის/rkatsiteli.png',
        description: 'ამბერისფერი მშრალი ღვინო, ხელით დამზადებული',
        region: 'კახეთი',
        year: 2022,
        alcohol: 13,
        volume: '750ml',
        grapes: ['რქაწითელი'],
        tastingNotes: 'ამბერისფერი ღვინო, კომპლექსური არომატით და მინერალური ფინიში',
        servingTemp: '10-12°C',
        price: 45
      },
      {
        id: 2,
        name: 'შარდონე ცქრიალა',
        type: WineType.SPARKLING,
        image: '/assets/wines/ცქრიალა/chps.jpeg',
        description: 'შარდონე ბლან დე ბლან ცქრიალა ღვინო',
        region: 'კახეთი',
        year: 2021,
        alcohol: 12,
        volume: '750ml',
        grapes: ['შარდონე'],
        tastingNotes: 'ელეგანტური ცქრიალა ღვინო, ფინე ქაფით და ციტრუსის ნოტებით',
        servingTemp: '6-8°C',
        price: 85
      },
      {
        id: 3,
        name: 'მცვანე პეტიანი ნატურელი',
        type: WineType.SPARKLING,
        image: '/assets/wines/ცქრიალა/Petnat Mtsvane.jpeg',
        description: 'ნატურალური ცქრიალა ღვინო',
        region: 'კახეთი',
        year: 2023,
        alcohol: 11,
        volume: '750ml',
        grapes: ['მცვანე'],
        tastingNotes: 'ღია ცქრიალა ღვინო, ნატურალური ქაფით და ფრეშული არომატით',
        servingTemp: '8-10°C',
        price: 75
      },
      {
        id: 4,
        name: 'ქისი',
        type: WineType.KVEVRI,
        image: '/assets/wines/ქვევრის/kisi.png',
        description: 'ძალისხმევის არჩევანი - ქისი',
        region: 'კახეთი',
        year: 2024,
        alcohol: 13,
        volume: '750ml',
        grapes: ['ქისი'],
        tastingNotes: 'ღია ოქროსფერი, ყვითელი ყვავილების და ციტრუსის არომატით',
        servingTemp: '10-12°C',
        price: 50
      },
      {
        id: 5,
        name: 'ქისი-მცვანე კლასიკური',
        type: WineType.CLASSIC,
        image: '/assets/wines/კლასიკური/Kisi Mtsvane klasikuri.jpeg',
        description: 'ორი ჯიშის ჰარმონიული ნაზავი',
        region: 'კახეთი',
        year: 2024,
        alcohol: 12.5,
        volume: '750ml',
        grapes: ['ქისი', 'მცვანე'],
        tastingNotes: 'კომპლექსური არომატი, ღია ნაყოფების და ყვავილების ნოტებით',
        servingTemp: '10-12°C',
        price: 55
      },
      {
        id: 6,
        name: 'მცვანე-შარდონე',
        type: WineType.CLASSIC,
        image: '/assets/wines/კლასიკური/Mtsvane Chardonnay.jpeg',
        description: 'ქართული და საერთაშორისო ჯიშების ნაზავი',
        region: 'კახეთი',
        year: 2024,
        alcohol: 13,
        volume: '750ml',
        grapes: ['მცვანე', 'შარდონე'],
        tastingNotes: 'ელეგანტური ღვინო, ვანილისა და ღია ხილის არომატით',
        servingTemp: '8-10°C',
        price: 60
      },
      {
        id: 7,
        name: 'საფერავი კუვრი',
        type: WineType.KVEVRI,
        image: '/assets/wines/ქვევრის/saperavi.png',
        description: 'ქვევრში დუღებული საფერავი',
        region: 'კახეთი',
        year: 2024,
        alcohol: 14,
        volume: '750ml',
        grapes: ['საფერავი'],
        tastingNotes: 'მუქი წითელი ღვინო, შავი ნაყოფების და ხილის იდუღებული არომატით',
        servingTemp: '16-18°C',
        price: 65
      },
      {
        id: 8,
        name: 'კუვრი ამბერი',
        type: WineType.KVEVRI,
        image: '/assets/wines/ქვევრის/cuveamber.png',
        description: 'ამბერისფერი კუვრი',
        region: 'კახეთი',
        year: 2021,
        alcohol: 13.5,
        volume: '750ml',
        grapes: ['ქისი', 'რქაწითელი'],
        tastingNotes: 'ღია ამბერისფერი, კომპლექსური და ღრმა არომატით',
        servingTemp: '12-14°C',
        price: 85
      },
      {
        id: 9,
        name: 'საფერავი კლასიკური',
        type: WineType.CLASSIC,
        image: '/assets/wines/კლასიკური/Saperavi klasikuri.jpeg',
        description: 'კლასიკური მეთოდით დამზადებული საფერავი',
        region: 'კახეთი',
        year: 2022,
        alcohol: 14.5,
        volume: '750ml',
        grapes: ['საფერავი'],
        tastingNotes: 'კლასიკური საფერავი, ღრმა არომატით და გრძელი ფინიში',
        servingTemp: '16-18°C',
        price: 70
      },
      {
        id: 10,
        name: 'ქისი-მწვანე კლასიკური',
        type: WineType.CLASSIC,
        image: '/assets/wines/კლასიკური/Kisi Mtsvane klasikuri.jpeg',
        description: 'კლასიკური სტილის ქისი-მწვანე',
        region: 'კახეთი',
        year: 2023,
        alcohol: 13,
        volume: '750ml',
        grapes: ['ქისი', 'მცვანე'],
        tastingNotes: 'ელეგანტური ღვინო, კომპლექსური არომატით და მინერალური ნოტებით',
        servingTemp: '10-12°C',
        price: 60
      },
      {
        id: 11,
        name: 'კუვრი',
        type: WineType.KVEVRI,
        image: '/assets/wines/ქვევრის/CUVEE.png',
        description: 'სპეციალური კუვრი ღვინო',
        region: 'კახეთი',
        year: 2021,
        alcohol: 13.5,
        volume: '750ml',
        grapes: ['ქისი', 'რქაწითელი', 'მცვანე'],
        tastingNotes: 'კომპლექსური ღვინო, სხვადასხვა ჯიშების ჰარმონიით',
        servingTemp: '12-14°C',
        price: 95
      },
      {
        id: 12,
        name: 'ვინტაჟური რქაწიტელი',
        type: WineType.CLASSIC,
        image: '/assets/wines/კლასიკური/vintagerkatsiteli.png',
        description: 'ვინტაჟური ქისი ღვინო',
        region: 'კახეთი',
        year: 2020,
        alcohol: 13.5,
        volume: '750ml',
        grapes: ['ქისი'],
        tastingNotes: 'ვინტაჟური ქისი, შეფუთული არომატებით და ღრმა გემოთი',
        servingTemp: '12-14°C',
        price: 120
      },
      {
        id: 13,
        name: 'შარდონე',
        type: WineType.CLASSIC,
        image: '/assets/wines/კლასიკური/chardonnay.png',
        description: 'საერთაშორისო შარდონე ღვინო',
        region: 'კახეთი',
        year: 2022,
        alcohol: 13,
        volume: '750ml',
        grapes: ['შარდონე'],
        tastingNotes: 'კლასიკური შარდონე, ვანილისა და მუხის არომატით',
        servingTemp: '10-12°C',
        price: 65
      },
      {
        id: 14,
        name: 'პინო ღვინო',
        type: WineType.CLASSIC,
        image: '/assets/wines/კლასიკური/pinowine.png',
        description: 'პინო ნუარი ღვინო',
        region: 'კახეთი',
        year: 2021,
        alcohol: 12.5,
        volume: '750ml',
        grapes: ['პინო ნუარი'],
        tastingNotes: 'ელეგანტური წითელი ღვინო, ალუბლისა და ვარდის ნოტებით',
        servingTemp: '14-16°C',
        price: 80
      },
      {
        id: 15,
        name: 'ცქრიალა რქაწითელი',
        type: WineType.SPARKLING,
        image: '/assets/wines/ცქრიალა/petkisi.png',
        description: 'ცქრიალა რქაწითელი ღვინო',
        region: 'კახეთი',
        year: 2022,
        alcohol: 12,
        volume: '750ml',
        grapes: ['რქაწითელი'],
        tastingNotes: 'ფრეშული ცქრიალა ღვინო, ღია ნაყოფების არომატით',
        servingTemp: '6-8°C',
        price: 70
      },
      {
        id: 16,
        name: 'პეტშარი',
        type: WineType.SPARKLING,
        image: '/assets/wines/ცქრიალა/petchar.png',
        description: 'ნატურალური ცქრიალა ღვინო',
        region: 'კახეთი',
        year: 2023,
        alcohol: 11.5,
        volume: '750ml',
        grapes: ['მცვანე'],
        tastingNotes: 'ნატურალური ქაფით ცქრიალა ღვინო, ფრეშული და ღია',
        servingTemp: '6-8°C',
        price: 75
      },
      {
        id: 17,
        name: 'პინო ცქრიალა',
        type: WineType.SPARKLING,
        image: '/assets/wines/ცქრიალა/pinospark.png',
        description: 'პინო ნუარი ცქრიალა ღვინო',
        region: 'კახეთი',
        year: 2022,
        alcohol: 12,
        volume: '750ml',
        grapes: ['პინო ნუარი'],
        tastingNotes: 'ელეგანტური ღია ღვინო, დახვეწილი ქაფით',
        servingTemp: '6-8°C',
        price: 85
      },
      {
        id: 18,
        name: 'ჩითი',
        type: WineType.DESSERT,
        image: '/assets/wines/სადესერტო/chiti.png',
        description: 'ტრადიციული ჩითი ღვინო',
        region: 'კახეთი',
        year: 2021,
        alcohol: 16,
        volume: '500ml',
        grapes: ['რქაწითელი'],
        tastingNotes: 'ტკბილი ღვინო, თაფლისა და გარიყული ნაყოფების არომატით',
        servingTemp: '10-12°C',
        price: 110
      },
      {
        id: 19,
        name: 'საფერავი სადესერტო',
        type: WineType.DESSERT,
        image: '/assets/wines/სადესერტო/საფერავი სადესერტო.jpeg',
        description: 'საცხებო ღვინო ტრადიციული რეცეპტით',
        region: 'კახეთი',
        year: 2020,
        alcohol: 18,
        volume: '375ml',
        grapes: ['რქაწითელი', 'ქისი'],
        tastingNotes: 'კონცენტრირებული ღვინო, მდიდარი და კომპლექსური არომატით',
        servingTemp: '12-14°C',
        price: 150
      },
      {
        id: 20,
        name: 'ქისი სადესერტო',
        type: WineType.DESSERT,
        image: '/assets/wines/სადესერტო/ქისი სადესერტო.jpeg',
        description: 'ქისის საცხებო ღვინო',
        region: 'კახეთი',
        year: 2021,
        alcohol: 17,
        volume: '375ml',
        grapes: ['ქისი'],
        tastingNotes: 'კონცენტრირებული ქისი, თაფლისა და ყვითელი ნაყოფების არომატით',
        servingTemp: '10-12°C',
        price: 130
      },
      {
        id: 21,
        name: 'სპეციალური კოლექცია',
        type: WineType.CLASSIC,
        image: '/assets/wines/default-wine.jpg',
        description: 'სპეციალური კოლექციის ღვინო',
        region: 'კახეთი',
        year: 2022,
        alcohol: 13.5,
        volume: '750ml',
        grapes: ['მრავალი ჯიში'],
        tastingNotes: 'უნიკალური ღვინო, რთული არომატული პროფილით',
        servingTemp: '12-14°C',
        price: 100
      },
      {
        id: 22,
        name: 'პრემიუმ სელექცია',
        type: WineType.CLASSIC,
        image: '/assets/wines/default-wine.jpg',
        description: 'პრემიუმ ხარისხის ღვინო',
        region: 'კახეთი',
        year: 2021,
        alcohol: 14,
        volume: '750ml',
        grapes: ['საფერავი', 'ქისი'],
        tastingNotes: 'პრემიუმ ღვინო, ღრმა და მდიდარი არომატით',
        servingTemp: '14-16°C',
        price: 120
      }
    ];
  }

  filterWines() {
    if (this.selectedType === '') {
      this.filteredWines = this.wines;
    } else {
      this.filteredWines = this.wines.filter(wine => wine.type === this.selectedType);
    }
  }

  selectWine(wine: Wine) {
    this.selectedWine = wine;
    this.isDetailView = true;
    console.log('Selected wine:', wine.name);
    console.log('Detail view:', this.isDetailView);
  }

  goBackToGallery() {
    this.isDetailView = false;
    this.selectedWine = null;
    console.log('Going back to gallery');
  }

  onImageError(event: any) {
    event.target.src = '/assets/wines/default-wine.jpg';
  }
}