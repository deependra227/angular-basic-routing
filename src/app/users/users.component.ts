import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private http: HttpClient) {}
  details;
  api_url = 'https://randomuser.me/api/';
  ngOnInit(): void {
    this.http
      .get(this.api_url)
      .subscribe((data) => (this.details = data['results'][0]))
    
  }
}
