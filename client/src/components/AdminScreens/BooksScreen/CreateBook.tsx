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
import { Button } from '../../ui/button'
import { Plus } from 'lucide-react'
import { Input } from '../../ui/input'

const CreateBook: React.FC = () => {
    return (
        <>
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
                                <Label htmlFor="title">Title <span className='text-red-500'>*</span></Label>
                                <Input id="title" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="isbn">Description <span className='text-red-500'>*</span></Label>
                                <Input id="isbn" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="author">Author</Label>
                                <Input id="author" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="author">quantity <span className='text-red-500'>*</span></Label>
                                <Input id="author"  />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="author">publicationYear</Label>
                                <Input id="author"  />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Add Book</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
        </>
    );
}

export default CreateBook;
