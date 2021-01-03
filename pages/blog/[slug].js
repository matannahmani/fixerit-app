import { useRouter } from 'next/router'
import ErrorPage from 'next/error';
import PostLayout from '../../components/layout-post';
import PageLayout from '../../components/Layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import NavTwo from "../../components/NavTwo";
import PageHeader from "../../components/PageHeader";
import NewsDetails from "../../components/NewsDetails";
import Footer from "../../components/Footer";
import Head from 'next/head';


export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <PageLayout>
      <Head>
      {router.isFallback ? (null
                  ) : (
                    <>
                    <title>Fix IT | {post.title}</title>
                    <meta name="description" content={post.seo}/>
                    <meta name="keywords" content={post.tags}/>
                    <meta name="author" content={post.author.name}/>
                    </>
                  )}
        <meta name="description" content="Test"/>
      </Head>
      <PostLayout preview={preview}>
        <NavTwo />
          <PageHeader title='בלוג'/>
                {router.isFallback ? (null
                  ) : (
                    <>
                    {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
                  <NewsDetails
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  content={post.content}
                  loading={false}
                  tags={post.tags}
                  morePosts={morePosts}
                  />
                  </>
                )}
              <Footer />
      </PostLayout>
    </PageLayout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}
