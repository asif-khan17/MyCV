import { Component } from '@angular/core';
import { UserService } from './user.service'

@Component({

    moduleId: module.id,
    selector:'user',
    templateUrl:'./user.html'

})

export class UserComponent {

    public data:any = {};
    constructor(private userService :UserService){
        this.data = {
            "user1":{},
            "user2":{}
        };

    }
    getUsers(){
        this.userService.getData().subscribe(res => {
            console.log(res);
            this.data = res;
        });
    }

    clear(){
        this.data = {
            "user1":{},
            "user2":{}
        };
    }

}