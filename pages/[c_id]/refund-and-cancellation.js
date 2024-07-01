
import Link from 'next/link';
// import Router from 'next/router';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import LazyLoad from 'react-lazy-load';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
class RefundCancellation_in extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            apistatus: '',
        };

    }

    static async getInitialProps(context) {
        const country_ext = context.query.c_id
        var country_list = ['en-in']
        const country_elist = country_list.findIndex(o => o === country_ext)
        //console.log(country_list.findIndex(o => o === country_ext))
        return {
            country_ext, country_elist
        }

    }


    componentDidMount() {
        // if (this.props.country_elist === -1) {
        //     Router.push('/en-in');
        // }
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
                        <Nav ce_name={this.props.country_ext} lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'/refund-and-cancellation'}> </Nav>
                    </header>

                    <div className="checkout_banner">
                        <Container>
                            <h1>Refund & cancellation</h1>




                        </Container>
                    </div>


                    <Container>
                        <ol className="breadcrumb pl-0 bg-white">
                            <li className="breadcrumb-item"><Link href={'/' + this.props.country_ext}>
                                <a>
                                    Home
                                </a>
                            </Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Refund & cancellation</li>
                        </ol>
                        <div className="desi-work-container">
 
                            <p>If you wishes to cancel the visa application then the refund will be entitled in following cases-<br />
                                As soon as you make the payment at www.fasttrackvisa.com, we will commence the processing of an order immediately. (NOTE: Refund can be possible in the case wherein your application is not being processed or not being submitted to the immigration for further approval.)</p>
                            <p>Any cancellation related to insurance shall not be entertained after the order is being processed/policy document being published basis on your consent</p>
                            <p>No refund shall be processed once your application is approved by the Visa issuing authority (i.e. Visa is Posted), then you must comply in accordance with the policy.</p>
                            <p>After we process your application within 24 hours, but it is not yet being accepted by the immigration department or is not yet being paid at the immigration and you wishes to withdraw the application then there shall be a standard deduction charge of $69.00. But in case you wishes to cancel the visa application after 24 hours, then we will refund upto the 50% visa fees only (after the deduction of service fees and bank charges).</p>
                            <p>In case you wishes to cancel the visa application after 24 hours but we have forwarded it to the Embassy, then no fees will be refunded in any circumstances.</p>
                            <p>Any visa which is being approved, and an applicant wishes to cancel the application then there is a cancellation fee that has to be paid to the immigration department and for getting it cancelled we will charge a service fee of $100.00.</p>
                            <p>Refund shall not be processed in case of rejection, where in you have already applied in government system from some other service provider/travel agency alternatively or in advance.</p>
                            <p>Due to Covid-19 pandemic across the globe,there have been instances wherein immigration doesn't approve e-visa or cancel the approved e-visa for a particular national without prior notification. Therefore, no refund shall be entertained by FastTrackVisa on any such cases with effect from March 1, 2020 till the further notice.<br />
                                In any case, services fees (26 USD), express service fees (200 USD) and the transaction charges are non-refundable.</p>
                            <p>In case of cancellation/Rejection of visa application by the embassy, no fees will be refunded.</p>
                            <p>If the embassy needs any additional documents and you have not provided, due to which the visa application got rejected than also fees will not be refunded.</p>
                            <p>You may cancel the visa application by contacting us on our service line or you can also reach us through mail on info@fasttrackvisa.com / WhatsApp number&nbsp; +919643106530. Under any circumstances, FasttrackVisa.com will not refund any payment that has been done by credit card and has crossed 40 days of initiating the payment</p>
                            <p><strong>Processing Time</strong><br />
                                Processing time shown in visa applications under FastTrackVisa are approximate and based on Embassy/Consulates processing times and under normal circumstances the processing time should be calculated after submitting the documents to Embassy/Consulate. The Embassy/Consulate may delay the processing time due to the request for any additional documents, local holidays or festivals that occurred during the duration of the processing of visas without any further explanation. FastTrackVisa shall not be responsible for any denial, cancellation or financial losses due to delay or reject in processing from the Embassy. No service fees, embassy fees, shipping charges or any other portion of visa fees will be refunded due to delay or denial of service.</p>
                            <p><strong>Service Description</strong><br />
                                FastTrackVisa tries to provide accurate data on the website. However, any changes in fees, documents or processing times done by Consulate than FastTrackVisa cannot guarantees that the accurate data or information will be available always on the website. In any case you will not hold FastTrackVisa responsible for not providing accurate data or information on the website.</p>
                            <p><strong>Service</strong><br />
                                Any information provided on this website are subject to change without giving any prior information. FastTrackVisa can request you to submit any additional documents that have not been provided in any application form if the Embassy/Consulates requests them to provide. FastTrackVisa shall not be responsible for the denial of any visa from Consulates and cannot provide you the reason for the denial of visa. Processing time of visa are approximately based on normal circumstances, it may be delay due to any festivals or local holidays came during visa processing period. FastTrackVisa shall not be responsible for any delay of visa processing by the Embassy/Consulate.</p>
                            <p><strong>Communications</strong><br />
                                By using this website, you give FastTrackVisa full permission to contact you via email, phone or any other electronic or non-electronic modes of communication.</p>
                            <p><strong>Security</strong><br />
                                By submitting the forms, you agrees that the information provided by you is true and accurate. You also agrees that any changes that has been done in your profile are by using User ID and password, whether done by you or not FastTrackVisa, is not responsible for the same . By using this site, you agrees that you are responsible for maintaining the confidentiality of your User ID and password and if anyone tries to access your account without your permission then you agrees to notify us immediately.</p>
                            <p><strong>Intellectual Property</strong><br />
                                This site including all information, source codes, images, data, software, database, functionality, graphics, and website design are solely owned and controlled by us. All the source codes, Html designs, website designs, images, logo, data, etc cannot be copied, reproduced, sketched, painted, uploaded, modified, republished, transmitted, translated without our prior permission. The content and all the trademarks provided on this site are "AS-IS" information and are for personal use only.<br />
                                <strong>Prohibited Activities</strong><br />
                                You may not access or use this site for any other purpose other than that for which we make this site available. As a user, you agrees not to-</p>
                            <ol>
                                <li>
                                    <ol>
                                        <li>1.Use this website to advertise for your own use or to offer the services that are available on this website.</li>
                                        <li>2.Engaged in unauthorized framing or linking to the site.</li>
                                        <li>3.The trick, defraud or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords and account credentials.</li>
                                        <li>4.Delete the copyright or any other exclusive right notice from other contents.</li>
                                    </ol>
                                </li>
                            </ol>
                            <ol>
                                <li>5.Use the website in a manner inconsistent with any applicable laws or regulations.</li>
                            </ol>
                            <p><strong>Links</strong><br />
                                FastTrackVisa contains links to third party websites. These links are only provided for informational resources and FastTrackVisa has no control over the website of the third party. We are not responsible for the content or any accuracy of data of third-party websites linked to us.</p>
                            <p><strong>Disclaimer</strong><br />
                                Any access or use by you on this website is at your own risk. Any damages or inability to use our services or products is on your responsibility and FastTrackVisa is not responsible for any of your actions. All the downloading of visa and uploading the files will be done at your own risk and you agrees that FastTrackVisa and employees working in that company shall not be liable to pay any damages done by your inability to use this website.</p>
                            <p>This website contains data "AS IS" to all the users. FastTrackVisa does not make any guarantee or representations of any kind concerning information, requirements, restrictions, quality, content, theme, style, provided directly or through any third party website to this website.</p>
                            <p><strong>Restrictions On Use</strong><br />
                                This website is intended to use by adult individuals over 18 years of age. You may not use this site for any reason other than its intended purpose. You also agrees that if you submit any information or content than you agrees not to post, transmit any virus or other harmful components that violates the copyright or intellectual property of any person or entity.</p>
                        </div>
                    </Container>


                    <hr />
                    <LazyLoad offset={100}>
                        <Footer ce_name={this.props.country_ext}></Footer>

                    </LazyLoad>

                </div>


            </>

        );
    }
}
export default RefundCancellation_in;