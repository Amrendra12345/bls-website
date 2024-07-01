
import Link from 'next/link';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import LazyLoad from 'react-lazy-load';
import Nav from '../pages/components/Nav';
import Footer from '../pages/components/Footer';
class PrivacyPolicy extends Component {

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
                        <Nav ce_name="" lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'privacy-policy'}> </Nav>
                    </header>

                    <div className="checkout_banner">
                        <Container>
                            <h1>Privacy policy</h1>
                        </Container>
                    </div>


                    <Container>
                        <ol className="breadcrumb pl-0 bg-white">
                            <li className="breadcrumb-item"><Link href={'/'}>
                                <a>
                                    Home
                                </a>
                            </Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Privacy policy</li>
                        </ol>
                        <div className="desi-work-container">


                            <p>At <strong>Fasttrackvisa.com</strong>, we adhere to a stringent privacy policy to keep all the information safe and protected. We keep a regular tab on how the shared information is used and processed and in what context. In case we bring any changes to our privacy policies, we keep our visitors updated about the same through this section. By accessing the pages of <strong>Fasttrackvisa.com</strong>, you agree to all our Privacy Proclamations and relevant Terms and Conditions. <strong>Fasttrackvisa.com</strong> reserves all right to modify/alter the same at any point of time.</p>
                            <h3>Collected information</h3>
                            <ul>
                                <li>We keep our customers or applicants always transparent about our work procedures. All the information collected from our customers/applicants is used merely for providing them finest of our services. No information is exposed or shared with any of the third parties unless it is permitted by the applicant or customer. Hence, all information shared with us is absolutely confidential and protected from any unauthorized access or use.</li>
                            </ul>
                            <h3>Cookies</h3>
                            <p>Basically, cookie is a technical terminology, which works as a communication bridge between web server and a web browser. A cookie resides in your computer in the form of a small file for better comprehension of your web access. There is a traffic log cookie that keeps us updating on your every move on our webpage, which further helps us in analysing your quest; and the extent to which we need to evolve our performances for better customer experience. A user is always free to accept or reject any cookies while browsing. In case there is a default setting in your browser, you may further allow or reject the cookies.</p>
                            <h3>Disclaimer</h3>
                            <p>Information shared and communicated over Internet are subject to several security perils. Hence, in case of any damages or losses whatsoever, special or castigatory, direct or indirect, incidental or consequential, alteration or deletion, confidential or exposure, security violation, system failure due to unauthorized use or access, <strong>Fasttrackvisa.com</strong> shall not be held responsible for any consequences. <strong>Fasttrackvisa.com</strong> hereby completely disclaims all assurances with regard to the use of software and hardware to protect this website from any special, consequential or direct damages and support the website with all implicit warranties. Hence, <strong>Fasttrackvisa.com</strong> or its employees, officers, subsidiaries, affiliates, partners, third-party agents and heir shall not be directly/indirectly liable in any which scenario for any errors, misuse, viruses, third party interceptions, inaccuracies, loss of data due to hacker attacks, disruptions in the communication or delivery of services. Furthermore, it is to be informed that for the sake of information, <strong>Fasttrackvisa.com</strong> is linked to other websites as well. Thus, in any way <strong>Fasttrackvisa.com</strong> is not liable for the breach of any privacy or use of the content of those websites.</p>
                            <p>In addition, <strong>Fasttrackvisa.com</strong> neither represents any Government Department, nor does it linked with any Embassy abroad.</p>
                            <h3>Summary</h3>
                            <p>Upon accessing the website of <strong>Fasttrackvisa.com</strong> and using its services, you unreservedly agree and comply with all the privacy policies and relevant terms and conditions. If you resist complying with any of our privacy policies or privacy statement, please do not use this site.</p>

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
export default PrivacyPolicy;