import React, { Component } from 'react';
import Link from 'next/link';
const News = (props) => {
        return (
            <section className="blog-one">
                <div className="container">
                    <div className="row flex-row-reverse justify-content-center">
                        {props.allPosts.map ((e) => {
                        return(
                                <div key={e.slug} className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="blog-one__single">
                                    <div className="blog-one__image">
                                        <img src={e.coverImage} style={{width: '370px',height: '282px',objectFit: 'cover',objectPosition: 'center'}} alt="" />
                                        <Link href={'blog/'+e.slug}>
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
                                        <Link href={e.slug}>
                                        <a className="blog-one__link">קרא עוד</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                    <div className="post-pagination">
                        <a href="#"><i className="fa fa-angle-double-left"></i></a>
                        <a className="active" href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#"><i className="fa fa-angle-double-right"></i></a>
                    </div>
                </div>
            </section>
        )
}
export default News;
