import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Author/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './Author/add/add.component';
import { UpdateComponent } from './Author/update/update.component';
import { DeleteComponent } from './Author/delete/delete.component';
import { DetailComponent } from './Author/detail/detail.component';
import { AuthorService } from './service/author.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
