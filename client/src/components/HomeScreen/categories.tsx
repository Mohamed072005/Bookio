import React from 'react'
import { Button } from '@/components/ui/button'

const categories = [
    'Fiction', 'Non-Fiction', 'Mystery', 'Science Fiction', 'Romance', 'Biography',
    'History', 'Self-Help', 'Children\'s', 'Poetry'
]

export const Categories: React.FC = () => {
    return (
        <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
                <div className="flex flex-wrap gap-4">
                    {categories.map((category) => (
                        <Button key={category} variant="outline">{category}</Button>
                    ))}
                </div>
            </div>
        </section>
    )
}
