import { Component, OnInit } from '@angular/core';
import { take, map, combineAll, mapTo, startWith, scan, tap, mergeAll, buffer } from 'rxjs/operators';
import { interval } from 'rxjs/observable/interval';
import { Observable, fromEvent, combineLatest, of, range } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // setHtml: (id: any) => (val: any) => any;
  // constructor() {
  //   this.setHtml = id => val => (document.getElementById(id).innerHTML = val);
  // }

  // ngOnInit() {
  //   const addOneClick$ = id =>
  //     fromEvent(document.getElementById(id), 'click').pipe(
  //       // map every click to 1
  //       mapTo(1),
  //       startWith(0),
  //       // keep a running total
  //       scan((acc, curr) => acc + curr),
  //       // set HTML for appropriate element
  //       tap(this.setHtml(`${id}Total`))
  //     );

  //   const combineTotal$ = combineLatest(addOneClick$('red'), addOneClick$('black'))
  //     .pipe(map(([val1, val2]) => val1 + val2))
  //     .subscribe(this.setHtml('total'));

  //   const myPromise = val =>
  //     new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000));
  //   //emit 1,2,3
  //   const source = of(1, 2, 3);

  //   const example = source.pipe(
  //     //map each value to promise
  //     map(val => myPromise(val)),
  //     //emit result from source
  //     mergeAll()
  //   );

  //   /*
  //     output:
  //     "Result: 1"
  //     "Result: 2"
  //     "Result: 3"
  //   */
  //   const subscribe = example.subscribe(val => console.log(val));

  //   //Create an observable that emits a value every second
  //   const myInterval = interval(1000);
  //   //Create an observable that emits every time document is clicked
  //   const bufferBy = fromEvent(document.getElementById('red'), 'click');
  //   /*
  //   Collect all values emitted by our interval observable until we click document. This will cause the bufferBy Observable to emit a value, satisfying the buffer. Pass us all collected values since last buffer as an array.
  //   */
  //   const myBufferedInterval = myInterval.pipe(buffer(bufferBy));
  //   //Print values to console
  //   //ex. output: [1,2,3] ... [4,5,6,7,8]
  //   const subscribe1 = myBufferedInterval.subscribe(val =>
  //     console.log(' Buffered Values:', val)
  //   );
  // }


}



