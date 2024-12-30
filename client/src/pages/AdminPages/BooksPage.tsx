import { BooksMainComponent } from "@/components/AdminScreens/BooksScreen/BooksMainComponent";

const BooksPage = () => {
    return (
        <>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
                <div className="xl:col-span-2">
                    <BooksMainComponent />
                </div>
            </div>
        </>
    );
}

export default BooksPage;
