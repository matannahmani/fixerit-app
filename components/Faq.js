import React, { useRef, useState } from 'react';

const Faq = () => {
    const faqt = useRef([]);

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
                        <h2 className="block-title__title">Want to Ask <span>Something</span> <br /> From Us?
                        </h2>
                    </div>
                    <div className="accrodion-grp faq-accrodion">
                        <div className="accrodion" ref={(e) => faqt.current[0] = e}>
                            <div className="accrodion-inner">
                                <div className="accrodion-title" onClick={() => handleClick(0)}>
                                    <h4>Pre and post launch mobile app marketing pitfalls to avoid</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>There are many variations of passages of available but majority have
                                            alteration in some by inject humour or random words. Lorem ipsum dolor sit
                                            amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque
                                            aliquam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion" ref={(e) => faqt.current[1] = e}>
                            <div className="accrodion-inner">
                                <div className="accrodion-title" onClick={() => handleClick(1)}>
                                    <h4>Pre and post launch mobile app marketing pitfalls to avoid</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>There are many variations of passages of available but majority have
                                            alteration in some by inject humour or random words. Lorem ipsum dolor sit
                                            amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque
                                            aliquam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion" ref={(e) => faqt.current[2] = e}>
                            <div className="accrodion-inner">
                                <div className="accrodion-title" onClick={() => handleClick(2)}>
                                    <h4>Pre and post launch mobile app marketing pitfalls to avoid</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>There are many variations of passages of available but majority have
                                            alteration in some by inject humour or random words. Lorem ipsum dolor sit
                                            amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque
                                            aliquam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion" ref={(e) => faqt.current[3] = e}>
                            <div className="accrodion-inner">
                                <div className="accrodion-title" onClick={() => handleClick(3)}>
                                    <h4>Pre and post launch mobile app marketing pitfalls to avoid</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>There are many variations of passages of available but majority have
                                            alteration in some by inject humour or random words. Lorem ipsum dolor sit
                                            amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque
                                            aliquam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Faq;