import Image from 'next/image'
import Link from 'next/link';
import Router from 'next/router';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LazyLoad from 'react-lazy-load';
import Nav from '../../pages/components/Nav';
import Footer from '../../pages/components/Footer'; 
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Webcam from "react-webcam";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Alert from 'react-bootstrap/Alert';


class My_transactions extends Component {
	videoConstraints = {
		facingMode: "user",
	  };
	  constructor(props, context) {
		super(props, context);
		this.state = {
		  apistatus: '',
		  showAlert: false,
		  showsuccessAlert: false,
		  captureImageSrc: '',
		  showWebCamModal: false,
		  currentActiveWebCamName: '',
		  currentActiveWebCamIndex: null,
		  currentActiveWebCamSubIndex: null,
		  My_transactions: {},
		  traveler_info: [],
		  traveler_document_info: [],
		  UploadedFile: [],
		  showForm: false
		};
	
	  }

	static async getInitialProps(context) {

		const res = await fetch(`https://cms.fasttrackvisa.com/api/gettransactions?user_id=7`);
		//console.log(res.data)
		if (res.status === 200) {
			const My_transactions = await res.json()
			const apistatus = res.status;
			return {
				My_transactions, apistatus
			}

		}
		else {
			return {
				My_transactions, apistatus
			}
		}
	}

	componentDidMount() {

		// if (this.props.payment_id < 1 || this.props.payment_id === undefined || this.props.payment_id === null) {
		//   Router.push('/');
		// }
		//  console.log(this.props.My_transactions.additional_details_name_ar);
		//// // console.log(this.props.My_transactions.additional_details_name_ar);
		 
	 
		this.setState({
		  My_transactions: this.props.My_transactions
		});
	
	
		window.addEventListener('scroll', () => {
		  let activeClass = 'hsticky';
		  if (window.scrollY === 0) {
			activeClass = 'top';
		  }
		  this.setState({ activeClass });
		});
	
	
	  }
	  addFormDocumentFields = () => {
		var loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
		if (loginDetails) {
		  this.setState(({
			traveler_document_info: [...this.state.traveler_document_info, {
	
			}]
		  }));
		}
	  }
	
	
	  addFormFields = () => {
		let LocalUploadedFile = [];
		var loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
		if (loginDetails) {
		  for (let i = 0; this.props.My_transactions.document.length > i; i++) {
			LocalUploadedFile.push('Upload File Here');
		  }
		  this.setState(({
			traveler_info: [...this.state.traveler_info, {
	
			}]
		  }));
		  this.setState(({
			UploadedFile: [...this.state.UploadedFile, {
			  LocalUploadedFile
			}]
		  }));
		}
	
		setTimeout(() => {
		  //  console.log(this.props.My_transactions.additional_details_name_ar);
		  this.setState({ showForm: true })
		}, 2000)
	
	  }
	
	  handleChange(i, e) {
		// console.log(i,e.target.value, e.target.name)
		let traveler_document_info = this.state.traveler_document_info;
		traveler_document_info[i][e.target.name] = e.target.value;
		this.setState({ traveler_document_info });
		setTimeout(() => {
		  this.setState({ showAlert: false })
		}, 1500);
	
	  }
	
	
	  handleInputFileChange(index, subindex, event, name) {
		// console.log(index, event.target.files[0], name);
		let UploadedFile = this.state.UploadedFile;
		UploadedFile[index].LocalUploadedFile[subindex] = event.target.files[0].name;
		let traveler_info = this.state.traveler_info;
		// console.log(traveler_info);
		traveler_info[index][name] = event.target.files[0];
		this.setState({ traveler_info });
	
	  }
	
	  handleCaptureImageChange(index, subindex, event, name) {
		let UploadedFile = this.state.UploadedFile;
		UploadedFile[index].LocalUploadedFile[subindex] = 'Uploaded';
		let traveler_info = this.state.traveler_info;
		traveler_info[index][name] = event;
		this.setState({ traveler_info });
		this.setState({ showWebCamModal: false, currentActiveWebCamName: '', currentActiveWebCamIndex: null, captureImageSrc: '' });
	  }
	
	  showWebCamPopop = () => {
		this.setState({ showWebCamModal: false });
	  }
	
