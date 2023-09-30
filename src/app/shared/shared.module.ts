import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {LoaderComponent} from "./components/loader/loader.component";
import {TranslatePipe} from "./pipes/translate.pipe";



@NgModule({
  declarations: [
    NotFoundComponent,
    LoaderComponent,
    TranslatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotFoundComponent,
    LoaderComponent,
    TranslatePipe,
  ]
})
export class SharedModule { }
