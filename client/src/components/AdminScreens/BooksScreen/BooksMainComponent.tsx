import React from 'react'
import { Input } from '@/components/ui/input'

import CreateBook from './CreateBook'
import BookList from './BookList'

export const BooksMainComponent: React.FC = () => {
    return (
        <div className="rounded-md border">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                    <Input
                        placeholder="Search books..."
                        className="w-64"
                    />
                </div>
                <CreateBook />
            </div>
            
            <BookList />
        </div>
    )
}

