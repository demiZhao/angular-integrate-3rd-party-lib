import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular';

  ngOnInit() {
    particlesJS.load('particles', 'assets/particles.json', () => {
      console.log('particles loaded...');
    })
  }
}
