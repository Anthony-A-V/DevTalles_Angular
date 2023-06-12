import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'anthony';
  public nameUpper: string = 'ANTHONY';
  public fullName: string = 'aNtHoNy aNgUiZ';

  public customDate: Date = new Date();
}
