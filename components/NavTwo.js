import {useEffect,useState,useRef} from 'react';
import Link from "next/link";
import Router from 'next/router';

const NavTwo = () => {
    const [sticky,setSticky] = useState(false);
    const toggler = useRef();
    const menu = useRef();
    const [active,setActive] = useState('');
    useEffect(() => {
        setActive(location.pathname);
        window.addEventListener('scroll', handleScroll);
        mobileMenu();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    Router.onRouteChangeComplete = (url) => {
        setActive(url);
    };

    const handleScroll = () => {

      if (window.scrollY > 70) {
          setSticky(true);
      } else if (window.scrollY < 70) {
          setSticky(false);
      }

    }

    const mobileMenu = () => {
        //Mobile Menu Toggle
        toggler.current.addEventListener('click', () => {
            menu.current.style.display = ( (menu.current.style.display != "block" ? "block" : "none" ) );

        });
    }
        return (
            <header className="site-header site-header__header-one site-header__header-two ">
                <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${sticky ? 'stricked-menu stricky-fixed' : ''}`}>
                    <div className="container clearfix">
                        <div className="logo-box clearfix">
                            <Link href="/">
                            <a className="navbar-brand">
                                <img src="/assets/images/resources/logo.png" className="main-logo" width="119"
                                     alt="Awesome Image" />
                            </a>
                            </Link>
                            <button className="menu-toggler" ref={toggler} data-target=".main-navigation">
                                <span className="fa fa-bars"></span>
                            </button>
                        </div>
                        <div ref={menu} className="main-navigation">
                            <ul className="one-page-scroll-menu navigation-box">
                                <li className={active === '/blog' ? 'scrollToLink current' : 'scrollToLink'}>
                                    <Link href="/blog"><a>בלוג</a></Link>
                                </li>
                                {active === '/' ?
                                <>
                                <li className="scrollToLink">
                                    <a onClick={ () => document.querySelector('#features').scrollIntoView({behavior: 'smooth'})} >שירותים</a>
                                </li>
                                </>
                                :
                                null    
                                }
                                <li  className={active === '/' ? 'scrollToLink current' : 'scrollToLink'}>
                                    <Link href="/"><a>בית</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
}
export default NavTwo;