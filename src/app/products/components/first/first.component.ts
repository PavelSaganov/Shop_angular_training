import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  constructor(
    public name: string,
    public description: string,
    public price: number,
    public isAvailable: Boolean,
    public category: Category
  )
  {
  }
}
