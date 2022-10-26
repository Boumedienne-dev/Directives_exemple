import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  title: string = 'Raclette party 🧀';

  isThisIngredientVital: boolean = true;

  isGuestListDisplayed: boolean = true;

  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];

  constructor() { }

  ngOnInit(): void {
  }

}
