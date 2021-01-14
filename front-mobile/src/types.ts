export type Product = {
    id: number;
    price: number;
    name: string;
    description: string;
    imageUri: string;
}

export type Order = {
    id: number;
    latitude: number;
    longitude: number;
    address: string;
    moment: string;
    status: String;
    total: number;
    products: Product[];
}