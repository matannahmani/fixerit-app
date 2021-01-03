import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
import BannerTwo from "../components/BannerTwo";
import Features from "../components/Features";
import CallToActionTwo from "../components/CallToActionTwo";
import Testimonial from "../components/Testimonial";
import Brands from "../components/Brands";
import Counter from "../components/Counter";
import Faq from "../components/Faq";
import NewsHome from "../components/NewsHome";
import Subscribe from "../components/Subscribe";
import { getAllPostsForHome } from "../lib/api";



const HomePageTwo = ({ allPosts, preview }) => (

    <Layout pageTitle="Fixer IT">
        <NavTwo />
        <BannerTwo />
        <Features />
        <CallToActionTwo />
        <Testimonial />
        <Brands />
        <Counter />
        <Faq />
        <NewsHome allPosts={allPosts}/>
        <Subscribe />
        <Footer />
    </Layout>

)

export default HomePageTwo;



export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview)
    return {
      props: { allPosts, preview },
    }
  }
  