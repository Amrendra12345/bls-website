// import Image from 'next/image'
import Link from 'next/link';
// import Router from 'next/router';
import React, { useState, useEffect } from 'react'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LazyLoad from 'react-lazy-load';
import Nav from '../../pages/../components/Nav';
import Footer from '../../pages/../components/Footer';
import axios from 'axios'; 

export default function ChangePassword() {

	const [c_ext, setcExt] = useState('');
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmNewPassword, setConfirmNewPassword] = useState('');
	const [error, setError] = useState(null);
	const [activeClass, setActiveClass] = useState('hsticky');


useEffect(() => {
		setcExt(window.location.pathname.split('/')[1])

	}, [])



	const handleSubmit = async (e) => {
		e.preventDefault();

		if (newPassword !== confirmNewPassword) {
			setError('Passwords do not match');
			return;
		}
		const data = new FormData();
		data.append('uid', JSON.parse(localStorage.getItem('loginDetails'))?.id);
		data.append('current_password', oldPassword);
		data.append('newpassword', newPassword);

		axios.post(`https://cms.fasttrackvisa.com/api/${c_ext}/change-password`,data).then((res) => {
			console.log(res);
		}).catch((ex) => console.error("Update Password", ex), setError('Unable to change password'))
	};

	return (
		<>

			<header className={'App-header' + ` ${activeClass}`}>
				<Nav ce_name={c_ext} lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'my-profile/change-password'}> </Nav>
			</header>

			<div className="checkout_banner mt-3">

				<Container>
					<h1 className='mt-5'>Welcome back, </h1>
					<p>Here's your account details.</p>
				</Container>

			</div>


			<Container>
			<ol className="breadcrumb pl-0 bg-white">
					<li className="breadcrumb-item"><Link href={'/' + c_ext}>
						<a>
							Home
						</a>
					</Link></li>
					<li className="breadcrumb-item"><Link href={'/' + c_ext+ '/my-profile'}>
						<a>
						My Profile
						</a>
					</Link></li>

					<li className="breadcrumb-item active" aria-current="page"> Change Password </li>
				</ol>

				<div className="desi-work-container pt-3">

					<Row>
						<Col sm={12} md={3} lg={3}>
						<ul className='profile_ul'>
								<li><Link href={'/'+c_ext+'/my-profile/my-transactions'}><a><i className='fa fa-list'></i> My Transactions</a></Link></li>
								<li><Link href={'/'+c_ext+'/my-profile/change-password'}><a><i className='fa fa-key'></i> Change Password</a></Link></li>
								<li><Link href={'/'+c_ext+'/my-profile'}><a><i className='fa fa-user'></i> Update Profile</a></Link></li>
							</ul>
						</Col>
						<Col sm={12} md={9} lg={9}>

							<form onSubmit={handleSubmit}>
								<Row className="gutters5">
									<Col sm={6}>
										<div className="ftv-field">
											<label>Old Password</label>
											<input
												type="password" className="form-control" placeholder='here'
												value={oldPassword}
												onChange={(e) => setOldPassword(e.target.value)}
											/>
										</div>
									</Col><Col sm={6}>
										<div className="ftv-field">
											<label>New Password</label>
											<input
												type="password" className="form-control" placeholder='here'
												value={newPassword}
												onChange={(e) => setNewPassword(e.target.value)}
											/>
										</div>
									</Col><Col sm={6}>
										<div className="ftv-field">
											<label>Confirm New Password</label>
											<input
												type="password" className="form-control" placeholder='here'
												value={confirmNewPassword}
												onChange={(e) => setConfirmNewPassword(e.target.value)}
											/>
										</div>
									</Col>
								</Row>


								<button className='btn4 d-block w-100 mt-4' type='submit'>Update Password</button>
								{error && <p>{error}</p>}
							</form>


						</Col>


					</Row>

				</div>



			</Container>

			<hr />

			<LazyLoad offset={100}>
				<Footer ce_name={c_ext}></Footer>

			</LazyLoad>
		</>

	);
}