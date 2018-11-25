import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FolderService} from '../../../../services/folder.service';
import {FolderInterface} from '../../../../interfaces/folder-interface';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit {

  folders: any;
  name = 'name';

  constructor(private router: Router,
              private folderService: FolderService) { }

  ngOnInit() {
    this.folders = this.folderService.getList();
  }

  createNewFolder() {
    this.router.navigate(['/folder/create']);
  }

  delete(folder: FolderInterface) {
    this.folderService.delete(folder);
  }

  edit(folder: FolderInterface) {
    this.router.navigate(['/folder/edit/' + folder.oid]);
  }
}
