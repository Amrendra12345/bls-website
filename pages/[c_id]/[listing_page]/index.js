
import Link from 'next/link'
import Router from 'next/router'
import Image from 'next/image'

import ReactPlayer from 'react-player'
import React, { Component, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LazyLoad from 'react-lazy-load';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Searchband from '../../components/search_band';
import Simple_step from '../../components/Simple_step';
import Abrand from '../../components/Abrand';
import Ready_get from '../../components/Ready_get';
import Fbottom from '../../components/Fbottom';
import Spinner from 'react-bootstrap/Spinner';
import Slider from "react-slick";
import Login from '../../login/login';

class Visa_indetail extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      apistatus: '',
      islogined: false,
      show: false,
      selectedCardPath: '',
      isLoader: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.close2 = this.close2.bind(this);


  }
  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
    this.setState({ showimagesTextModal: false });
  }
  close2() {
    this.setState({ showErrorModal: false });
    this.setState({ showSuccessModal: false });
  }


  static async getInitialProps(context) {
    console.log(context.query.listing_page)
    const page_url = context.query.listing_page
    const country_ext = context.query.c_id;
    var country_list = ['en-in',]
    const country_elist = country_list.findIndex(o => o !== country_ext)
    const res1 = await fetch(`https://cms.fasttrackvisa.com/api/${country_ext}/international-visa/${page_url}`)
    if (res1.status === 200) {
      const visalisting = await res1.json()
      const apistatus = res1.status;
      return {
        country_ext, visalisting, country_elist, apistatus, page_url

      }
    }
    else {
      return {
        country_ext, country_elist, page_url
      }
    }



  }

  componentDidMount() {
    // if (this.props.country_elist === -1) {
    //   Router.push('/en-in');
    // }
    this.setState({
      visalisting: this.props.visalisting
    });
    window.addEventListener('scroll', () => {
      let activeClass = 'hsticky';
      let activeClass2 = 'fsticky';
      if (window.scrollY === 0) {
        activeClass = '';
      }
      if (window.scrollY <= 850) {
        activeClass2 = '';
      }
      this.setState({ activeClass, activeClass2 });
    });

    var loginDetails = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
    if (localStorage.getItem('loginDetails') !== null) {
      loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
      if (loginDetails.email !== '' && loginDetails.email !== null && loginDetails.email !== undefined) {
        this.setState({ islogined: true });
      } else if (loginDetails.mobile_number !== '' && loginDetails.mobile_number !== null && loginDetails.mobile_number !== undefined) {
        this.setState({ islogined: true });
      } else {
        this.setState({ islogined: false });
      }

    } else {
      localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
    }

  }

  handleCallback = (loginStatue) => {
    //  console.log(loginStatue, 'index');
    this.setState({ islogined: loginStatue });
    if (loginStatue) {

      this.setState({ show: false, isLoader: true });
      Router.push(this.state.selectedCardPath);
    }
  }

  signIn = () => {
    this.setState({ show: true });
  }

  render() {
    var Testimonials_sl = {
      dots: false,
      infinite: false,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      responsive: [

        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }

      ]
    }





    return (

      <>

        {this.props.apistatus === 200 ?
          <>

            <header className={'App-header' + ` ${this.state.activeClass}`}>

            <Nav ce_name={this.props.country_ext} lob_name="home_page" meta_title={this.props.visalisting.metatag} meta_desc={this.props.visalisting.meta_desc} meta_keyword="" meta_img="/img/logo.png" meta_url={'/'+ this.props.page_url} handleCallback={this.handleCallback} > </Nav>
            
            </header>

            <div className="banner-area">
              <div id="bloader">
                <Image blur="true" alt="loader"
                  src={'/img/loader.gif'}
                  fill="true"
                  height={112} width={200}
                />

              </div>
              <div className="video_banner_sec video_banner_sec2">

                {this.props.visalisting.vimeo_link != '' ?

                  <ReactPlayer
                    className='react-player'
                    playing
                    muted
                    loop
                    config={{
                      file: {
                        attributes: {
                          autoPlay: true,
                          muted: true,
                          loop: true
                        }
                      }
                    }}

                    width={'100%'} url={'https://ik.imagekit.io/vs4gypuhi/' + this.props.visalisting.vimeo_link + '.mp4'} />
                  :
                  <ReactPlayer
                    className='react-player'
                    playing
                    muted
                    loop
                    config={{
                      file: {
                        attributes: {
                          autoPlay: true,
                          muted: true,
                          loop: true
                        }
                      }
                    }}

                    width={'100%'} url='https://player.vimeo.com/video/777995194' />
                }



              </div>



              {/* <div className="banner_text formloader" id="banner_text">



            <a href="#plans" className="plan_btn"><h2>Get an eSIM Card worth $ 9<sup>99</sup> free with your [countryname] eVisa</h2>
              <p>Enjoy free Whatsapp & Incoming Calls</p>
              <span className="btn1">Explore <i className="fa fa-caret-down ml-1"></i></span>
            </a>
          </div> */}

              {/* <ol className='breadcrumb breadcrumb2'><li>Home</li><li>Home</li></ol> */}



              <h1 className='pagevtitle'>Your {this.props.page_url.replace(/-/g, ' ')} is just a few clicks away...</h1>
            </div>

            
            {this.props.visalisting?.allproduct.map((allproduct, n) =>
              <>
                {n === 0 ?
                  <div className={'ffbootom' + ` ${this.state.activeClass2}`}>


                    <Fbottom countryname={allproduct.country}></Fbottom>
                  </div>
                  :
                  ''
                }

              </>

            )}





            <Container>
            <ol className="breadcrumb pl-0 bg-white">
											<li className="breadcrumb-item"><Link href={'/' + this.props.country_ext}>
												<a>
													Home
												</a>
											</Link></li>
											<li className="breadcrumb-item active" aria-current="page"> {this.props.page_url.replace(/-/g, ' ')}</li>
										</ol>

              <div className="desi-work-container pt-3" id="visalist">
                <Row className="justify-content-center">


                  {this.props.visalisting.allproduct.map((allproduct, z) =>
                    <Col sm={6} md={6} lg={4} key={z}>

                      <div className="plan_box mb-2">
                        <figure>
                          <Image alt={allproduct.title}
                            sizes="(max-width: 500px) 30vw"
                            src={'https://ik.imagekit.io/vs4gypuhi/' + allproduct.imageurl}
                            fill="true"
                            height={260} width={371}
                          />
                        </figure>

                        <ul className="product-plan">
                          <li className='planname'>{allproduct.title}   <b className={'flag flag-' + allproduct.country_code}></b>
                          </li>
                          <li>
                            <select className='mb-2 form-control'><option> {allproduct.validity} {allproduct.category} </option> </select>
                          </li>
                          <li className='d-flex mb-3'>
                            <span><strong>{allproduct.currency_icon} {allproduct.price}</strong> <br /> Total Fee</span>
                            <span className='pt-2 d-block'>*Includes Processing fee</span>
                          </li>
                          <li className='d-flex'><span><i className='fa fa-hourglass-start'></i> Entry Type </span> <span>{allproduct.entry_type}</span></li>
                          <li className='d-flex'><span><i className='fa fa-hourglass-start'></i> Processing Time</span> <span>{allproduct.tat}</span></li>
                          <li className='d-flex'><span><i className='fa fa-clock-o'></i> Duration of stay </span> <span>up to {allproduct.duration} <i className='fa fa-question-circle' title='Maximum stay allowed at one time'></i> </span></li>
                          <li className='d-flex'><span><i className='fa fa-hourglass-start'></i> Visa Validity </span> <span>{allproduct.validity}</span></li>


                          <li>

                          </li>
                          <li>
                          <Link href={'/' + this.props.country_ext + '/checkout/' + allproduct.urllink + '/' + allproduct.id}>
                                <a className="buy_btn">
                                  Apply for {allproduct.title}
                                </a>
                              </Link>
                            {/* {this.state.islogined ?
                              <Link href={'/' + this.props.country_ext + '/checkout/' + allproduct.urllink + '/' + allproduct.id}>
                                <a className="buy_btn">
                                  Apply for {allproduct.title}
                                </a>
                              </Link> :
                              <div className="buy_btn" onClick={() => { this.signIn(), this.setState({ selectedCardPath: '/' + this.props.country_ext + '/checkout/' + allproduct.urllink + '/' + allproduct.id }) }}>
                                Apply for  {allproduct.title}
                              </div>
                            } */}
 
                          </li>
                        </ul>

                      </div>





                    </Col>

                  )}

                </Row>
              </div>

            </Container>

            {/* {this.state.isLoader ? <div className='pagefixeddiv'><Spinner animation="border" variant="success" /></div> : ''} */}


            <div className='bg-light pt-5 pb-5'>

              <Container>

                <div className="ftv-title">

                  <h2>Frequently Asked Questions </h2>

                </div>


                <Row>
                  {this.props.visalisting.faq_arr.map((faq_arr, f) =>


                    <Col sm={6} md={6} lg={4} key={f}>
                      <h5 className='font-weight-normal'>{faq_arr.question}
                      </h5>
                      <p>
                        {faq_arr.answ}
                      </p>
                    </Col>

                  )}


                </Row>

                <p className='text-center mt-4 font-weight-bold'>Have More Questions?  Please <Link href={'/contact-us'}>
                  <a>Contact Us</a>
                </Link> </p>
              </Container>
            </div>

            {this.props.visalisting.allproduct.map((allproduct, j) =>
              <>
                {j === 0 ?

                  <LazyLoad offset={100}>
                    <Simple_step scountryname={allproduct.country}></Simple_step>
                  </LazyLoad>
                  :
                  ''
                }

              </>

            )}

            <LazyLoad offset={100}>
              <div className="testimonials-sec">
                <Container>
                  <div className="ftv-title">
                    <p><i className="fa fa-star"></i><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>  Trusted by 50,000+ travelers. </p>
                    <h2>What People Say About Us </h2>

                  </div>
                  <Slider {...Testimonials_sl}>

                    {this.props.visalisting.testimonial.map((testimonial, i) =>
                      <div className="testi-box" key={i}>
                        <div className="testi-desc">

                          <p> {testimonial.description}</p>
                        </div>
                        <div className="testi-info">
                          <Image alt={testimonial.title} src={'https://ik.imagekit.io/vs4gypuhi/' + testimonial.image}
                            width={70} height={70} />


                          <div className='ml-3'>
                            <h4>{testimonial.title}</h4>
                            <p>{testimonial.city} </p>
                          </div>
                        </div>

                      </div>

                    )}



                  </Slider>
                </Container>
              </div>

            </LazyLoad>
            <LazyLoad offset={100}>
              <Abrand></Abrand>
            </LazyLoad>
            <LazyLoad offset={100}>
              <Container className='mb-5'>
                <div className="ftv-title">
                  <h2>Visa For Nearby Countries</h2>

                </div>
                <Slider {...Testimonials_sl}>
                  {this.props.visalisting.resarray_near.map((resarray_near, a) =>
                    <div className="pro-div" key={a}>
                      <Link href={'/' + this.props.country_ext + '/' + resarray_near.urllink}>
                        <a>
                          <figure className="visa-img">
                            <Image alt={resarray_near.title}
                              sizes="(max-width: 500px) 10vw"
                              src={'https://ik.imagekit.io/vs4gypuhi/' + resarray_near.imageurl}
                              fill="true"
                              height={270} width={397}
                            />

                          </figure>
                          <div className="pro-details">
                            <h5 className="pro-title">{resarray_near.title}</h5>
                            <p className="skill"><i className="fa fa-clock-o"></i> {resarray_near.duration}  Validity </p>
                            <p className="skill"><i className="fa fa-usd"></i> Starting as low as {resarray_near.currency_icon} {resarray_near.price} per Visa </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  )}

                </Slider>


              </Container>
            </LazyLoad>


            <LazyLoad offset={100}>
              <Ready_get></Ready_get>
            </LazyLoad>

            <hr />


            <LazyLoad offset={100}>
              <Footer ce_name={this.props.country_ext}></Footer>

            </LazyLoad>
            {this.state.show === true ? <Login ce_name={this.props.country_ext} handleCallback={this.handleCallback} /> : ''}

          </>


          :
          <div className="error">
            <div className="container mt-5 mb-5">
              <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6">
                  <div className="card card-body text-center">
                    <Link href={'/'}>
                      <a className="navbar-brand"> <Image priority alt="Fast Track Visa" src={'/img/logo.png'} width={209} height={56} /> </a>
                    </Link>

                    <h1 className="mt-2 h3">Something went wrong please try again  </h1>


                    <p>
                      <Link href={'/'}><a className="btn btn-dark">Click Here</a></Link>
                    </p>

                  </div>
                </div>
              </div>


            </div>
          </div>

        }
      </>

    );
  }
}
export default Visa_indetail;