import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  name: string;
  age: number;

  constructor(public activatedRoute: ActivatedRoute, public Router: Router) {
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.age = parseInt(this.activatedRoute.snapshot.paramMap.get('age'));

  }

  ngOnInit(): void { }

  vote(age): boolean {
    if (age < 18)
      return false;
    else
      return true;
  }

  names() {
    this.Router.navigate(['/name']);
  }
}
