import { Component } from '@angular/core';
import { CompletedService } from '../services/completed.service';

@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html',
  styleUrls: ['./completed-list.component.css']
})
export class CompletedListComponent {

  _completedService: CompletedService;
  
  constructor(_completedService: CompletedService) {
    this._completedService = _completedService;
  }
  
}
