
import Link from 'next/link';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import LazyLoad from 'react-lazy-load';
import Nav from '../pages/components/Nav';
import Footer from '../pages/components/Footer';
class Contactus extends Component {

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
                        <Nav ce_name="" lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'contact-us'}> </Nav>
                    </header>

                    <div className="checkout_banner">
                        <Container>
                            <h1>Contact Us</h1>
                        </Container>
                    </div>


                    <Container>
                        <ol className="breadcrumb pl-0 bg-white">
                            <li className="breadcrumb-item"><Link href={'/'}>
                                <a>
                                    Home
                                </a>
                            </Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                        </ol>
                        <div className="desi-work-container">
                        <h3>Let's keep in touch.</h3>

<p>We provide many tools you can use to guide yourself through the entire visa process. To save your time, please use our tools before contacting us:</p>
<ul>
<li>Start New ApplicationStart new application</li>
<li>Check Order StatusCheck application status</li>
<li>Login to My AccountLogin to my accountChat with our agent.</li>
</ul>
<p>
The best way to contact us is to use the chat feature in the lower right hand corner (we offer 24/7 service). This is the preferred method to get quick answers to all your questions.</p>
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
export default Contactus;