import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import BookCover from '@/assets/img/book-metadata.jpg'

const featuredBooks = [
    {
        quantity: 400,
        updatedAt: "2024-12-16T19:08:08.742Z",
        createdAt: "2024-12-16T19:08:08.742Z",
        publicationYear: 2005,
        price: 500,
        id: "f6ab7490-0324-47e5-874f-9f0370fb6108",
        desciption: "Helllo",
        author: "Amine",
        title: "Hello World"
    },
    {
        quantity: 400,
        updatedAt: "2024-12-16T20:17:30.823Z",
        createdAt: "2024-12-16T20:17:30.823Z",
        publicationYear: 2005,
        price: 5000,
        id: "5ff66653-13ab-42b8-8ea4-d0084dbaa1e1",
        desciption: "Helllo",
        author: "Amine",
        title: "ccccc"
    },
    {
        quantity: 4000,
        id: "49126127621869812719827",
        price: 20,
        updatedAt: "2024-12-17T20:40:25.107Z",
        desciption: "Hello fro the best class in the world!! <JS>",
        title: "Hello"
    },
]

export const FeaturedBooks: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">Featured Books</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredBooks.map((book) => (
                        <Card key={book.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                            <CardContent className="p-0">
                                <div className="relative h-64 bg-muted">
                                    <img
                                        src={BookCover}
                                        alt={book.title}
                                        className="transition-opacity duration-300 hover:opacity-75"
                                    />
                                </div>
                                <div className="p-6 mt-14">
                                    <h3 className="font-bold text-xl mb-2 line-clamp-1">{book.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        {book.author ? `By ${book.author}` : 'Author unknown'}
                                    </p>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        Published: {book.publicationYear ? `By ${book.publicationYear}` : 'unknown date'}
                                    </p>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        quantity: {book.quantity}
                                    </p>
                                    <p className="text-lg font-semibold text-primary">
                                        ${book.price.toFixed(2)}
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Button variant="outline" className="w-full">
                                    View Details
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}