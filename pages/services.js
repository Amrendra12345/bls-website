
import Link from 'next/link'; 
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import LazyLoad from 'react-lazy-load';
import Nav from '../pages/components/Nav';
import Footer from '../pages/components/Footer';
class Services extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            apistatus: '',
        };

    }

    // static async getInitialProps(context) {

    //     return {

    //     }

    // }

    componentDidMount() {

        window.addEventListener('scroll', () => {
            let activeClass = 'hsticky';
            if (window.scrollY === 0) {
                activeClass = 'top';
            }
            this.setState({ activeClass });
        });

    }



    render() {

        return (
            <>
                <div className="Home-page">
                    <header className={'App-header' + ` ${this.state.activeClass}`}>
                        <Nav ce_name="" lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'services'}> </Nav>
                    </header>

                    <div className="checkout_banner">
                        <Container>
                            <h1>Services</h1>




                        </Container>
                    </div>


                    <Container>
                        <ol className="breadcrumb pl-0 bg-white">
                            <li className="breadcrumb-item"><Link href={'/'}>
                                <a>
                                    Home
                                </a>
                            </Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Services</li>
                        </ol>
                        <div className="desi-work-container">

                            <h5 className='pb-5 mb-5 pt-5 mt-5'>Coming Soon</h5>

                        </div>



                    </Container>


                    <hr />
                    <LazyLoad offset={100}>
                        <Footer ce_name=""></Footer>

                    </LazyLoad>

                </div>


            </>

        );
    }
}
export default Services;