	  checkAllfield = () => {
		let status = false;
		let count = this.state.traveler_info.length * this.props.My_transactions.document.length;
		let totalFillCount = 0;
	
		for (let i = 0; this.state.traveler_info.length > i; i++) {
		  for (let d = 0; this.props.My_transactions.document.length > d; d++) {
			if (this.isEmpty(this.state.traveler_info[i][this.props.My_transactions.document_fields[d].field_name])) {
			  totalFillCount++;
			  // console.log(totalFillCount , count);
			  if (totalFillCount === count) {
				status = true;
				return status;
			  }
			}
		  }
		}
	  }
	  isEmpty = (string) => {
		// console.log(string);
		if (string !== null && string !== undefined && string !== '') {
		  return true;
		} else {
		  this.setState({ showAlert: true })
		  return false;
		}
	  }
	
	  submitTravellerInfo = () => {
		// console.log('submitTravellerInfo', this.state.traveler_info);
		if (this.state.traveler_info.length > 0) {
		  // console.log('submitTravellerInfo', this.state.traveler_info.length);
		  if (this.checkAllfield() === true && this.checkAllDocmentfield() === true) {
			var user_id = JSON.parse(localStorage.getItem('loginDetails')).id;
			const data = new FormData();
			data.append('id', this.props.page_url2);
			data.append('user_id', user_id);
			for (let i = 0; this.state.traveler_info.length > i; i++) {
			  for (let d = 0; this.props.My_transactions.document.length > d; d++) {
				if (!this.isEmpty(this.props.My_transactions.document[d].doc_name)) {
				  return;
				}
			  }
			  for (let d = 0; this.props.My_transactions.document.length > d; d++) {
				if (this.props.My_transactions.document[d].doc_name === 'Passport' && this.isEmpty(this.props.My_transactions.document[d].doc_name)) {
				  data.append('document_name[]', this.state.traveler_info[i].Passport)
				}
				if (this.props.My_transactions.document[d].doc_name === 'Photo' && this.isEmpty(this.props.My_transactions.document[d].doc_name)) {
				  data.append('document_name[]', this.state.traveler_info[i].Photo && this.isEmpty(this.props.My_transactions.document[d].doc_name))
				}
				if (this.props.My_transactions.document[d].doc_name === 'Air Ticket' && this.isEmpty(this.props.My_transactions.document[d].doc_name)) {
				  data.append('document_name[]', this.state.traveler_info[i].Air_Ticket)
				}
				if (this.props.My_transactions.document[d].doc_name === 'Hotel Voucher' && this.isEmpty(this.props.My_transactions.document[d].doc_name)) {
				  data.append('document_name[]', this.state.traveler_info[i].Hotel_Voucher)
				}
				if (this.props.My_transactions.document[d].doc_name === 'Invitation Letter' && this.isEmpty(this.props.My_transactions.document[d].doc_name)) {
				  data.append('document_name[]', this.state.traveler_info[i].Invitation_Letter)
				}
				if (this.props.My_transactions.document[d].doc_name === 'Income Tax Return' && this.isEmpty(this.props.My_transactions.document[d].doc_name)) {
				  data.append('document_name[]', this.state.traveler_info[i].Income_Tax_Return && this.isEmpty(this.props.My_transactions.document[d].doc_name))
				}
				if (this.props.My_transactions.document[d].doc_name === 'Bank Statement' && this.isEmpty(this.props.My_transactions.document[d].doc_name)) {
				  data.append('document_name[]', this.state.traveler_info[i].Bank_Statement)
				}
	
				data.append('document_type[]', this.props.My_transactions.document[d].doc_name)
			  }
			}
	
			//  // console.log(data);
			let url = (`https://cms.fasttrackvisa.com/api/uploaddocument`);
			axios.post(url, data, {
			  headers: {
				'Accept': 'application/json',
				'Content-Type': 'multipart/form-data'
			  }
			}, {}).then(res => {
			  // console.log(res);
			}).catch(error => {
			  // console.log('error', error);
			});
	
			this.submitTravellerDocmentInfo();
	
			setTimeout(() => {
			  Router.push('/')
			}, 3000);
			this.setState({ showsuccessAlert: true })
			return false;
	
	
		  } else {
			this.setState({ showAlert: true })
			return false;
		  }
		} else {
		  this.setState({ showAlert: true })
		  return false;
		}
	
	  }
	
