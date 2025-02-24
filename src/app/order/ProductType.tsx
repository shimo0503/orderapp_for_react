export type ProductData = {
    name: string,
    code: string,
    price: number,
    rest: number
}
export type ProductItem = {
    status: string,
    data: ProductData[]
}

