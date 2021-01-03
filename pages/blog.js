import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageHeader from "../components/PageHeader";
import News from "../components/News";
import Footer from "../components/Footer";
import { getAllPostsForHome } from '../lib/api'



const NewsPage = ({ allPosts, preview }) => {
    return(
    <Layout pageTitle="FixerIT | News">
        <NavTwo />
        <PageHeader title="חדשות" />
        <News allPosts={[...allPosts,...allPosts,...allPosts,...allPosts,...allPosts,...allPosts,...allPosts]}/>
        <Footer />
    </Layout>
    )
}

export default NewsPage;

export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview)
    return {
      props: { allPosts, preview },
    }
  }
  