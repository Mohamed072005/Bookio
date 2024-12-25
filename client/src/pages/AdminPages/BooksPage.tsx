import { BooksList } from "@/components/AdminScreens/BooksList";

const BooksPage = () => {
    return (
        <>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
                <div className="xl:col-span-2">
                    <BooksList />
                </div>
            </div>
        </>
    );
}

export default BooksPage;
