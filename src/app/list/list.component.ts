import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private http: HttpClient) {}

  facts: Object;
  api_url =
    'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=20';
  ngOnInit(): void {
    this.http.get(this.api_url).subscribe((data) => (this.facts = data));
  }
}
