import React from 'react';
import Link from 'next/link';

const NewsHome = (props) => {
    const blogPosts = () => {
        const pages = props.allPosts.slice(0,3);
        return pages.map ((e,index) => {
            return(
                    <div className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp" key={e.slug+index}data-wow-duration="1500ms">
                    <div className="blog-one__single">
                        <div className="blog-one__image">
                            <img src={e.coverImage} style={{width: '100%',height: '282px',objectFit: 'cover',objectPosition: 'center'}} alt="" />
                            <Link href={'/blog/'+e.slug}>
                                <a className="blog-one__more-link"><i
                                    className="fa fa-link"></i>
                                </a>
                            </Link>
                        </div>
                        <div className="blog-one__content">
                            <ul className="list-unstyled blog-one__meta">
                                <li><a href="#">{new Date(e.date).toLocaleDateString()}</a></li>
                            </ul>
                            <h3 className="blog-one__title">
                                <Link href={`/blog/${e.slug}`}>
                                <a>{e.title}</a>
                                </Link>
                            </h3>
                            <Link href={`/blog/${e.slug}`}>
                            <a className="blog-one__link">קרא עוד</a>
                            </Link>
                        </div>
                    </div>
                </div>
                )
            })
    }
        return (

            <section className="blog-one blog-one__home thm-gray-bg" id="news">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">הכתבות האחרונות שלנו.
                        </h2>
                    </div>
                    <div className="row justify-content-center">
                        {blogPosts()}
                    </div>
                </div>
            </section>
        )
}
export default NewsHome;