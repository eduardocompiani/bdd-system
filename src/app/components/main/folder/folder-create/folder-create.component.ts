import { Component, OnInit } from '@angular/core';
import {FolderInterface} from '../../../../interfaces/folder-interface';
import {Folder} from '../../../../model/folder';
import {FolderService} from '../../../../services/folder.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-folder-create',
  templateUrl: './folder-create.component.html',
  styleUrls: ['./folder-create.component.css']
})
export class FolderCreateComponent implements OnInit {
  folder: FolderInterface = new Folder();

  constructor(private folderService: FolderService,
              private router: Router) {}

  ngOnInit() {}

  save(folder: FolderInterface) {
    this.folderService.create(folder);
    this.router.navigate(['/folder']);
  }
}
