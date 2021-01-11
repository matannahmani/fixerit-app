import React,{ useState } from 'react';
import Swiper from 'react-id-swiper';

const Testimonial = () => {

    const [swiper, setSwiper] = useState(null);
    const person = [
        {
            name: 'רוי טליאס',
            feedback: 'אני עובד עם ערן כבר תקופה, בחור עם נתינה גדולה, יחס אדיב ושירות מדהים!'
        },
        {
            name: 'רותם פינכס',
            feedback: 'ערן הוא אחד האנשים המקצועיים שהכרתי בתחום. יודע את העבודה ולתת שירות אישי לכל לקוח ולקוח. ממליצה בחום!'
        },
        {
            name: 'שמעון כוהן',
            feedback: 'השירות של ערן והצוות מקצועי ואדיב! הקימו ובנו את האתר של העסק שלי מ-א׳ ועד ת׳, ממליץ מאוד.'
        },
        {
            name: 'משה בר',
            feedback: 'הפיקסר מקצועי, נותן תוצאה איכותית ועם יחסי אנוש מצוינים.'
        }
]
    const goNext = () => {
        if (swiper !== null) {
          swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
          swiper.slidePrev();
        }
    };

    return (
        <section className="testimonials-one">
            <div className="container">
                <div className="block-title text-center">
                    <h2 className="block-title__title">מה הלקוחות שלנו מספרים אלינו.
                    </h2>
                </div>
                <div className="testimonials-one__carousel-outer">
                    <div className="testimonials-one__carousel">
                        <Swiper getSwiper={setSwiper}>
                            {person.map((i => {
                                return (
                                    <div className="item">
                                    <div className="testimonials-one__single">
                                        <div className="testimonials-one__inner">
                                            <p>"{i.feedback}"</p>
                                            <h3>{i.name}</h3>
                                            <span>לקוח שלנו</span>
                                            <img src="/assets/images/resources/person-g.png" className="testiomonial-person" alt="Awesome Image" />
                                        </div>
                                    </div>
                                </div>
                                )
                            }))}
                        </Swiper>
                    </div>
                    <div className="testimonials-one__carousel__shape-one"></div>
                    <div className="testimonials-one__carousel__shape-two"></div>
                    <div className="testimonials-one__nav">
                        <div onClick={goPrev} className="testimonials-one__nav-left"><i className="dimon-icon-left-arrow"></i></div>
                        <div onClick={goNext} className="testimonials-one__nav-right"><i
                            className="dimon-icon-right-arrow"></i></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Testimonial;