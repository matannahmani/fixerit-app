import React from 'react';

const Features = () => {
        return (
            <section className="service-one" id="features">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">פתרונות מחשוב<br/> במיקור חוץ לעסקים באילת 
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-laptop"></i>
                                    <h3><a href="#">שירותי מחשוב - IT</a></h3>
                                    <p>צוות תמיכה ומערך טכנאים שיספק שירות אישי איכותי ובזמן אמת בבית העסק.</p>
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-presentation"></i>
                                    <h3><a href="#">אינטרנט ומדיה</a></h3>
                                    <p>בניית אתרים, קידום אתרים באמצעות ערן פיקסר פתרונות אינטרנט.</p>
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-target"></i>
                                    <h3><a href="#">שרתי ענן</a></h3>
                                    <p>הקמה והתקנה של שרתי ענן, הקמת מערך גיבוי יומי וניהול Database.</p>
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-visualization"></i>
                                    <h3><a href="#">חומרה ותוכנה</a></h3>
                                    <p>ייעוץ והתקנה של מערכות תוכנה חומרה ותקשורת בבית העסק.</p>
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Features;