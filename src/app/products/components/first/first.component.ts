import { Component } from '@angular/core';
import { Category } from '../../enums/category';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})

export class FirstComponent {

  name: string | undefined;
  description: string | undefined;
  price: number | undefined;
  isAvailable: Boolean | undefined;
  category: Category | undefined;

  constructor(
  )
  {
  }
}
