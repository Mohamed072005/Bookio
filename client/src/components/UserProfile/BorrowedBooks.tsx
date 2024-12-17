import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'

const borrowedBooks = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', dueDate: '2023-07-15' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', dueDate: '2023-07-20' },
    { id: 3, title: '1984', author: 'George Orwell', dueDate: '2023-07-25' },
]

export const BorrowedBooks: React.FC = () => {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Borrowed Books</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Due Date</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {borrowedBooks.map((book) => (
                            <TableRow key={book.id}>
                                <TableCell>{book.title}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>{book.dueDate}</TableCell>
                                <TableCell>
                                    <Button variant="outline" size="sm">Renew</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}