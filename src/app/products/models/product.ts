import { Category } from "../enums/category";

export class Product {
    constructor(
        public name: string | undefined,
        public description: string | undefined,
        public price: number | undefined,
        public isAvailable: Boolean | undefined,
        public category: Category | undefined
    ) 
    {
    }
}