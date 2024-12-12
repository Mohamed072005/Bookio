import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import BookCover from '@/assets/img/book-metadata.jpg'

const featuredBooks = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', cover: '/placeholder.svg?height=300&width=200' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', cover: '/placeholder.svg?height=300&width=200' },
    { id: 3, title: '1984', author: 'George Orwell', cover: '/placeholder.svg?height=300&width=200' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', cover: '/placeholder.svg?height=300&width=200' },
]

export const FeaturedBooks: React.FC = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Featured Books</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {featuredBooks.map((book) => (
                        <Card key={book.id}>
                            <CardContent className="p-4">
                                <img src={BookCover} alt={book.title} className="w-full h-64 object-cover mb-4" />
                                <h3 className="font-bold">{book.title}</h3>
                                <p className="text-sm text-muted-foreground">{book.author}</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">View Details</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}