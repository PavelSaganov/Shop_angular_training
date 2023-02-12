import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

    transform(products: Product[] | null, searchValue: string, isAsc: boolean) : Product[] {
        const sortOrder = isAsc ? 1 : -1;

        if (products == null) {
            return [];
        }

        products.sort((a: any, b: any) => {
            if (a[searchValue] < b[searchValue]) {
                return sortOrder;
            } else if (a[searchValue] > b[searchValue]) {
                return -sortOrder;
            } else {
                return 0;
            }
        });
        return products;
    }
}
