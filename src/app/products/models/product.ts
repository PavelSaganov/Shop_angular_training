import { Category } from "../enums/category";

export interface Product {
        id: number | undefined,
        name: string | undefined,
        description: string | undefined,
        price: number | undefined,
        isAvailable: Boolean | undefined,
        category: Category | undefined
}