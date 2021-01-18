import React from 'react';

const CallToActionTwo = () => {
        return (
            <section className="cta-two">
                <div className="container">
                    <img src="/assets/images/mocs/cta-moc-2-1.png" className="cta-two__moc" alt="Awesome Image" />
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="cta-two__content">
                                <i className="cta-two__icon dimon-icon-data"></i>
                                <div className="block-title text-left">
                                    <h2 className="block-title__title">המשרד עובר לענן ?</h2>
                                </div>
                                <div className="cta-two__text">
                                    <p>חברתנו תעזור לעסק שלכם לעבור לעבודה מהבית, בעידן המודרני ובמיוחד לאחר מגפת הקורנה עברנו לעבוד מהבית רובנו, התאמת התשתיות של המנהלים והעובדים היא קריטית להצלחת הארגון וייעול העבודה מהבית.</p>
                                    <p><b>צוות מערכות מחשוב זמין 24/7</b><br/> למענה מהיר ופתרון בעיות מרוחק כולל הגעה לבית העסק בכל שעה <span className="cta-read">כפוף לדמי ניהול חודשיים.</span></p>
                                </div>
                                <button onClick={() => document.querySelector('#contactus').scrollIntoView({behavior: 'smooth'})} className="thm-btn"><span>צור קשר</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default CallToActionTwo;