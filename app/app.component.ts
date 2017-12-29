import {  Component } from '@angular/core';



@Component({
    moduleId: module.id,
    selector:'app',
    templateUrl:'./app.html'
})

export class AppComponent {

    public users : any;
	public nodeName : string;
	
nodes = [
  {
    id: 1,
    name: 'root1',
    children: [
      {
        id: 2,
        name: 'child1'
      }, {
        id: 3,
        name: 'child2'
      }
    ]
  }
]

    constructor() {
		this.nodeName = '';
        
    }

    // getUsers(){
    //     console.log('calling');
    //     this.appService.getData().subscribe(res=> {
    //         this.users = res;
    //        console.log(this.users);
    //     });

    // }
	
	// setNode(){
		// this.nodeName = 
		
	// }
	
}