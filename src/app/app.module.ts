import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TrainingsessionService } from './trainingsession.service';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    TrainingsessionService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
