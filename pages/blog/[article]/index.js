
import Link from 'next/link'
// import Router from 'next/router'
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image'
import LazyLoad from 'react-lazy-load';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Widget_v from '../../components/Widget_v2';
import ReactHtmlParser from 'react-html-parser';

class Blog_detail extends Component {



    constructor(props, context) {
        super(props, context);
        this.state = {
            apistatus: '',
        };

    }

    static async getInitialProps(context) {
        const page_url = context.query.article
        const res = await fetch(`https://cms.fasttrackvisa.com/api/blog-detail/${page_url}`);
        //console.log(res.data)
        if (res.status === 200) {
            const Blog_detail = await res.json()
            const apistatus = res.status;
            return {
                Blog_detail, apistatus,page_url
            }

        }
        else {
            return {
                Blog_detail
            }
        }
    }


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
            
                <div className="blogd-page">
                    <header className={'App-header' + ` ${this.state.activeClass}`}>
                        <Nav ce_name='' lob_name="home_page" meta_title={this.props.Blog_detail.title} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'blog/'+this.props.page_url}> </Nav>
                    </header>
                    <div className="checkout_banner">
                        <Container>
                            <h1>{this.props.Blog_detail.title}</h1>

                        </Container>
                    </div>

                    <Container>

                    <ol className="breadcrumb pl-0">
                            <li className="breadcrumb-item"><Link href={'/'}>
                                <a>
                                    Home
                                </a>
                            </Link></li>
                            <li className="breadcrumb-item"><Link href={'/blog'}>
                                <a>
                                Blog
                                </a>
                            </Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{this.props.Blog_detail.title}</li>
                        </ol>

                         

                        <Row className='mt-5'>
                            <Col sm={1} md={1} lg={1}>
                               <div className='sharediv'> <p className='text-center'>Share</p>
                                <p className='text-center'><a href='#'><i className='fa fa-facebook'></i></a></p>
                                <p className='text-center'><a href='#'><i className='fa fa-twitter'></i></a></p>
                                <p className='text-center'><a href='#'><i className='fa fa-linkedin'></i></a></p>
                                <p className='text-center'><a href='#'><i className='fa fa-instagram'></i></a></p></div>
                            </Col>

                            <Col sm={11} md={9} lg={9}>
                                <div className="mb-5">
                            <Widget_v ce_name=''></Widget_v></div>


                                {ReactHtmlParser(this.props.Blog_detail.blog_des)}


                                <Widget_v ce_name=''></Widget_v>




                                <div className="blog-box mt-4">


                                    <p className='d-flex mb-0 author'>
                                        <a><Image alt="Kanan"
                                            src={'/img/testi1.png'}
                                            fill="true"
                                            height={30} width={30}
                                        />   {this.props.Blog_detail.by}</a>

                                        <span className='text-right'>PUBLISHED ON {this.props.Blog_detail.date}</span></p>

                                </div>



                                <h4 className='mt-5'>Comments</h4>
                            </Col>

                            <Col sm={12} md={2} lg={2}>
                                <Link href={'/'}>
                                    <a>
                                        <Image alt="Kanan"
                                            src={'/img/FastTrackVisa 001-160x600-px.gif'}
                                            fill="true"
                                            height={600} width={160}
                                        />   
                                    </a>

                                </Link>
                            </Col>

                        </Row>

                    </Container>

                    <hr />
                    <LazyLoad offset={100}>
                        <Footer ce_name=''></Footer>

                    </LazyLoad>

                </div>


            </>

        );
    }
}
export default Blog_detail;