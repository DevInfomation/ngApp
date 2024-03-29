import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../Tasks'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css'
})

export class TasksItemComponent {

  @Input() task!: Task;
  faTimes = faTimes;

  constructor() {}
  ngOnInit(): void {}
}
