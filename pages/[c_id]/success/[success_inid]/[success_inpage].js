
import Link from 'next/link'
import Router from 'next/router'
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import LazyLoad from 'react-lazy-load';
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ReactHtmlParser from 'react-html-parser';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Webcam from "react-webcam";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Alert from 'react-bootstrap/Alert';


class Successpagein extends Component {
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
      thankupage: {},
      traveler_info: [],
      traveler_document_info: [],
      UploadedFile: [],
      showForm: false
    };

  }

  static async getInitialProps(context) {
    const c_id = context.query.c_id;
    const page_url = context.query.success_inid;
    const success_page_url = context.query.success_inpage;
    const payment_id = context.query.payment_intent;
    const res = await fetch(`https://cms.fasttrackvisa.com/api/${c_id}/thankyou/${page_url}/${success_page_url}`);

    if (res.status === 200) {
      const thankupage = await res.json()
      //  console.log(thankupage)
      const apistatus = res.status;
      return {
        c_id,
        thankupage, success_page_url, apistatus, page_url, payment_id
      }

    }
    else {
      return {
        success_page_url, page_url, c_id
      }
    }

  }


  updatePayment = async () => {
    const user_id = JSON.parse(localStorage.getItem('loginDetails')).id;
    const paymentData = {
      user_id: user_id,
      order_id: this.props.success_page_url,
      status: 1,
      strip_transaction_id: this.props.payment_id
    }
    await axios.post(`https://cms.fasttrackvisa.com/api/${this.props.c_id}/updatepayment`, paymentData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  componentDidMount() {

    if (this.props.payment_id < 1 || this.props.payment_id === undefined || this.props.payment_id === null) {
      Router.push('/' + this.props.c_id);
    }
    //  console.log(this.props.thankupage.additional_details_name_ar);
    //// // console.log(this.props.thankupage.additional_details_name_ar);
    for (let i = 0; this.props.thankupage.travelar_arr.length > i; i++) {
      setTimeout(() => {
        this.addFormFields();
      }, 20)
    }
    for (let i = 0; this.props.thankupage.additional_details_name_ar.length > i; i++) {
      setTimeout(() => {
        this.addFormDocumentFields();
      }, 20)
    }

    this.updatePayment();
    this.setState({
      thankupage: this.props.thankupage
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
      for (let i = 0; this.props.thankupage.document.length > i; i++) {
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
      //  console.log(this.props.thankupage.additional_details_name_ar);
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
    let count = this.state.traveler_info.length * this.props.thankupage.document.length;
    let totalFillCount = 0;

    for (let i = 0; this.state.traveler_info.length > i; i++) {
      for (let d = 0; this.props.thankupage.document.length > d; d++) {
        if (this.isEmpty(this.state.traveler_info[i][this.props.thankupage.document_fields[d].field_name])) {
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
          for (let d = 0; this.props.thankupage.document.length > d; d++) {
            if (!this.isEmpty(this.props.thankupage.document[d].doc_name)) {
              return;
            }
          }
          for (let d = 0; this.props.thankupage.document.length > d; d++) {
            if (this.props.thankupage.document[d].doc_name === 'Passport' && this.isEmpty(this.props.thankupage.document[d].doc_name)) {
              data.append('document_name[]', this.state.traveler_info[i].Passport)
            }
            if (this.props.thankupage.document[d].doc_name === 'Photo' && this.isEmpty(this.props.thankupage.document[d].doc_name)) {
              data.append('document_name[]', this.state.traveler_info[i].Photo && this.isEmpty(this.props.thankupage.document[d].doc_name))
            }
            if (this.props.thankupage.document[d].doc_name === 'Air Ticket' && this.isEmpty(this.props.thankupage.document[d].doc_name)) {
              data.append('document_name[]', this.state.traveler_info[i].Air_Ticket)
            }
            if (this.props.thankupage.document[d].doc_name === 'Hotel Voucher' && this.isEmpty(this.props.thankupage.document[d].doc_name)) {
              data.append('document_name[]', this.state.traveler_info[i].Hotel_Voucher)
            }
            if (this.props.thankupage.document[d].doc_name === 'Invitation Letter' && this.isEmpty(this.props.thankupage.document[d].doc_name)) {
              data.append('document_name[]', this.state.traveler_info[i].Invitation_Letter)
            }
            if (this.props.thankupage.document[d].doc_name === 'Income Tax Return' && this.isEmpty(this.props.thankupage.document[d].doc_name)) {
              data.append('document_name[]', this.state.traveler_info[i].Income_Tax_Return && this.isEmpty(this.props.thankupage.document[d].doc_name))
            }
            if (this.props.thankupage.document[d].doc_name === 'Bank Statement' && this.isEmpty(this.props.thankupage.document[d].doc_name)) {
              data.append('document_name[]', this.state.traveler_info[i].Bank_Statement)
            }

            data.append('document_type[]', this.props.thankupage.document[d].doc_name)
          }
        }

        //  // console.log(data);
        let url = (`https://cms.fasttrackvisa.com/api/${this.props.c_id}/uploaddocument`);
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

        // setTimeout(() => {
        //   Router.push('/')
        // }, 3000);
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
    let count = this.state.traveler_document_info.length * this.props.thankupage.travelar_arr.length;
    let totalFillCount = 0;

    for (let i = 0; this.props.thankupage.travelar_arr.length > i; i++) {
      for (let j = 0; this.state.traveler_document_info.length > j; j++) {
        if (this.isEmpty(this.state.traveler_document_info[j][this.props.thankupage.additional_details_name_ar[j].field_name])) {
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
        for (let i = 0; this.props.thankupage.travelar_arr.length > i; i++) {
          let document_arr = [];
          for (let j = 0; this.state.traveler_document_info.length > j; j++) {
            document_arr.push({ "fiels_name": this.props.thankupage.additional_details_ar[j], "fiels_value": (this.state.traveler_document_info[j][this.props.thankupage.additional_details_name_ar[j].field_name] === undefined ? "" : this.state.traveler_document_info[j][this.props.thankupage.additional_details_name_ar[j].field_name]) })
          }
          // console.log(document_arr);
          data.append('order_id[]', this.props.thankupage.travelar_arr[i].toid);
          data.append('field_value[]', JSON.stringify(document_arr));
        }

        //  // console.log(data);
        let url = (`https://cms.fasttrackvisa.com/api/${this.props.c_id}/save-additional-details`);
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

    var settings = {
      dots: true,
      nav: false,
      infinite: true,
      lazyLoad: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,

    }
    return (

      <>
        {this.props.apistatus === 200 ?
          <>
            <header className={'App-header hsticky2' + ` ${this.state.activeClass}`}>
              <Nav ce_name={this.props.c_id} lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'/success'}> </Nav>
            </header>



            <Container>
              <ol className="breadcrumb pl-0">
                <li className="breadcrumb-item"><Link href={'/' + this.props.c_id}>
                  <a>
                    Home
                  </a>
                </Link></li>

                <li className="breadcrumb-item active">Success </li> <li className="breadcrumb-item active" aria-current="page">{this.props.thankupage.destination}  {this.props.thankupage.category}</li>
              </ol>
              <div className='eta_bg'>

                  Please provide the following additional information for faster processing of your eVisa / ETA Application:


                </div>





              {this.state.showForm ? <>


                <div className='AttachDocuments mt-5'>
                  {/* {this.props.thankupage.travelar_arr?.length} */}


                  <Tabs
                    defaultActiveKey="0"
                    transition={false}
                  >

                    {this.props.thankupage.travelar_arr.map((element, index) => (
                      <Tab eventKey={index.toString()} title={element.name}>
                        <Row>

                          {this.props.thankupage.additional_details_name_ar.map((additional_element, index) =>
                            <Col sm={6} key={index}>
                              <div className="ftv-field">
                                <label>{this.props.thankupage.additional_details_ar[index]}</label>
                                <input id={additional_element.field_name} type='text' name={additional_element.field_name} className='form-control' placeholder="Here" onChange={e => this.handleChange(index, e)} />
                              </div>
                            </Col>
                          )}
                        </Row>
                        <h5 className='mt-4 pt-2 mb-0'>Upload Documents</h5>
                        <Row>
                          {this.props.thankupage.document.map((subElement, subindex) => (
                            <Col sm={6} key={subindex}>
                              <>
                                <div className="ftv-field file_upload">
                                  <label htmlFor="file1">{this.props.thankupage.document[subindex].doc_name} </label>
                                  <input id={this.props.thankupage.document[subindex]} name={this.props.thankupage.document[subindex]} type="file" className="form-control file" placeholder="Upload File Here" onChange={e => this.handleInputFileChange(index, subindex, e, this.props.thankupage.document_fields[subindex].field_name)} />
                                  <small>{this.state.UploadedFile[index].LocalUploadedFile[subindex]}</small>
                                  <span className='browse' title='Browse'><i className='fa fa-upload'></i></span>
                                  <b>or</b>
                                  <span onClick={() => this.setState({ showWebCamModal: true, currentActiveWebCamName: this.props.thankupage.document_fields[subindex].field_name, currentActiveWebCamIndex: index, currentActiveWebCamSubIndex: subindex })} className='browse2' title='Take Photo'><i className='fa fa-camera'></i></span>
                                </div>

                              </>

                              {/* {this.state.spinner ?
<Button variant="primary" disabled> 
<Spinner
as="span"
animation="grow"
size="sm"
role="status"
aria-hidden="true"
/>
Loading...
</Button> : ''} */}
                            </Col>
                          ))}


                        </Row>

                      </Tab>
                    ))}
                  </Tabs>
                </div>


                <Modal
                  show={this.state.showWebCamModal}
                  onHide={() => this.setState({ showWebCamModal: false })}
                  dialogClassName="modal-90w"
                  size="lg"  >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      {this.state.currentActiveWebCamName}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div>
                      {this.state.captureImageSrc === '' ?
                        <Webcam
                          //fullscreen={true}
                          audio={true}
                          height={600}
                          screenshotFormat="image/jpeg"
                          width={760}
                          videoConstraints={this.videoConstraints}
                        >
                          {({ getScreenshot }) => (
                            <div className='text-center'><button className='btn btn-secondary'
                              onClick={() => {
                                const imageSrc = getScreenshot();
                                this.setState({ captureImageSrc: imageSrc });
                              }}
                            >
                              Capture photo
                            </button></div>
                          )}
                        </Webcam>
                        : <> <img src={this.state.captureImageSrc}
                        /> <div className='text-center'><button className='btn btn-secondary mt-2'
                          onClick={() => {
                            this.handleCaptureImageChange(this.state.currentActiveWebCamIndex, this.state.currentActiveWebCamSubIndex, this.state.captureImageSrc, this.state.currentActiveWebCamName);
                          }}
                        >
                          Upload photo
                        </button></div> </>
                      }
                    </div>
                  </Modal.Body>
                </Modal>
              </>
                : ''}



              {this.state.showAlert ? <> <br />  <Alert key='warning' variant='warning'> Some field is empty/null.
              </Alert> </> : ''}



              {this.state.showsuccessAlert ? <>

                <div className='card card-body mt-2 text-center pt-5'>

                  <figure> <Image priority alt="thank you" src={'/img/check.jpg'} width={152} height={158} />
                  </figure>

                  <h1>Congratulations {this.props.thankupage.full_name}</h1>
                  <p>Dear,  {this.props.thankupage.full_name}.  Thank you for applying for {this.props.thankupage.destination}  {this.props.thankupage.category} on fasttrackvisa.com </p>
                  <p>Your Transaction ID is {this.props.payment_id}</p>
 
                </div>

              </> : ''}


              <button className='btn4 d-block w-100 mt-4'
                onClick={() => { this.submitTravellerInfo() }}
              >
                Submit
              </button>

            </Container>


            <div className='share_fbox'>
              <Row className='justify-content-end'>
                <Col sm={8} md={6}>
                  <h2>
                    Share Your Experience
                    with your friends
                  </h2>

                  <div className='shareicon'>
                    <a href='#'><i className='fa fa-facebook'></i></a>
                    <a href='#'><i className='fa fa-twitter'></i></a>
                    <a href='#'><i className='fa fa-linkedin'></i></a>
                    <a href='#'><i className='fa fa-instagram'></i></a>
                  </div>


                </Col>
              </Row>
            </div>




            <Container>

              <div className='mt-5 ftv-title text-left'>
                <h5>Rate your experience with the Visa Application Process with fasttrackvisa.com</h5>
                <p><a href='#'><i className="fa fa-star-o f20 mr-1"></i><i className="fa fa-star-o f20 mr-1"></i><i className="fa fa-star-o f20 mr-1"></i><i className="fa fa-star-o f20 mr-1"></i><i className="fa fa-star-o f20 mr-1"></i></a> </p>
              </div>

              {/* 
              <Row className='mt-5'>

                <Col sm={12} md={12}>
                  <div className='card'>
                    <div className='card-header bg-white'>


                      <h5>Instructions to Activate and Use the eSIM Card:</h5>

                    </div>
                    <div className='card-body'>
                      {ReactHtmlParser(this.props.thankupage.gernal_rule)}
                    </div>

                  </div>
                </Col>


              </Row> */}


              <h5 className='mt-5'> Thank you for providing additional details for your eVisa Application.  Please note :
              </h5>

              <ol type='a'>
                <li>Your {this.props.thankupage.destination} eVisa will be delivered to you within {this.props.thankupage.tat} Days via e-mail </li>
                <li>You can also download your eVisa from your 'My Accounts' section after logging into fasttrackvisa.com</li>
                <li>Please note that it is mandatory to take a printout of your eVisa when you travel to {this.props.thankupage.destination}</li>
                <li>In case your visa is rejected for any reason whatsoever, you will get an e-mail to that effect.</li>
                <li>Your invoice has been e-mailed to you. You can also download it from here</li>
                <li>If you have any questions, send us an e-mail on support@fasttrackvisa.com</li>
              </ol>


              <p>Note : We will initiate your Visa Application with the {this.props.thankupage.destination} Embassy once all documents are uploaded and there are no errors in the application. If there are any gaps in your application; our support team will connect with you within 24 hours.</p>


            </Container>


            <hr />
            <LazyLoad offset={100}>
              <Footer ce_name={this.props.c_id}></Footer>

            </LazyLoad>

          </>

          :
          <>
            <div className="error">
              <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-8 col-md-6">
                    <div className="card card-body text-center">
                      <Link href={'/' + this.props.c_id}>
                        <a className="navbar-brand"><Image priority alt="Fast Track Visa" src={'/img/logo.png'} width={209} height={56} /> </a>
                      </Link>

                      <h1 className="mt-2 h3">Something went wrong please try again  </h1>

                      <p>
                        <Link href={'/' + this.props.c_id}><a className="btn btn-dark">Click Here</a></Link>
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      </>

    );
  }
}
export default Successpagein;