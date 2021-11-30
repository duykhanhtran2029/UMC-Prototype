import { Component, OnInit } from '@angular/core';
import * as Converters from 'test-um';

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.scss']
})
export class AthletesComponent implements OnInit {

  constructor() { }
  raw_athletes = [{
    "full_name": "Stacee MacNab",
    "age": 26,
    "height": 179,
    "weight": 61,
    "temperature": 36,
    "fastest_speed": 2.56895,
    "avg_speed": 2.14965,
    "avg_acceleration": 0.05126,
    "fastest_acceleration": 0.10622
  }, {
    "full_name": "Daria Waddicor",
    "age": 28,
    "height": 229,
    "weight": 76,
    "temperature": 38,
    "fastest_speed": 2.77219,
    "avg_speed": 1.66011,
    "avg_acceleration": 0.0829,
    "fastest_acceleration": 0.13655
  }, {
    "full_name": "Idalia Newman",
    "age": 26,
    "height": 189,
    "weight": 60,
    "temperature": 36,
    "fastest_speed": 2.55663,
    "avg_speed": 1.5026,
    "avg_acceleration": 0.06841,
    "fastest_acceleration": 0.19027
  }, {
    "full_name": "Griff Sharrier",
    "age": 19,
    "height": 215,
    "weight": 70,
    "temperature": 38,
    "fastest_speed": 2.53085,
    "avg_speed": 1.95663,
    "avg_acceleration": 0.05469,
    "fastest_acceleration": 0.11671
  }, {
    "full_name": "Margy Tordoff",
    "age": 23,
    "height": 186,
    "weight": 78,
    "temperature": 38,
    "fastest_speed": 2.50831,
    "avg_speed": 1.11836,
    "avg_acceleration": 0.06766,
    "fastest_acceleration": 0.1892
  }, {
    "full_name": "Jose McDonnell",
    "age": 32,
    "height": 212,
    "weight": 64,
    "temperature": 37,
    "fastest_speed": 2.69275,
    "avg_speed": 1.40424,
    "avg_acceleration": 0.09707,
    "fastest_acceleration": 0.15866
  }, {
    "full_name": "Claudio Bullough",
    "age": 30,
    "height": 182,
    "weight": 52,
    "temperature": 37,
    "fastest_speed": 2.83992,
    "avg_speed": 2.45594,
    "avg_acceleration": 0.05716,
    "fastest_acceleration": 0.19531
  }, {
    "full_name": "Sherye Urrey",
    "age": 32,
    "height": 226,
    "weight": 57,
    "temperature": 37,
    "fastest_speed": 2.75206,
    "avg_speed": 1.51193,
    "avg_acceleration": 0.08294,
    "fastest_acceleration": 0.18211
  }, {
    "full_name": "Lynn Ainslee",
    "age": 26,
    "height": 190,
    "weight": 60,
    "temperature": 38,
    "fastest_speed": 2.63479,
    "avg_speed": 2.02894,
    "avg_acceleration": 0.05614,
    "fastest_acceleration": 0.17134
  }, {
    "full_name": "Daphne Lesmonde",
    "age": 28,
    "height": 221,
    "weight": 51,
    "temperature": 38,
    "fastest_speed": 2.66464,
    "avg_speed": 1.57979,
    "avg_acceleration": 0.07467,
    "fastest_acceleration": 0.18414
  }, {
    "full_name": "Jard Woolstenholmes",
    "age": 28,
    "height": 177,
    "weight": 53,
    "temperature": 36,
    "fastest_speed": 2.87385,
    "avg_speed": 1.65171,
    "avg_acceleration": 0.06914,
    "fastest_acceleration": 0.19275
  }, {
    "full_name": "Miguel McWilliams",
    "age": 26,
    "height": 211,
    "weight": 74,
    "temperature": 37,
    "fastest_speed": 2.81226,
    "avg_speed": 1.05288,
    "avg_acceleration": 0.08278,
    "fastest_acceleration": 0.1208
  }, {
    "full_name": "Finn Habershon",
    "age": 31,
    "height": 238,
    "weight": 79,
    "temperature": 37,
    "fastest_speed": 2.74306,
    "avg_speed": 1.48754,
    "avg_acceleration": 0.0936,
    "fastest_acceleration": 0.1744
  }, {
    "full_name": "Juliane Coners",
    "age": 29,
    "height": 211,
    "weight": 52,
    "temperature": 36,
    "fastest_speed": 2.84732,
    "avg_speed": 1.69656,
    "avg_acceleration": 0.09612,
    "fastest_acceleration": 0.10947
  }, {
    "full_name": "Blaine Courtman",
    "age": 19,
    "height": 217,
    "weight": 73,
    "temperature": 36,
    "fastest_speed": 2.54979,
    "avg_speed": 1.187,
    "avg_acceleration": 0.06949,
    "fastest_acceleration": 0.19936
  }];
  athletes: any;
  ngOnInit(): void {
    this.athletes = this.raw_athletes;
    console.log(this.athletes);
  }

}
