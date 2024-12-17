import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

const readingHistory = [
    { id: 1, title: 'Pride and Prejudice', author: 'Jane Austen', date: '2023-06-01' },
    { id: 2, title: 'The Catcher in the Rye', author: 'J.D. Salinger', date: '2023-05-15' },
    { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', date: '2023-04-30' },
    { id: 4, title: 'Moby-Dick', author: 'Herman Melville', date: '2023-04-10' },
    { id: 5, title: 'The Odyssey', author: 'Homer', date: '2023-03-22' },
]

export const ReadingHistory: React.FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Reading History</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[300px]">
                    <ul className="space-y-4">
                        {readingHistory.map((book) => (
                            <li key={book.id} className="flex justify-between items-center">
                                <div>
                                    <h3 className="font-semibold">{book.title}</h3>
                                    <p className="text-sm text-muted-foreground">{book.author}</p>
                                </div>
                                <span className="text-sm text-muted-foreground">{book.date}</span>
                            </li>
                        ))}
                    </ul>
                </ScrollArea>
            </CardContent>
        </Card>
    )
}