	  checkAllDocmentfield = () => {
		let status = false;
		let count = this.state.traveler_document_info.length * this.props.My_transactions.travelar_arr.length;
		let totalFillCount = 0;
	
		for (let i = 0; this.props.My_transactions.travelar_arr.length > i; i++) {
		  for (let j = 0; this.state.traveler_document_info.length > j; j++) {
			if (this.isEmpty(this.state.traveler_document_info[j][this.props.My_transactions.additional_details_name_ar[j].field_name])) {
			  totalFillCount++;
			  // console.log(totalFillCount , count);
			  if (totalFillCount === count) {
				status = true;
				return status;
			  }
			}
		  }
		}
	  }
	
	  submitTravellerDocmentInfo = () => {
		// console.log('submitTravellerInfo', this.state.traveler_document_info);
		if (this.state.traveler_document_info.length > 0) {
		  // console.log('submitTravellerInfo', this.state.traveler_document_info.length);
		  if (this.checkAllDocmentfield() === true) {
			var user_id = JSON.parse(localStorage.getItem('loginDetails')).id;
			const data = new FormData();
			data.append('user_id', user_id);
			for (let i = 0; this.props.My_transactions.travelar_arr.length > i; i++) {
			  let document_arr = [];
			  for (let j = 0; this.state.traveler_document_info.length > j; j++) {
				document_arr.push({ "fiels_name": this.props.My_transactions.additional_details_ar[j], "fiels_value": (this.state.traveler_document_info[j][this.props.My_transactions.additional_details_name_ar[j].field_name] === undefined ? "" : this.state.traveler_document_info[j][this.props.My_transactions.additional_details_name_ar[j].field_name]) })
			  }
			  // console.log(document_arr);
			  data.append('order_id[]', this.props.My_transactions.travelar_arr[i].toid);
			  data.append('field_value[]', JSON.stringify(document_arr));
			}
	
			//  // console.log(data);
			let url = (`https://cms.fasttrackvisa.com/api/save-additional-details`);
			axios.post(url, data, {
			  headers: {
				'Accept': 'application/json',
				'Content-Type': 'multipart/form-data'
			  }
			}, {}).then(res => {
			  // console.log(res);
			}).catch(error => {
			  // console.log('error', error);
			});
		  } else {
			this.setState({ showAlert: true })
			return false;
		  }
		} else {
		  this.setState({ showAlert: true })
		  return false;
		}
	
	  }
	
	
	






	render() {


		return (
			<>

				<header className={'App-header' + ` ${this.state.activeClass}`}>
					<Nav ce_name="" lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'my-profile/my-transactions'}> </Nav>
				</header>
				<div className="checkout_banner mt-3">

					<Container>
						<h1 className='mt-5'>Welcome back, </h1>
						<p>Here's your account details.</p>
					</Container>
				</div>

				<Container>
					<ol className="breadcrumb pl-0 bg-white">
						<li className="breadcrumb-item"><Link href={'/'}>
							<a>
								Home
							</a>
						</Link></li>
						<li className="breadcrumb-item"><Link href={'/my-profile'}>
							<a>
								My Profile
							</a>
						</Link></li>

						<li className="breadcrumb-item active" aria-current="page"> My Transactions </li>
					</ol>
					<div className="desi-work-container pt-3 mb-5">

						<Row>
							<Col sm={12} md={3} lg={3}>
								<ul className='profile_ul'>
									<li><Link href={'/my-profile/my-transactions'}><a><i className='fa fa-list'></i> My Transactions</a></Link></li>
									<li><Link href={'/my-profile/change-password'}><a><i className='fa fa-key'></i> Change Password</a></Link></li>
									<li><Link href={'/my-profile'}><a><i className='fa fa-user'></i> Update Profile</a></Link></li>
								</ul>
							</Col>
							<Col sm={12} md={9} lg={9}>
							 
							</Col>


						</Row>

					</div>



				</Container>

				<LazyLoad offset={100}>
					<Footer ce_name=''></Footer>

				</LazyLoad>
			</>

		);
	}
}
export default My_transactions; 