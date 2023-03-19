import { Component } from '@angular/core';
import { ComponentCanDeactivate } from '../../guard/sure-to-leave.guard';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements ComponentCanDeactivate {

  canDeactivate(): boolean
  {
    return confirm("Are you sure you want to leave the page?");
  }

}
