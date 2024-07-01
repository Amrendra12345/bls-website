import Image from 'next/image'
import Link from 'next/link';
import Router from 'next/router';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LazyLoad from 'react-lazy-load';
import Nav from '../pages/components/Nav';
import Footer from '../pages/components/Footer';
import Searchband from '../pages/components/search_band';
import Simple_step from '../pages/components/Simple_step';
import Abrand from '../pages/components/Abrand';
import Ready_get from '../pages/components/Ready_get';
import Blog_sec from '../pages/components/Blog_sec';
import Widget_v from '../pages/components/Widget_v';
import axios from 'axios';
import Slider from "react-slick";
import ReactPlayer from 'react-player'

import CountryExList from '../countyExList.json';

class Main_Home extends Component {

	componentDidMount() {
		axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=0303334790d54efdb7a07b113b206ced`)
			.then(res => {
				if (res !== null) {
					if (res.data.country_code !== null && res.data.country_code !== 'US') {
						const country_code = res.data.country_code.toLowerCase();
						//console.log(country_code);
						for (let i = 0; CountryExList.length > i; i++) {
							if (CountryExList[i].split('-')[1] === country_code) {
								const countryEx_code = CountryExList[i];
								localStorage.setItem('country_code', countryEx_code);
								this.setState({ countryEx_code });
								Router.push('/' + countryEx_code);
							}
						}

					}
					else {
						Router.push('/');
					}
				}
			})
		window.addEventListener('scroll', () => {
			let activeClass = 'hsticky';
			if (window.scrollY === 0) {
				activeClass = 'top';
			}
			this.setState({ activeClass });
		});
	}



	constructor(props, context) {
		super(props, context);
		this.state = {
		apistatus: '',
		};

	}

	static async getInitialProps(context) {

		const res = await fetch(`https://cms.fasttrackvisa.com/api/homelisting`);
		const apistatus = 200;
		//console.log(res.data)
		if (res.status === 200) {
			const Main_Home = await res.json()
			const apistatus = res.status;
			
			return {
				Main_Home, apistatus
			}

		}
		else {
			return {
				Main_Home, apistatus
			}
		}
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
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},


			]
		}

		return (
			<>

				<header className={'App-header' + ` ${this.state.activeClass}`}>
					<Nav ce_name="" lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={''}> </Nav>
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

					</div>
					<h1 className='pagevtitle'>Apply for Global Visas and ETAs Online</h1>
					{/* <div className="banner_text formloader" id="banner_text">
						<a href="#plans" className="plan_btn"><h2>Get an eSIM Card worth $ 9<sup>99</sup> free with your eVisa</h2>
							<p>Enjoy free Whatsapp & Incoming Calls</p>
							<span className="btn1">Explore <i className="fa fa-caret-down ml-1"></i></span>
						</a>
					</div> */}
				</div>


				<LazyLoad offset={100}>
					<Searchband ce_name=""></Searchband>
				</LazyLoad>
				<Container>

					<div className="desi-work-container" id="plans">
						<Row className="gutters5">
							{this.props.Main_Home.homelist.map((homelist, k) =>
								<Col sm={6} md={4} key={k}>

									<div className="pro-div">
										<Link href={homelist.urllink}>
											<a>
												<figure className="visa-img">
													<Image alt={homelist.title}
														sizes="(max-width: 500px) 30vw"
														src={'https://ik.imagekit.io/vs4gypuhi/' + homelist.imageurl}
														fill="true"
														height={270} width={397}
													/>
												</figure>
												<div className="pro-details">
													<h5 className="pro-title">{homelist.title}</h5>
													<p className="skill"><i className="fa fa-clock-o"></i> {homelist.duration} Validity</p>
													<p className="skill"><i className="fa fa-usd"></i> Starting as low as  {homelist.currency_icon} {homelist.price} per Visa </p>
												</div>
											</a>
										</Link>
									</div>
								</Col>
							)}

						</Row>
					</div>



				</Container>

				<LazyLoad offset={100}>
					<Simple_step scountryname="Relevant"></Simple_step>
				</LazyLoad>
				<LazyLoad offset={100}>
					<div className="testimonials-sec">
						<Container>
							<div className="ftv-title">
								<p><i className="fa fa-star"></i><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>  Trusted by 50,000+ travelers. </p>
								<h2>What People Say About Us </h2>
								

							</div>
							<Slider {...Testimonials_sl}>

								{this.props.Main_Home.testimonial.map((testimonial, i) =>
									<div className="testi-box" key={i}>
										<div className="testi-desc">
											<p> {testimonial.description}</p>
										</div>
										<div className="testi-info">
											<Image alt={testimonial.title} src={'https://ik.imagekit.io/vs4gypuhi/' + testimonial.image}
												width={70} height={70} />

											<div className='pl-2'>
												<h4>{testimonial.title}</h4>
												<p>{testimonial.city}, {testimonial.country} </p>
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
					<Ready_get></Ready_get>
				</LazyLoad>

				<LazyLoad offset={100}>

					<div className="blog-sec">
						<Container>
							<div className="ftv-title">
								<h2>Check out our Blog for Inspiring Travel Stories & Ideas</h2>
								<p>Stay up-to-date on Global Travel Requirements</p>

							</div>
							<Slider {...Testimonials_sl}>
								{this.props.Main_Home.blog_arr.map((blog_arr, i) =>

									<div className="blog-box" title={blog_arr.title} key={i}>
										<Link href={'/blog/' + blog_arr.blogtitle}>
											<a>
												<figure>
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



								)}

							</Slider>
						</Container>
					</div>
				</LazyLoad>

				<LazyLoad offset={100}>
					<Widget_v ce_name=""></Widget_v>
				</LazyLoad>
				<LazyLoad offset={100}>
					<Footer ce_name=''></Footer>

				</LazyLoad>
			</>

		);
	}
}
export default Main_Home; 
