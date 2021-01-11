import React, { useRef } from 'react';

const Faq = () => {
    const faqt = useRef([]);
    const faqs = [
    {
        q: 'יש לי עסק קטן זה מתאים לי ?',
        a: 'השירות מתאים לעסקים גדולים וקטנים כאחד אפילו למשרדים עצמאיים וכאלו שעובדים מהבית השירות יספק לכם שקט נפשי לגבי המידע שלכם, המערכות שלכם ועוד כמו כן לקבוצה שירותים משלימים כמו בניית דפי נחיתה, קידום אתרים, הטמעת מערכות סליקה בעסק ועוד'
    },    
    {
        q: 'מהם היתרונות העיקריים של שירותי מחשוב במיקור חוץ לעסקים ?',
        a: "שקט נפשי - כל מערך המחשוב בעסק עובד ללא הפרעות - עבודה מול גורם אחד. גמישות מחשבתית - כצוות אנו פותרים תקלות ביחד בצורה אפקטיבית ויעילה . יציבות מערכות האינטרנט והתקשורת בעסק חיסכון במקום אין צורך בחדר שרתים וכו' - הכל עובר לענן"
    },
    {
        q: 'פתרונות גיבוי ושירותי ענן​ האם זה בטוח ?',
        a: 'אנו משתמשים בחברת גוגל העולמית לגיבוי הענן לכן אבטחת העננים היא של חברת גוגל, כמו כן אנו ממליצים לעשות גיבוי מקומי היתרון בענן מנוהל של חברת גוגל הוא מהירות הגישה,  העברת קבצים מהירה מאוד דרך API ועוד'
    }]
    const handleClick = (i) => {
        const node = faqt.current[i];
        if (node.classList.contains('active'))
        {
            node.classList.remove('active')
            node.children[0].children[1].classList.add('faq-hide');
        } else
        {
             node.classList.add('active');
             node.children[0].children[1].classList.remove('faq-hide');
            }
    }
        return (
            <section className="faq-one">
                <img src="/assets/images/background/faq-one-bg.png" alt="Awesome Image" className="faq-one__bg" />
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">שאלות ותשובות
                        </h2>
                    </div>
                    <div className="accrodion-grp faq-accrodion">
                        {faqs.map((i,index) => {
                            return (
                                <div className="accrodion" ref={(e) => faqt.current[index] = e}>
                                <div className="accrodion-inner">
                                    <div className="accrodion-title" onClick={() => handleClick(index)}>
                                        <h4>{i.q}</h4>
                                    </div>
                                    <div className="accrodion-content faq-hide">
                                        <div className="inner">
                                            <p>{i.a}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
}
export default Faq;