
import Link from 'next/link';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import LazyLoad from 'react-lazy-load';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
class Aboutus_in extends Component {

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
                        <Nav ce_name={this.props.country_ext} lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'/about-us'}> </Nav>
                    </header>

                    <div className="checkout_banner">
                        <Container>
                            <h1>About Us</h1>
                        </Container>
                    </div>


                    <Container>
                        <ol className="breadcrumb pl-0 bg-white">
                            <li className="breadcrumb-item"><Link href={'/' + this.props.country_ext}>
                                <a>
                                    Home
                                </a>
                            </Link></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                        <div className="desi-work-container">
                         
<h3>Who we are</h3>
<p>Launched by an Asia-based Fortune 500 company, FastTrackVisa.com (FTV) seeks to streamline the visa application process for overseas travellers, wherever in the world they hail from and wherever they're travelling to.</p>
<p>However, this doesn't mean we prioritise speed of delivery over everything else. At FTV, we're committed to ensuring our customers receive the premium service they deserve. We can do this because we blend state-of-the-art digital resources with a customer service that's second to none. Everything we do is underpinned by our three core values:</p>
<ul>
<li>only offering customers the best available visa options</li>
<li>a dedication to transparent pricing</li>
<li>delivering an excellent visa application experience.</li>
</ul> 


<div className='mt-4'>
<p>Moreover, our service is underscored by comprehensive and stringent data security protocols and a steadfast commitment to performance excellence across all our operations. At the heart of our operations, we've installed:</p>
<ul>
<li>a rigorous standardisation of processes</li>
<li>robustness in our technology-backed delivery platforms</li>
<li>proficiency and preparedness in our resources</li>
<li>an open mind to innovation, when it's beneficial.</li>
</ul>
<p>As such, at FTV, we're confident we can provide you with the timely, affordable, transparent and comprehensive visa application service you need – and deserve.</p>
</div>

<div className="mt-4">
<h2>A visa provider <b>fit for today</b></h2>
<p>In today's world, every moment is precious. For those who need a visa application processed as fast as can be, there's FastTrackVisa.com (FTV). We'll ensure you have all the information and guidance you need to apply online for your visa.</p>
<p>Then, after you've followed our affordable application process, we'll make sure your visa's processed and emailed to you as quickly as possible. Time is of the essence, that's why FTV is here for you.</p>
 
</div>



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
export default Aboutus_in;