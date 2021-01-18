import React,{useEffect, useRef,useState} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import {TextField,Snackbar} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
const CustomForm = ({ status, message, onValidated }) => {
    const email = useRef()
    const phone = useRef()
    const [open, setOpen] = useState(false);
    const [msg,setMsg] = useState({msg: '',type: 'error'});
    const submit = () => {
      console.log(onValidated({ PHONE: phone.current.value, EMAIL: email.current.value}))
      if (email.current.length > 4 && email.current.value.indexOf("@") > -1 && phone.current.length > 7
          && onValidated({ PHONE: phone.current.value, EMAIL: email.current.value})){
            email.current.value = "";
            phone.current.value = "";
        }
        else{
          setMsg({msg: 'שגיאה אנא בדוק את השדות',type: 'error'})
        }
        setOpen(true);
    };

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

    useEffect(() => {
      switch (status) {
        case 'sending':
          setMsg({msg: 'שולח',type: 'warning'})
          break;
        case 'error':
          setMsg({msg: 'שגיאה אנא בדוק את השדות',type: 'error'})
          break;
        case 'success':
          setMsg({msg: 'אנו ניצור עמך קשר בקרוב!',type: 'success'})
          break;
      }
    }, [status])
  
    return (
      <>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        classes={{anchorOriginBottomCenter: msg.type}}
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        message={msg.msg}
        action={
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
        }
      />
        <div className="mailchimp-one__mc-form mc-form">
        <TextField inputRef={email} type="email" id="email" label="איימל" className="sub-input" />
        <TextField inputRef={phone} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="phone" label="טלפון" className="sub-input" />
            <button onClick={submit} type="submit"><i className="dimon-icon-right-arrow"></i></button>
        </div>
      </>
    );
  };
    const SubscribeEmail = ({ mailchimpUrl }) => {
        return (
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
        );
      };

const Subscribe = () => {
        return (
            <section className="mailchimp-one" id="contactus">                
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">צרו קשר</h2>
                    </div>                    
                    <SubscribeEmail mailchimpUrl={process.env.NEXT_PUBLIC_MAIL_CHIMP}/>
                </div>
            </section>
        )
}
export default Subscribe;
