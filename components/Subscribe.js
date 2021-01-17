import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
const CustomForm = ({ status, message, onValidated }) => {
    let email;
    const submit = () => {
      email && email.value.indexOf("@") > -1 && onValidated({ EMAIL: email.value});
      email.value = "";
    };
  
    return (
      <>
        <div className="mailchimp-one__mc-form mc-form">
        <input ref={node => (email = node)} type="tel" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="mc-tel" name="phone" className="formInput" placeholder="טלפון" />
        <input ref={node => (email = node)} type="tel" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="mc-tel" name="phone" className="formInput" placeholder="טלפון" />
            <button onClick={submit} type="submit"><i className="dimon-icon-right-arrow"></i></button>
        </div>
        <div className="mailchimp-alerts">
          {status === "sending" && (
            <div className="mailchimp-submitting">sending...</div>
          )}
          {status === "error" && (
            <div
              className="mailchimp-error"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div
              className="mailchimp-success"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
        </div>
      </>
    );
  };
    const SubscribeEmail = ({ mailchimpUrl }) => {
        return (
          <div>
            <MailchimpSubscribe
              url={mailchimpUrl}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
              )}
            />
          </div>
        );
      };
const Subscribe = () => {
        return (
<>
</>
            // <section className="mailchimp-one">                
            //     <div className="container">
            //         <div className="block-title text-center">
            //             <h2 className="block-title__title">צרו קשר</h2>
            //         </div>                    
            //         <div className="mc-form__response"></div>
            //     </div>
            // </section>
        )
}
export default Subscribe;
