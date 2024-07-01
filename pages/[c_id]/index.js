
import Link from 'next/link';
import Image from 'next/image'
import Router from 'next/router';
import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import LazyLoad from 'react-lazy-load';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Searchband from '../components/search_band';
import Simple_step from '../components/Simple_step';
import Abrand from '../components/Abrand';
import Ready_get from '../components/Ready_get';
import Fbottom from '../components/Fbottom';
import Widget_v from '../components/Widget_v';
import Slider from "react-slick";
import Login from '../login/login';
import CountryExList from '../../countyExList_in.json';

class Home extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			apistatus: '',
			pagecheck: '',
			selectedCardPath: '',
			islogined: false,
			show: false,
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
		const country_ext = context.query.c_id
		var country_list = ['en-in']
		const country_elist = CountryExList.findIndex(o => o === country_ext)
		//console.log(country_list.findIndex(o => o === country_ext))

		const pagecheck = (country_ext.search('-visa') !== -1);

		if (pagecheck !== true) {
			const res = await fetch(`https://cms.fasttrackvisa.com/api/${country_ext}/homelisting`)
			if (res.status === 200) {
				const homepage = await res.json()
				const apistatus = res.status;
				return {
					country_ext, homepage, country_elist, pagecheck, apistatus

				}
			}
			else {
				return {
					country_ext, country_elist, pagecheck,
				}
			}
		}
		else {

			const res1 = await fetch(`https://cms.fasttrackvisa.com/api/international-visa/${country_ext}`)
			if (res1.status === 200) {
				const visalisting = await res1.json()
				const apistatus = res1.status;
				return {
					country_ext, visalisting, country_elist, pagecheck, apistatus

				}
			}
			else {
				return {
					country_ext, country_elist, pagecheck,
				}
			}
		}




	}

	componentDidMount() {
		this.setState({
			homepage: this.props.homepage
		});
		this.setState({
			visalisting: this.props.visalisting
		});

		if (this.props.country_elist === -1 && this.props.pagecheck !== true) {
			Router.push('/');
		}


		window.addEventListener('scroll', () => {
			let activeClass = 'hsticky';
			let activeClass2 = 'fsticky';
			if (window.scrollY === 0) {
				activeClass = '';
			}
			if (window.scrollY <= 700) {
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
		//	console.log(loginStatue, 'index');
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

				{this.props.pagecheck !== true && this.props.apistatus === 200 ?

					<div className="Home-page">
						<header className={'App-header' + ` ${this.state.activeClass}`}>
							<Nav ce_name={this.props.country_ext} lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'/'}> </Nav>
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

						</div>



						<LazyLoad offset={100}>
							<Searchband ce_name={this.props.country_ext}></Searchband>
						</LazyLoad>


						<Container>

							<div className="desi-work-container" id="plans">
								<Row className="gutters5">
									{this.props.homepage.homelist.map((homelist, k) =>
										<Col sm={6} md={4} key={k}>

											<div className="pro-div">
												<Link href={'/' + this.props.country_ext + '/' + homelist.urllink}>
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

										{this.props.homepage.testimonial.map((testimonial, n) =>
											<div className="testi-box" key={n}>
												<div className="testi-desc">

													<p> {testimonial.description}</p>
												</div>
												<div className="testi-info">
													<Image alt={testimonial.title} src={'https://ik.imagekit.io/vs4gypuhi/' + testimonial.image}
														width={70} height={70} />
													<div className='pl-2'>
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
										{this.props.homepage.blog_arr.map((blog_arr, i) =>

											<div className="blog-box" title={blog_arr.title} key={i}>
												<Link href={'/blog/' + blog_arr.blogtitle}>
													<a>
														<figure>
														{console.log('https://ik.imagekit.io/vs4gypuhi/' + blog_arr.image , blog_arr.title)}
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
							<Widget_v ce_name={this.props.country_ext}></Widget_v>
						</LazyLoad>
						<LazyLoad offset={100}>
							<Footer ce_name={this.props.country_ext}></Footer>

						</LazyLoad>

					</div>


					: this.props.pagecheck === true ?

						<>

							{this.props.apistatus === 200 ?
								<div className='visalistingpage'>
									<header className={'App-header' + ` ${this.state.activeClass}`}>
										
										<Nav ce_name={''} lob_name="home_page" meta_title={this.props.visalisting.metatag} meta_desc={this.props.visalisting.meta_desc} meta_keyword="" meta_img="/img/logo.png" meta_url={''} handleCallback={this.handleCallback} > </Nav>
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
										<h1 className='pagevtitle'>Your {this.props.country_ext.replace(/-/g, ' ')} is just a few clicks away...</h1>
									</div>





									{this.props.visalisting?.allproduct.map((allproduct, f) =>
										<>
											{f === 0 ?
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
											<li className="breadcrumb-item"><Link href={'/'}>
												<a>
													Home
												</a>
											</Link></li>
											<li className="breadcrumb-item active" aria-current="page"> {this.props.country_ext.replace(/-/g, ' ')}</li>
										</ol>

										<div className="desi-work-container pt-3" id='visalist'>
											<Row className="justify-content-center">


												{this.props.visalisting.allproduct.map((allproduct, l) =>
													<Col sm={6} md={6} lg={4} key={l}>

														<div className="plan_box mb-2">
															<figure>

																<Image alt={allproduct.title}
																	sizes="(max-width: 500px) 10vw"
																	src={'https://ik.imagekit.io/vs4gypuhi/' + allproduct.imageurl}
																	fill="true"
																	height={260} width={371}
																/> </figure>

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

																<li className='d-flex'><span><i className='fa fa-hourglass-start'></i> Processing Time </span> <span>{allproduct.tat}</span></li>
																<li className='d-flex'><span><i className='fa fa-clock-o'></i> Duration of stay </span> <span>up to {allproduct.duration} <i className='fa fa-question-circle' title='Maximum stay allowed at one time'></i></span></li>
																<li className='d-flex'><span><i className='fa fa-hourglass-start'></i> Visa Validity </span> <span>{allproduct.validity}</span></li>


																<li>
																<Link href={'/checkout/' + allproduct.urllink + '/' + allproduct.id}>
																			<a className="buy_btn">
																				Apply for {allproduct.title}
																			</a>
																		</Link>
																		
																	{/* {this.state.islogined ?
																		<Link href={'/checkout/' + allproduct.urllink + '/' + allproduct.id}>
																			<a className="buy_btn">
																				Apply for {allproduct.title}
																			</a>
																		</Link>
																		:
																		<div className="buy_btn" onClick={() => { this.signIn(), this.setState({ selectedCardPath: '/checkout/' + allproduct.urllink + '/' + allproduct.id }) }}>
																			Apply for {allproduct.title}
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
												{this.props.visalisting?.faq_arr.map((faq_arr, o) =>


													<Col sm={6} md={6} lg={4} key={o}>
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

									{this.props.visalisting?.allproduct.map((allproduct, d) =>
										<>
											{d === 0 ?

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

													{this.props.visalisting.testimonial.map((testimonial, g) =>
														<div className="testi-box" key={g}>
															<div className="testi-desc">

																<p> {testimonial.description}</p>
															</div>
															<div className="testi-info">
																<Image alt={testimonial.title} src={'https://ik.imagekit.io/vs4gypuhi/' + testimonial.image}
																	width={70} height={70} />


																<div className='pl-3'>
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
												{this.props.visalisting.resarray_near.map((resarray_near, s) =>
													<div className="pro-div" key={s}>
														<Link href={'/' + resarray_near.urllink}>
															<a>
																<figure className="visa-img">
																	<Image alt={resarray_near.title}
																		sizes="(max-width: 500px) 30vw"
																		src={'https://ik.imagekit.io/vs4gypuhi/' + resarray_near.imageurl}
																		fill="true"
																		height={270} width={397}
																	/>

																</figure>
																<div className="pro-details">
																	<h5 className="pro-title">{resarray_near.title}</h5>
																	<p className="skill"><i className="fa fa-clock-o"></i> {resarray_near.duration}  Validity</p>
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


									<LazyLoad offset={100}>
										<Footer ce_name=''></Footer>

									</LazyLoad>
									{this.state.show === true ? <Login ce_name={''} handleCallback={this.handleCallback} /> : ''}

								</div>


								:
								<>
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
								</>
							}
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
export default Home;