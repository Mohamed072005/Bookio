export interface BookEntity {
    id: string;
    title: string;
    desciption: string;
    author?: string;
    publicationYear?: number;
    quantity: number;
    price: number;
    createdAt: string;
    updatedAt: string;
}