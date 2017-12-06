import {  Component } from '@angular/core';



@Component({
    moduleId: module.id,
    selector:'app',
    templateUrl:'./app.html'
})

export class AppComponent {

    public users : any;

    constructor() {
        
    }

    // getUsers(){
    //     console.log('calling');
    //     this.appService.getData().subscribe(res=> {
    //         this.users = res;
    //        console.log(this.users);
    //     });

    // }
}