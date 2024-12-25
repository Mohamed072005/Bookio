import React from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '9780743273565', status: 'Available' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780446310789', status: 'Borrowed' },
    { id: 3, title: '1984', author: 'George Orwell', isbn: '9780451524935', status: 'Available' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', isbn: '9780141439518', status: 'Available' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', isbn: '9780316769488', status: 'Borrowed' },
]

export const BooksList: React.FC = () => {
    return (
        <div className="rounded-md border">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                    <Input
                        placeholder="Search books..."
                        className="w-64"
                    />
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" /> Add Book
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Book</DialogTitle>
                            <DialogDescription>
                                Add a new book to the library catalog.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="author">Author</Label>
                                <Input id="author" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="isbn">ISBN</Label>
                                <Input id="isbn" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Add Book</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>ISBN</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {books.map((book) => (
                        <TableRow key={book.id}>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.author}</TableCell>
                            <TableCell>{book.isbn}</TableCell>
                            <TableCell>
                                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${book.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {book.status}
                                </span>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="sm">Edit</Button>
                                <Button variant="ghost" size="sm" className="text-red-500">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

