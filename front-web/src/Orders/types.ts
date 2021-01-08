export type Product = {
    id: number;
    price: number;
    name: string;
    description: string;
    imageUri: string;
}

export type OrderLocationData = {
    latitude: number;
    longitude: number;
    address: string;
}

type ProductId = {
    id: number;
}

// Merge de OrderLocationData com ProductId
export type OrderPayload = {
    products: ProductId[];
} & OrderLocationData;