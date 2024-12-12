import { Button } from "../ui/button";
import { Input } from "../ui/input";

const HeroSection: React.FC = () => {
    return (
        <>
            <section className="bg-primary text-primary-foreground py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Discover Your Next Favorite Book</h1>
                    <p className="text-xl mb-8">Explore our vast collection of books and find your perfect read.</p>
                    <div className="flex max-w-md mx-auto">
                        <Input placeholder="Search for books..." className="rounded-r-none" />
                        <Button type="submit" className="rounded-l-none">Search</Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;
