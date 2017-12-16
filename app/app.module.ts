import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule , Routes } from '@angular/router';
import { UserComponent } from './users/user.component';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UserService } from './users/user.service';
import { HttpModule } from '@angular/http';
import { TreeModule } from 'angular-tree-component';

const appRoutes:Routes=[
     { path: 'users' , component: UserComponent },
     { pathMatch: 'full', path: "", component: UserComponent }
]


@NgModule({
    bootstrap: [AppComponent],

imports:[
    RouterModule.forRoot(
       appRoutes),
    BrowserModule,
    FormsModule,
	TreeModule,
    CommonModule,
    HttpModule

],

declarations:[ AppComponent , UserComponent ],
providers:[UserService]
})

export class AppModule {}   