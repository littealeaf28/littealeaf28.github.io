import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-cool-carousel',
  templateUrl: './fun-carousel.component.html',
  styleUrls: ['./fun-carousel.component.scss']
})
export class FunCarouselComponent implements OnInit {
  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

}
