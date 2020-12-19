import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  name:string="";
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  age() {
    this.router.navigate(['/age/' + this.name]);
  }
}
