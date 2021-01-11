import React from 'react';

const Subscribe = () => {
        return (
            <section className="mailchimp-one">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">צרו קשר</h2>
                    </div>
                    <form action="#" className="mailchimp-one__mc-form mc-form"
                          data-url="#">
                        <input type="tel" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="mc-tel" name="phone" className="formInput" placeholder="טלפון" />
                            <button type="submit"><i className="dimon-icon-right-arrow"></i></button>
                    </form>
                    <div className="mc-form__response"></div>
                </div>
            </section>
        )
}
export default Subscribe;