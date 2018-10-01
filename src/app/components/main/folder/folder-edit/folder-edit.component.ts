import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FolderService} from '../../../../services/folder.service';
import {FolderInterface} from '../../../../interfaces/folder-interface';
import {Folder} from '../../../../model/folder';

@Component({
  selector: 'app-folder-edit',
  templateUrl: './folder-edit.component.html',
  styleUrls: ['./folder-edit.component.css']
})
export class FolderEditComponent implements OnInit {
  folder: FolderInterface = new Folder();

  constructor(private route: ActivatedRoute,
              private folderService: FolderService,
              private router: Router) { }

  ngOnInit() {
    this.folderService.getByUid(this.route.snapshot.params['id']).subscribe(folder => {
      this.folder = folder as FolderInterface;
    });

  }

  save(folder: FolderInterface) {
    this.folderService.update(folder);
    this.router.navigate(['/folder']);
  }

}
