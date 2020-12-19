import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit {

  age: number;
  name: string;

  constructor(public activatedRoute: ActivatedRoute, public router: Router) {

    this.name = this.activatedRoute.snapshot.paramMap.get('name');
  }

  ngOnInit(): void { }
  
  result() {

    this.router.navigate(['/result/' + this.name + '/' + this.age])
  }

}
