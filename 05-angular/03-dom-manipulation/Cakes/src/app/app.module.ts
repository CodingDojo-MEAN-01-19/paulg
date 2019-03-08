import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CakeListComponent } from './cakes/cake-list/cake-list.component';
import { CakeNewComponent } from './cakes/cake-new/cake-new.component';
import { CakeDetailComponent } from './cakes/cake-detail/cake-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CakeListComponent,
    CakeNewComponent,
    CakeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
