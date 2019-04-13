import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-portfolio-carousel',
  templateUrl: './portfolio-carousel.component.html',
  styleUrls: ['./portfolio-carousel.component.scss']
})
export class PortfolioCarouselComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  
  public carouselOptions: NguCarousel;
  public portfolios = [{
    photo: 'assets/images/sq-10.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Project One',
  }, {
    photo: 'assets/images/sq-11.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Project Two',
  }, {
    photo: 'assets/images/sq-12.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Project Three',
  }, {
    photo: 'assets/images/sq-13.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Project Four',
  }, {
    photo: 'assets/images/sq-15.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Project Five',
  }, {
    photo: 'assets/images/sq-16.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Project Six',
  }]
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
  }

}
