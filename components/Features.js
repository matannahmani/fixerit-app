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
                                    <h3><a>שירותי מחשוב - IT</a></h3>
                                    <p>צוות תמיכה ומערך טכנאים שיספק שירות אישי איכותי ובזמן אמת בבית העסק.</p>
                                    <a className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-presentation"></i>
                                    <h3><a>אינטרנט ומדיה</a></h3>
                                    <p><a className="link-color" target="_blank" href="https://eranfixer.com/webdev">בניית אתרים</a>, <a className="link-color" target="_blank" href="https://eranfixer.com/webremarketing">קידום אתרים</a> באמצעות ערן פיקסר פתרונות אינטרנט.</p>
                                    <a className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-data1"></i>
                                    <h3><a>שרתי ענן</a></h3>
                                    <p>הקמה והתקנה של שרתי ענן, הקמת מערך גיבוי יומי וניהול Database.</p>
                                    <a className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-strategy"></i>
                                    <h3><a>חומרה ותוכנה</a></h3>
                                    <p>ייעוץ והתקנה של מערכות תוכנה חומרה ותקשורת בבית העסק.</p>
                                    <a className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Features;