import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
   projects : Project[]=[
    {
      title:"WEB DESIGN"
    },
    {
      title:"MOBILE DESIGN"
    },
    {
      title:"LOGO DESIGN"
    },
    {
      title:"WEB APPLICATION DEVELOPMENT"
    },
    {
      title:"MOBILE APPLICATION DEVELOPMENT"
    },
    {
      title:"PWA DEVELOPMENT"
    }
  ]
}
interface Project {
    title : string;
    description ? :string;
  }