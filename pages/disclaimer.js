
import Link from 'next/link';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import LazyLoad from 'react-lazy-load';
import Nav from '../pages/components/Nav';
import Footer from '../pages/components/Footer';
class Disclaimer extends Component {

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
                        <Nav ce_name="" lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'disclaimer'}> </Nav>
                    </header>

                    <div className="checkout_banner">
                        <Container>
                            <h1>Disclaimer</h1>
                        </Container>
                    </div>


                    <Container>
                        <ol className="breadcrumb pl-0 bg-white">
                            <li className="breadcrumb-item"><Link href={'/'}>
                                <a>
                                    Home
                                </a>
                            </Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Disclaimer</li>
                        </ol>
                        <div className="desi-work-container">



                            <p>Information shared and communicated over Internet are subject to several security perils. Hence, in case of any damages or losses whatsoever, special or castigatory, direct or indirect, incidental or consequential, alteration or deletion, confidential or exposure, security violation, system failure due to unauthorized use or access, we shall not be held responsible for any consequences.</p>
                            <p>We hereby completely disclaim all assurances with regard to the use of software and hardware to protect this website from any special, consequential or direct damages and support the website with all implicit warranties. Hence, as a third party service provider, we or our employees, officers, subsidiaries, affiliates, partners, agents and heir shall not be directly/indirectly liable in any which scenario for any errors, misuse, viruses, third party interceptions, inaccuracies, loss of data due to hacker attacks, disruptions in the communication or delivery of services. Furthermore, this is to be informed that for the sake of information, our website may be linked to other websites as well. Thus, in any way our website is not liable for the breach of any privacy or use of the content of those websites.</p>
                            <h3>Summary</h3>
                            <p>Upon accessing our website and using its services, you unreservedly agree and comply with all the privacy policies and relevant terms and conditions. If you resist complying with any of our privacy policies or privacy statement, please do not use this site.</p>

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
export default Disclaimer;