import React from 'react';

const BannerTwo = () => {
        return (
            <section className="banner-two" id="banner">
                <span className="banner-two__shape-1"></span>
                <span className="banner-two__shape-2"></span>
                <span className="banner-two__shape-3"></span>
                <span className="banner-two__shape-4"></span>
                <div className="banner-two__moc">
                    <img src="/assets/images/mocs/banner-moc-2-1.jpeg" className="opacity-tablet" alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-two__content">
                                <h3 className="banner-two__title">Fix IT<br/>
                                    <span>פתרונות <br/>מחשוב מנוהלים</span></h3>
                                <p className="banner-two__text"> מחברים את העסק שלכם לטכנולוגיות מתקדמות, פיקסר מספקת פתרונות מחשוב ו it לבעלי עסקים בעיר אילת 
                                </p>
                                <button onClick={() => document.querySelector('#contactus').scrollIntoView({behavior: 'smooth'})} className="banner-two__btn thm-btn "><span>צור קשר</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default BannerTwo;