import { Component } from '@angular/core';
import { RabbitService } from './rabbit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private rabbits: Rabbit[] = [];

  /** Constructor. */
  constructor(private api: RabbitService) {
    // this.api.getAll().subscribe((data: Rabbit[]) => {
    //   console.log('SUCCESS', data)
    //   this.rabbits = data;
    // }, error => console.error('TOO BAD', error));
  }
  onToutAcheter() {
    alert("Attention vous allez être remplis de lapinous radioactifs");
  }
}
