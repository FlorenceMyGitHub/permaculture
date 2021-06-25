import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-varietes',
  templateUrl: './varietes.page.html',
  styleUrls: ['./varietes.page.scss'],
})
export class VarietesPage implements OnInit {
  level = 0;
  nextPage = VarietesPage;

  constructor() { }

  ngOnInit() {
  }

}
