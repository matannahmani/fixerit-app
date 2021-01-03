import {useEffect,useState} from 'react';
import Link from "next/link";

const NavTwo = () => {
    const [sticky,setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        mobileMenu();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])


    const handleScroll = () => {

      if (window.scrollY > 70) {
          setSticky(true);
      } else if (window.scrollY < 70) {
          setSticky(false);
      }

    }

    const mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".menu-toggler");
        let mainNav = document.querySelector(".main-navigation");

        mainNavToggler.addEventListener("click", function () {
            mainNav.style.display = ( (mainNav.style.display != "block" ? "block" : "none" ) );
        });
    }
        return (
            <header className="site-header site-header__header-one site-header__header-two ">
                <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${sticky ? 'stricked-menu stricky-fixed' : ''}`}>
                    <div className="container clearfix">
                        <div className="logo-box clearfix">
                            <a className="navbar-brand" href="/">
                                <img src="/assets/images/resources/logo-light.png" className="main-logo" width="119"
                                     alt="Awesome Image" />
                            </a>
                            <button className="menu-toggler" data-target=".main-navigation">
                                <span className="fa fa-bars"></span>
                            </button>
                        </div>
                        <div className="main-navigation">
                            <ul className=" one-page-scroll-menu navigation-box">
                                <li className="scrollToLink">
                                    <Link href="/blog"><a>בלוג</a></Link>
                                </li>

                                <li className="scrollToLink">
                                    <a href="../#features">שירותים</a>
                                </li>
                                <li className="current scrollToLink">
                                    <a href="/">בית</a>
                                </li>
                            </ul>
                        </div>
                        <div className="right-side-box">
                            <a className="thm-btn header__cta-btn" href="#"><span>התחבר</span></a>
                        </div>
                    </div>
                </nav>
            </header>
        )
}
export default NavTwo;