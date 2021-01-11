import React from 'react';
// import BlockContent from '@sanity/block-content-to-react'
import BlockContent from '../components/BlockContent';
import markdownStyles from './markdown-styles.module.css'
import Link from 'next/link';

const NewsDetails = (props) => {
        return (
            <section className="blog-details">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-8">
                            <div className="blog-one__single">
                                <div className="blog-one__image">
                                    <img src={props.coverImage} style={{height: '418px',objectFit: 'cover', objectPosition: 'center'}} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <ul className="list-unstyled blog-one__meta">
                                        <li><span>כתבה מעת: {props.author.name}</span></li>
                                        <li><span>{new Date(props.date).toLocaleDateString()}</span></li>
                                        {/* <li><a href="#">2 Comments</a></li> */}
                                    </ul>
                                    <h3 className="blog-one__title">{props.title}</h3>
                                    <div className="blog-one__text">
                                        {console.log(props.content)}
                                        <BlockContent blocks={props.content} className={markdownStyles.markdown} />
                                    </div>

                                </div>
                            </div>
                            <div className="share-block">
                                <div className="left-block">
                                    <p>תגיות: {props.tags.map ((e,i) => (i !== props.tags.length - 1 ) ? <a key={e}>{e},</a> : <a key={e}>{e}</a>)}</p>
                                </div>
                                {/* <div className="social-block">
                                    <a className="fa fa-facebook-square" href="#"></a>
                                    <a className="fa fa-twitter" href="#"></a>
                                    <a className="fa fa-instagram" href="#"></a>
                                    <a className="fa fa-pinterest-p" href="#"></a>
                                </div> */}
                            </div>
                            <div className="blog-details__author">
                                <div className="blog-details__author-image">
                                    <img className="avatar-128" src={props.author.picture} alt="Picture of Author" />
                                </div>
                                <div className="blog-details__author-content">
                                    <h3>{props.author.name}</h3>
                                    <p>{props.author.about}</p>
                                </div>
                            </div>
                            {/* <h2 className="blog-details__content-title">2
                                Comments</h2> */}
                            {/* <div className="comment-one">
                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <div className="inner-block">
                                            <img src="/assets/images/blog/comment-1-1.jpg" alt="Awesome Image" />
                                        </div>
                                    </div>
                                    <div className="comment-one__content">
                                        <div className="comment-one__content-top">
                                            <div className="comment-one__top-left">
                                                <h3 className="comment-one__author">Laquanda Bachmeier</h3>
                                                <p className="comment-one__date">20 April, 2019 <span
                                                    className="comment-one__date-sep">.</span> 4:00 pm</p>
                                                <p className="comment-one__text">Lorem Ipsum is simply dummy text of the
                                                    rinting and
                                                    typesetting been the industry standard dummy text ever sincer
                                                    condimentum purus.
                                                    In non ex at ligula fringilla lobortis et not the aliquet.</p>
                                            </div>
                                            <div className="comment-one__top-right">
                                                <a href="#"
                                                   className="thm-btn comment-one__reply"><span>Reply</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <div className="inner-block">
                                            <img src="/assets/images/blog/comment-1-2.jpg" alt="Awesome Image" />
                                        </div>
                                    </div>
                                    <div className="comment-one__content">
                                        <div className="comment-one__content-top">
                                            <div className="comment-one__top-left">
                                                <h3 className="comment-one__author">Vicente
                                                    Elmore</h3>
                                                <p className="comment-one__date">20 April, 2019 <span
                                                    className="comment-one__date-sep">.</span> 4:00 pm</p>
                                                <p className="comment-one__text">Lorem Ipsum is simply dummy text of the
                                                    rinting and
                                                    typesetting been the industry standard dummy text ever sincer
                                                    condimentum purus.
                                                    In non ex at ligula fringilla lobortis et not the aliquet.</p>
                                            </div>
                                            <div className="comment-one__top-right">
                                                <a href="#"
                                                   className="thm-btn comment-one__reply"><span>Reply</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <h2 className="blog-details__content-title">Leave a
                                Comment</h2>
                            <form action="#" className="reply-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Your name" className="reply-form__field" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Enter email" className="reply-form__field" />
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea placeholder="Write message" className="reply-form__field"></textarea>
                                        <button className="reply-form__btn thm-btn" type="submit">
                                            <span>Submit Comment</span></button>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                {/* <div className="sidebar__single sidebar__search">
                                    <form action="#" className="sidebar__search-form">
                                        <input type="text" name="search" placeholder="חפש באתר..." />
                                            <button type="submit"><i className="fa fa-search"></i></button>
                                    </form>
                                </div> */}
                                <div className="sidebar__single sidebar__post">
                                    <h3 className="sidebar__title">כתבות אחרונות</h3>
                                    <div className="sidebar__post-wrap">
                                        {props.morePosts.map ((e => {
                                            return(
                                        <div className="sidebar__post__single">
                                            <div className="sidebar__post-image">
                                                <div className="inner-block"><img src={e.coverImage} style={{height: "62px",objectFit: "cover",objectPosition: "center"}} alt="Article Picture" /></div>
                                            </div>
                                            <div className="sidebar__post-content">
                                                <h4 className="sidebar__post-title"><a href={`./${e.slug}`}>{e.excerpt}</a></h4>
                                            </div>
                                        </div>)
                                        }))}
                                    </div>
                                </div>
                                <div className="sidebar__single sidebar__category">
                                    <h3 className="sidebar__title">קטגוריות</h3>
                                    <ul className="sidebar__category-list">
                                        <li className="sidebar__category-list-item"><Link href="/blog"><a>תיקון מחשבים</a></Link></li>
                                        <li className="sidebar__category-list-item"><Link href="/blog"><a>תוכנות</a></Link></li>
                                        <li className="sidebar__category-list-item"><Link href="/blog"><a>טכנלוגיה</a></Link></li>
                                    </ul>
                                </div>
                                <div className="sidebar__single sidebar__tags">
                                    <h3 className="sidebar__title">תגיות</h3>
                                    <ul className="sidebar__tags-list">
                                    {props.tags.map ((e,i) => (i !== props.tags.length - 1 )
                                    ?
                                    <li className="sidebar__tags-list-item"><span> {e} , </span></li>
                                    : 
                                    <li className="sidebar__tags-list-item"><span>{e}</span></li>
                                    )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default NewsDetails;