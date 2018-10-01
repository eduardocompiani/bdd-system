import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FolderInterface} from '../../../../interfaces/folder-interface';

@Component({
  selector: 'app-folder-form',
  templateUrl: './folder-form.component.html',
  styleUrls: ['./folder-form.component.css']
})
export class FolderFormComponent implements OnInit {
  folderForm: FormGroup;

  @Output() onSave = new EventEmitter();
  @Input() folder: FolderInterface;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.folderForm = this.fb.group({
      'name': [null, Validators.required]
    });
  }

  emitFolder(name: string) {
    this.folder.name = name;
    this.onSave.emit(this.folder);
  }
}
