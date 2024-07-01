
import Link from 'next/link';
// import Router from 'next/router';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import LazyLoad from 'react-lazy-load';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
class Sitemap_in extends Component {

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
        const res = await fetch(`https://cms.fasttrackvisa.com/api/${country_ext}/homelisting`);
        if (res.status === 200) {
			const sitemap = await res.json()
			const apistatus = res.status;
        return {
            sitemap, country_ext, country_elist,apistatus
        }
    }
    else {
        return {
            country_ext, country_elist,apistatus
        }
    }
    }


    componentDidMount() {
        // if (this.props.country_elist === -1) {
        //     Router.push('/en-in');
        // }
        this.setState({
			sitemap: this.props.sitemap
		});
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
                        <Nav ce_name={this.props.country_ext} lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'/sitemap'}> </Nav>
                    </header>

                    <div className="checkout_banner">
                        <Container>
                            <h1>Sitemap</h1>




                        </Container>
                    </div>


                    <Container>
                        <ol className="breadcrumb pl-0 bg-white">
                            <li className="breadcrumb-item"><Link href={'/' + this.props.country_ext}>
                                <a>
                                    Home
                                </a>
                            </Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Sitemap</li>
                        </ol>
                        <div className="desi-work-container sitemap-page">
 
              <ul>

              {this.props.sitemap.homelist.map((homelist, k) =>
										<li key={k}>
												<Link href={'/' + this.props.country_ext + '/' + homelist.urllink}>
													<a>
                                                    {homelist.title}
													</a>
												</Link>
											</li>
									 
									)}

               

              </ul>
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
export default Sitemap_in;