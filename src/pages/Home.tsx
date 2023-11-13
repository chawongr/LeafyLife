
import Hero from "../views/Hero";
import Services from '../views/Services';
import Products from '../views/Products';
import Reference from '../views/Reference';
import Care from '../views/Care';
import Footer from '../views/Footer';
import Step from '../views/Step';

const Home = () => {
    return ( 
        <div>
            <Hero />
            <Step />
            <Services />
            <Products />
            <Reference />
            <Care />
            <Footer />
        </div>
     );
}
 
export default Home;
