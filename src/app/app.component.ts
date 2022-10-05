import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'asyncValidator';

  ngOninit() {
    async function f() { 
    let sum = [1, 2, 3, 4, 5, 6].reduce(function(sum, elem) {
      return sum + elem;
    }, 0);
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(sum), 3000)
    });
    let result = await promise; // будет ждать, пока промис не выполнится (*)
	  console.log(result); // "готово!"
  }
  
  f();
  }

}
