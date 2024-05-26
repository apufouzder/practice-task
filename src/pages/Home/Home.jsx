import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Home/Banner";
import Product from "../../components/Home/Product";

const Home = () => {
    const data = useLoaderData();

    return (
        <>
            <Banner /> 
            <Product data={data} />
        </>
    );
};

export default Home;