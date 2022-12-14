import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html',
  styleUrls: ['./completed-list.component.css']
})
export class CompletedListComponent implements OnInit {
title:string = "Alphabets";
  completedItems:any[] = ["A","B","C","D"];
  constructor() { }

  ngOnInit() {
  }

}
