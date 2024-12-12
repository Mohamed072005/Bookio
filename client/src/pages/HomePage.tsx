import { Categories } from "@/components/HomeScreen/categories";
import { FeaturedBooks } from "@/components/HomeScreen/FeaturedBooks";
import HeroSection from "@/components/HomeScreen/HeroSection";

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <FeaturedBooks />
            <Categories />
        </>
    );
}

export default HomePage;
