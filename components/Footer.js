import React,{ Component } from 'react';

export default class Blog extends Component {
    constructor(){
        super()
        this.state = {
          scrollBtn: false
        }
        this.handleScroll = this.handleScroll.bind(this)
        this.scrollTop = this.scrollTop.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {

      if (window.scrollY > 70) {
        this.setState({
            scrollBtn: true
        });
      } else if (window.scrollY < 70) {
        this.setState({
            scrollBtn: false
        });
      }

    }

    scrollTop = () => {
        window.scrollTo({behavior: 'smooth',top: 0});
    }

    render(){
        return (
            <div>
            <footer className="site-footer">
                <div className="site-footer__upper">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-3">
                                <div className="footer-widget footer-widget__about">
                                    <img src="/assets/images/resources/logo.png" width="119" alt="logo"
                                         className="footer-widget__logo" />
                                        <p className="footer-widget__contact"><a href="tel:0723281398">072-328-1398</a></p>

                                        <p className="footer-widget__contact"><a
                                            href="mailto:eranfixer@gmail.com">eranfixer@gmail.com</a></p>
                                            <p className="footer-widget__contact">שדרות התמרים 2<br/>אילת, ישראל</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-widget">
                                    <div className="site-footer__social">
                                        <a href="https://www.facebook.com/FixerEran" className="fa fa-facebook-square"></a>
                                        <a href="https://eranfixer.com" className="fa fa-chrome"></a>
                                        <a href="https://www.instagram.com/eranfixer/" className="fa fa-instagram"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <div className="inner-container text-center">
                            <p className="site-footer__copy">כל הזכויות שמורות ל <a target="_blank" href="https://www.matannahmani.com">MatanNahmani.com</a> &copy; </p>
                        </div>
                    </div>
                </div>
            </footer>

            <div onClick={this.scrollTop} className="scroll-to-target scroll-to-top" style={{display: this.state.scrollBtn ? 'block' : 'none'}}><i className="fa fa-angle-up"></i></div>
            </div>
        )
    }
}