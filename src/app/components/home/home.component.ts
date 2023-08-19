import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { VcConstants } from 'src/app/utils/vc-Constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(private router: Router,
    private vcConstants: VcConstants){}

  ngOnInit(): void {
      
  }

  public newMeeting(){
    this.router.navigateByUrl(this.vcConstants.web_router_link.video)
  }
}
