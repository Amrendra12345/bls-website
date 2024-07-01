
import Link from 'next/link'
// import Router from 'next/router'
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image'
import LazyLoad from 'react-lazy-load';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Widget_v from '../components/Widget_v2';
class Blog_page extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            apistatus: '',
        };

    }

    static async getInitialProps(context) {

        const pageurl2 = context.query.page;
        // console.log((pageurl2 === undefined ? '' : '?page=' + pageurl2))
        const res = await fetch(`https://cms.fasttrackvisa.com/api/blogs${(pageurl2 === undefined ? '' : '?page=' + pageurl2)}`);
        //console.log(res.data)
        if (res.status === 200) {
            const Blog_page = await res.json()
            const apistatus = res.status;
            return {
                Blog_page, apistatus, pageurl2
            }

        }
        else {
            return {
                Blog_page
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
                <div className="Home-page">
                    <header className={'App-header' + ` ${this.state.activeClass}`}>
                        <Nav ce_name='' lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'/blogs'}> </Nav>
                    </header>
                    <div className="checkout_banner">
                        <Container>
                            <h1>Blog</h1>

                        </Container>
                    </div>

                    <div className='blog-sec pt-0'>
                        <Container>
                            <ol className="breadcrumb pl-0">
                                <li className="breadcrumb-item"><Link href={'/'}>
                                    <a>
                                        Home
                                    </a>
                                </Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Blog</li>
                            </ol>

                            <Row className='mt-5'>
                                {this.props.Blog_page.blog_arr.map((blog_arr) =>

                                    <Col sm={12} md={4} lg={4} key={blog_arr.id}>


                                        <div className="blog-box" title={blog_arr.title}>
                                            <Link href={'/blog/' + blog_arr.blogtitle}>
                                                <a>
                                                    <figure>
                                                        {console.log("blog",'https://ik.imagekit.io/vs4gypuhi/')}
                                                        {console.log("hello",blog_arr.image)}
                                                        <Image alt={blog_arr.title} src={'https://ik.imagekit.io/vs4gypuhi/' + blog_arr.image}
                                                            fill="true"
                                                            height={264} width={381}
                                                        /></figure>
                                                    <h4> {blog_arr.title}</h4>
                                                </a>
                                            </Link>
                                            <p>{blog_arr.blog_des}
                                            </p>
                                            <p className='mb-0 author'> <Link href={'/blog/' + blog_arr.blogtitle}>
                                                <a><Image alt="Kanan"
                                                    src={'/img/testi1.png'}
                                                    fill="true"
                                                    height={30} width={30}
                                                />  {blog_arr.by}</a>
                                            </Link>
                                                <span>{blog_arr.date}</span></p>

                                        </div>


                                    </Col>

                                )}


                            </Row>

                            <div className='text-center'>
                                {this.props.Blog_page.current_page - 1 === 0 ?

                                    <a className='btn btn-secondary mr-2'>Prev Page</a>
                                    :

                                    <Link href={'/blog?page=' + (this.props.Blog_page.current_page - 1)}><a className='btn btn-dark mr-2'>Prev Page</a></Link>
                                }

                                {this.props.Blog_page.last_page == this.props.Blog_page.current_page ?

                                    <a className='btn btn-secondary'>Next Page</a>
                                    :

                                    <Link href={'/blog?page=' + (this.props.Blog_page.current_page + 1)}><a className='btn btn-dark'>Next Page</a></Link>
                                }


                            </div>

                        </Container>

                        <Widget_v ce_name=''></Widget_v>

                    </div>

                    <LazyLoad offset={100}>
                        <Footer ce_name=''></Footer>

                    </LazyLoad>

                </div>


            </>

        );
    }
}
export default Blog_page;