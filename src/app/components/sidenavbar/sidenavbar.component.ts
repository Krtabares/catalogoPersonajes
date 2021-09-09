import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {

  constructor(public router: Router){}

  ngOnInit(): void {
  }
  onClick(e: Event, path:string){
    
    e.preventDefault()

    this.router.navigate([path]);
  }

}
