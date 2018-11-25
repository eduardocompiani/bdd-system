import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list;
  @Input() name: string;
  @Input() canManage = false;
  @Input() canDelete = true;
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onView = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  edit(item: any) {
    this.onEdit.emit(item);
  }

  delete(item: any) {
    this.onDelete.emit(item);
  }

  view(item: any) {
    this.onView.emit(item);
  }

}
