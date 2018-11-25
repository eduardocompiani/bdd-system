import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule, MatSelectModule, MatSlideToggleModule} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatExpansionModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatExpansionModule,
    MatSelectModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }
