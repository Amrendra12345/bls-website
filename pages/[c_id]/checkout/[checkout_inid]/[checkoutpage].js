import Link from "next/link";
import Image from "next/image";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// import Spinner from 'react-bootstrap/Spinner';
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LazyLoad from "react-lazy-load";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import Payment from "../../payment/index";
import Mob_nflag from "../../../components/Mob_nflag";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import DatePicker from "react-datepicker";
import Select from "react-select";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import ReactHtmlParser from "react-html-parser";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { data } from "jquery";
import { Elements } from "@stripe/react-stripe-js";

const base = "https://cms.fasttrackvisa.com";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const appearance = {
  theme: 'stripe',
};
const loader = 'auto';

class Checkoutpagein extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      apistatus: "",
      traveler_info: [],
      options: [],
      showAlert: false,
      travellerCount: 1,
      spinner: false,
      showModal: false,
      isContinueToPayment: false,
      paymentData: {},
      discountAmount: 0,
      showSuccessMessage: false,
      isCouponValid: false,
    };
  }


 


  // onApply = async () => {
  
  //   var formdata = new FormData();
  //   formdata.append("countryCode", this.props.checkoutpage[0].currency_icon);
  //   formdata.append("couponCode", this.state.Coupon_code);

  //   var requestOptions = {
  //     method: "POST",
  //     body: formdata,
  //     redirect: "follow",
  //   };

  //   try {
  //     const response = await fetch(
  //       "https://cms.fasttrackvisa.com/api/cupon",
  //       requestOptions
  //     );
  //     const result = await response.json();

  //     if (result.status === "success") {
  //       console.log(result);
  //       const discountAmount = result.data;
       
  //       this.setState({
  //         showSuccessMessage: true,
  //         discountAmount: discountAmount,
  //         isCouponValid: true,
  //       });
  //       console.log(this.state.isCouponValid);
  //     } else {
  //       console.log("API request failed with status:", response.status);
  //       this.setState({
  //         isCouponValid: false,
  //         showSuccessMessage: false,
  //         discountAmount: 0,
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error in API request:", error);
  //     this.setState({
  //       isCouponValid: false,
  //       showSuccessMessage: false,
  //       discountAmount: 0,
  //     });
  //   }
  // };


  onApply = async () => {
    const formdata = new FormData();
    const { country_ext, page_url2 } = this.props;
    formdata.append("countryCode", this.props.checkoutpage[0].currency_icon);
    formdata.append("couponCode", this.state.Coupon_code);
 
    
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://cms.fasttrackvisa.com/api/cupon",
        requestOptions
      );
      const result = await response.json();

      if (result.status === "success") {
        // alert('api success')
        // location.replace("https://fasttrackvisa.com/en-in/checkout/cambodia-business-e-visa/16?cnp=FTVNY");     
          console.log(result);
        const discountAmount = result.data;
        {console.log("discount",discountAmount)}
        this.setState({
          showSuccessMessage: true,
          discountAmount: discountAmount,
          isCouponValid: true,
        });
        console.log(this.state.isCouponValid);

        // Conditionally call getInitialProps with a different URL
        this.fetchCheckoutData(result.status === 'success');
      } else {
        console.log("API request failed with status:", response.status);
        this.setState({
          isCouponValid: false,
          showSuccessMessage: false,
          discountAmount: 0,
        });

        // Conditionally call getInitialProps with a different URL
        this.fetchCheckoutData(false);
      }
    } catch (error) {
      console.error("Error in API request:", error);
      this.setState({
        isCouponValid: false,
        showSuccessMessage: false,
        discountAmount: 0,
      });

      // Conditionally call getInitialProps with a different URL
      // this.fetchCheckoutData(false);
    }
  };

  async fetchCheckoutData(isSuccess) {
    const { country_ext, page_url2 } = this.props;
    const apiUrl = isSuccess
      ? `https://cms.fasttrackvisa.com/api/${country_ext}/checkout/${page_url2}/FTVNY`
      : `https://cms.fasttrackvisa.com/api/${country_ext}/checkout/${page_url2}`;

    const res = await fetch(apiUrl);
    console.log("response", res);
    const checkoutpage = await res.json();
    console.log("checkout", checkoutpage);

    if (res.status === 200) {
      // Update your component state or perform other actions based on the API response
      
    }
  }


  


  static async getInitialProps(context) {
    const country_ext = context.query.c_id;
    const page_url = context.query.checkout_inid;
    const page_url2 = context.query.checkoutpage;
    console.log("country_ext", country_ext);
    console.log("page_url2", page_url2);
    
    const res = await fetch(
      `https://cms.fasttrackvisa.com/api/${country_ext}/checkout/${page_url2}`
    );
  
    // const res = await fetch(
    //   `https://cms.fasttrackvisa.com/api/${country_ext}/checkout/${page_url2}/FTVNY`
    // );
    // const res = await fetch(`https://cms.fasttrackvisa.com/api/checkout/5`)
    console.log("country_ext", country_ext);
    console.log("page_url2", page_url2);
    console.log("response", res);
    const checkoutpage = await res.json();
    console.log("checkout", checkoutpage);
    if (res.status === 200) {
      const apistatus = res.status;
      return {
        checkoutpage,
        country_ext,
        page_url,
        page_url2,
      };
    } else {
      return {
        checkoutpage,
        country_ext,
        page_url,
        page_url2,
      };
    }
  }

  componentDidMount() {
    this.addFormFields();
    this.setState({
      p_origin: localStorage.getItem("origin"),
    });

    this.setState({
      checkoutpage: this.props.checkoutpage[0],
    });
    var AirportofArrival = [];

    for (let i = 0; this.props.checkoutpage[0].arival_airport.length > i; i++) {
      AirportofArrival.push({
        value: this.props.checkoutpage[0].arival_airport[i].city,
        label: this.props.checkoutpage[0].arival_airport[i].airport,
      });

      if (
        this.props.checkoutpage[0].arival_airport.length ===
        AirportofArrival.length
      ) {
        this.setState({ options: AirportofArrival });
        this.addFormFields();
      }
    }

    window.addEventListener("scroll", () => {
      let activeClass = "hsticky";
      if (window.scrollY === 0) {
        activeClass = "top";
      }
      this.setState({ activeClass });
    });
  }

  openLoginModal = (e) => {
    this.setState({ showModal: true });
  };

  setTravellerDate = (i, e, name) => {
    let traveler_info = this.state.traveler_info;
    traveler_info[i][name] = e;
    this.setState({ traveler_info });
  };

  addFormFields = () => {
    if (localStorage.getItem("loginDetails") === null) {
      var loginDetails = {
        provider_id: "",
        provider: "",
        name: "",
        email: "",
        mobile_number: "",
      };
      localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
    }
    // console.log(this.state.traveler_info.length);
    var isAddData = false;
    if (this.state.traveler_info.length > 0) {
      for (let i = 0; this.state.traveler_info.length > i; i++) {
        if (
          this.isEmpty(this.state.traveler_info[i].First_Name) &&
          this.isEmpty(this.state.traveler_info[i].Last_Name) &&
          this.isEmpty(this.state.traveler_info[i].Phone_Number) &&
          this.isEmpty(this.state.traveler_info[i].Email) &&
          this.isEmpty(this.state.traveler_info[i].City) &&
          this.isEmpty(this.state.traveler_info[i].Address)
        ) {
          if (this.state.traveler_info.length - 1 === i) {
            isAddData = true;
          }
        }
      }
    } else {
      var loginDetails = JSON.parse(localStorage.getItem("loginDetails"));
      if (loginDetails.email === null) {
        loginDetails.email = "";
      }

      if (loginDetails) {
        this.setState({
          traveler_info: [
            ...this.state.traveler_info,
            {
              First_Name: loginDetails?.name_of_agency?.split(" ")[0],
              Last_Name: loginDetails?.name_of_agency?.split(" ")[1],
              AirportOf_Arrival: "",
              Phone_Number: loginDetails?.mobile_number,
              Email: loginDetails?.email,
              City: "",
              Address: this.props.checkoutpage[0].country_site,
            },
          ],
        });
      }
    }
    if (isAddData) {
      this.setState({
        traveler_info: [
          ...this.state.traveler_info,
          {
            First_Name: "",
            Last_Name: "",
            AirportOf_Arrival: "",
            Phone_Number: "",
            Email: "",
            City: "",
            Address: this.props.checkoutpage[0].country_site,
          },
        ],
      });
      this.state.travellerCount++;
    }
    setTimeout(() => {
      this.setState({ showAlert: false });
    }, 1500);
  };

  handleChange(i, e) {
    let traveler_info = this.state.traveler_info;
    traveler_info[i][e.target.name] = e.target.value;
    this.setState({ traveler_info });
  }

  removeTravellar = () => {
    //  console.log("remove")
    if (this.state.traveler_info.length > 1) {
      this.state.traveler_info.splice(this.state.traveler_info.length - 1, 1);
      //   console.log(this.state.traveler_info.length);
      this.state.travellerCount--;
      let travellerCount = this.state.travellerCount;
      let traveler_info = this.state.traveler_info;
      this.setState({ traveler_info, travellerCount });
    }
  };

  isEmpty = (string) => {
    if (string !== null && string !== undefined && string !== "") {
      return true;
    } else {
      this.setState({ showAlert: true });
      return false;
    }
  };

  showPopop = () => {
    this.setState({ showModal: true });
  };

  Coupon_code = (e) => {
    this.setState({ Coupon_code: e.target.value });
  };



  CheckCode_code = () => {
    if (document.getElementById("coupon").value == "") {
      document.getElementById("coupon").focus();
      return false;
    }

    if (this.state.Coupon_code == this.props.checkoutpage[0].coupon_code) {
      this.setState({ fCoupon_code: this.state.Coupon_code });

      document.getElementById("Discount_code").style.display = "flex";

      document.getElementById("success_coupon").style.display = "block";
      document.getElementById("error_coupon").style.display = "none";

      setTimeout(function () {
        document.getElementById("error_coupon").style.display = "none";
      }, 5000);
    } else {
      document.getElementById("success_coupon").style.display = "none";
      document.getElementById("Discount_code").style.display = "none";
      document.getElementById("error_coupon").style.display = "block";
      setTimeout(function () {
        document.getElementById("error_coupon").style.display = "none";
        document.getElementById("success_coupon").style.display = "none";
        document.getElementById("Discount_code").style.display = "none";
      }, 5000);
    }
  };

  calculateTotal = () => {
    return this.props.checkoutpage[0].price * this.state.travellerCount;
  };

  submitTravellerInfo = () => {
    sessionStorage.setItem("visaPrice", this.props.checkoutpage[0].price);
    sessionStorage.setItem(
      "finalAmount",
      this.props.checkoutpage[0].price * 100 * 1
    );
    sessionStorage.setItem(
      "currency",
      this.props.checkoutpage[0].currency_code
    );
    // sessionStorage.setItem('traveler_info', JSON.stringify(this.state.traveler_info));
    // sessionStorage.setItem('checkoutpage', JSON.stringify(this.props.checkoutpage[0]));

    //  Math.round((this.props.checkoutpage[0].price * this.state.travellerCount)- ((this.props.checkoutpage[0].price * this.state.travellerCount ))*(this.props.checkoutpage[0].coupon_code_discount) / 100)

    sessionStorage.setItem("ProductId", this.props.page_url2);
    // this.setState({showModal: true})
    //this.setState({isContinueToPayment: true});
    for (let c = 0; this.state.traveler_info.length > c; c++) {
      if (
        this.isEmpty(this.state.traveler_info[c].First_Name) &&
        this.isEmpty(this.state.traveler_info[c].Last_Name) &&
        this.isEmpty(this.state.traveler_info[c].Phone_Number) &&
        this.isEmpty(this.state.traveler_info[c].Email) &&
        this.isEmpty(this.state.traveler_info[c].City) &&
        this.isEmpty(this.state.traveler_info[c].Address)
      ) {
        if (this.state.traveler_info.length - 1 === c) {
          this.setState({ showAlert: false });

          var user_id = JSON.parse(localStorage.getItem("loginDetails")).id;

          if (localStorage.getItem("origin") === null) {
            var origin = this.props.checkoutpage[0].country_site;
            var citizen_of = this.props.checkoutpage[0].country_site;
          } else {
            var citizen_of =
              localStorage.getItem("origin") !== null
                ? localStorage.getItem("origin")
                : null;
            var origin = [
              localStorage.getItem("origin") !== null
                ? localStorage.getItem("origin")
                : null,
            ];
          }

          if (localStorage.getItem("destination") === null) {
            var destination = this.props.checkoutpage[0].country;
          } else {
            var destination =
              localStorage.getItem("destination") !== null
                ? localStorage.getItem("destination")
                : null;
          }

          var total_amount;
          const { checkoutpage } = this.props;
          const embassyFees =
            checkoutpage[0].embassey_fee * this.state.travellerCount;
          const processingFees =
            (checkoutpage[0].price - checkoutpage[0].embassey_fee) *
            this.state.travellerCount;
          const totalFees = embassyFees + processingFees;
      
          const discountedTotalFees =
            totalFees * (1 - this.state.discountAmount / 100);
          if (this.state.isCouponValid) {
            var coupon_code = this.props.checkoutpage[0].coupon_code;
            var discount_price = Math.round(
              (this.props.checkoutpage[0].coupon_code_discount / 100) *
                (this.props.checkoutpage[0].price -
                  this.props.checkoutpage[0].embassey_fee) *
                this.state.travellerCount
            );
            total_amount = Math.round(
              checkoutpage[0].embassey_fee * this.state.travellerCount +
                (checkoutpage[0].price - checkoutpage[0].embassey_fee) *
                  this.state.travellerCount -
                this.state.discountAmount
            );
          } else {
            var coupon_code = "";
            var discount_price = "";
            total_amount = this.props.checkoutpage[0].price * 100;
            var total_amount_vp = this.props.checkoutpage[0].price;
          }
          {console.log("total",total_amount)}
          var no_of_pax = this.state.traveler_info.length;
          const data = new FormData();
          data.append("id", this.props.page_url2);
          data.append("no_of_pax", this.state.traveler_info.length);
          data.append("total_amount", total_amount * no_of_pax);
          data.append("coupon_code", coupon_code);
          data.append("discount_price", discount_price);
          data.append("destination", destination);
          data.append("user_id", user_id);

          for (let i = 0; this.state.traveler_info.length > i; i++) {
            data.append("fname[]", this.state.traveler_info[i].First_Name);
            data.append("lname[]", this.state.traveler_info[i].Last_Name);
            data.append("origin[]", origin);
            data.append("citizen_of", citizen_of);
            data.append("email_id[]", this.state.traveler_info[i].Email);
            data.append("phone[]", this.state.traveler_info[i].Phone_Number);
            data.append(
              "d_o_a[]",
              moment(this.state.traveler_info[i].Arrival).format("DD/MM/yyyy")
            );
            data.append(
              "d_o_t[]",
              moment(this.state.traveler_info[i].Departure).format("DD/MM/yyyy")
            );
            data.append("city[]", this.state.traveler_info[i].City);
            data.append("address[]", this.state.traveler_info[i].Address);
          }

          let url = `https://cms.fasttrackvisa.com/api/${this.props.country_ext}/success`;
          console.log(url);
          axios
            .post(
              url,
              data,
              {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "multipart/form-data",
                },
              },
              {}
            )
            .then((res) => {
              sessionStorage.setItem("order_id", res.data.order_id);
              sessionStorage.setItem("ProductId", this.props.page_url2);
              sessionStorage.setItem("cId", this.props.country_ext);
              var userEmail = JSON.parse(
                localStorage.getItem("loginDetails")
              ).email;
              var propPayentData = {
                finalAmount: total_amount * no_of_pax,
                // visaPrice: total_amount_vp * no_of_pax,
                visaPrice: this.state.isCouponValid
                  ? total_amount
                  : total_amount_vp * no_of_pax,
                currency: this.props.checkoutpage[0].currency_code,
                ProductId: this.props.page_url2,
                order_id: res.data.order_id,
                email:
                  userEmail != null
                    ? userEmail
                    : this.state.traveler_info[0].Email,
              };
              {console.log("amount",propPayentData.finalAmount)}
              const finalAmount = propPayentData.finalAmount > 10000 ? propPayentData.finalAmount : `${propPayentData.finalAmount}00`
              fetch("/api/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                  items: [{ finalAmount: finalAmount, 'currency': propPayentData?.currency}] }),
              })
                .then((res) => res.json())
                .then((data) => { this.setState({clientSecret:data.clientSecret})});
                // .then((data) => {console.log(data,"data===")});

              this.setState({
                paymentData: propPayentData,
                showModal: false,
                isContinueToPayment: true,
              });
            })
            .catch((error) => {
              console.log("error", error);
            });
        }
      }
    }
  };

  handleCallback = (loginStatue) => {
    //console.log(loginStatue);
    this.setState({ isContinueToPayment: false });
  };

  render() {
    var settings = {
      dots: true,
      nav: false,
      infinite: true,
      lazyLoad: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
    };

    const { isCouponValid, showSuccessMessage, discountAmount } = this.state;
    const { checkoutpage } = this.props;
    const embassyFees =
      checkoutpage[0].embassey_fee * this.state.travellerCount;
    // console.log("em", embassyFees);
    const processingFees =
      (checkoutpage[0].price - checkoutpage[0].embassey_fee) *
      this.state.travellerCount;
    const totalFees = embassyFees + processingFees;
    // {console.log("total",totalFees);}
    const discountedTotalFees =
      totalFees * (1 - this.state.discountAmount / 100);
    const roundedDiscountedTotalFees = Math.round(discountedTotalFees);
    {console.log("total",discountedTotalFees);}
    return (
      <>
        <header className={"App-header" + ` ${this.state.activeClass}`}>
          <Nav
            ce_name={this.props.country_ext}
            meta_title={this.props.checkoutpage[0].title}
            meta_desc={this.props.checkoutpage[0].title}
            meta_keyword=""
            meta_img="/img/logo.png"
            meta_url={
              "/checkout/" + this.props.page_url + "/" + this.props.page_url2
            }
          >
            {" "}
          </Nav>
        </header>

        <div className="checkout_banner">
          <Container>
            <h1> {this.props.checkoutpage[0].title} </h1>

            {/* <p>Get a complimentary eSIM Card worth $ 9<sup>99</sup> with each [countryname] eVisa</p> */}
          </Container>
        </div>

        <Container>
          <ol className="breadcrumb pl-0 bg-white">
            <li className="breadcrumb-item">
              <Link href={"/" + this.props.country_ext}>
                <a>Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item">
              <a>Checkout</a>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              {" "}
              {this.props.checkoutpage[0].title}{" "}
            </li>
          </ol>

          <div className="desi-work-container pt-4">
            <Row className="">
              <Col className="TravelerOneInformations" sm={12} md={8} lg={8}>
                <form>
                  <div>
                    {this.state.traveler_info.map((element, index) => (
                      <div key={index}>
                        <h3 className="mb-0 mt-3 d-flex justify-content-between">
                          Traveler Informations
                          <span>
                            {this.state.travellerCount > 1 && index > 0 ? (
                              <button
                                type="button"
                                className="btn btn-sm btn-danger"
                                onClick={this.removeTravellar}
                              >
                                Remove
                              </button>
                            ) : (
                              ""
                            )}
                          </span>
                        </h3>
                        <Row className="gutters5">
                          <Col sm={6}>
                            <div className="ftv-field">
                              <label htmlFor="input1a">First Name*</label>
                              <input
                                type="text"
                                className="form-control"
                                name="First_Name"
                                placeholder="Here"
                                value={element.First_Name || ""}
                                onChange={(e) => this.handleChange(index, e)}
                              />
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="ftv-field">
                              <label htmlFor="input2a">Last Name*</label>
                              <input
                                type="text"
                                className="form-control"
                                name="Last_Name"
                                placeholder="Here"
                                value={element.Last_Name}
                                onChange={(e) => this.handleChange(index, e)}
                              />
                            </div>
                          </Col>
                        </Row>
                        <h3 className="mt-5 mb-0">Contact</h3>
                        <Row className="gutters5">
                          <Col sm={6}>
                            <div className="ftv-field">
                              <label htmlFor="input1a">Phone Number*</label>
                              <Mob_nflag
                                country_ext={this.props.country_ext}
                              ></Mob_nflag>
                              <input
                                id="input1a"
                                type="tel"
                                maxLength="10"
                                className="form-control phoneinput"
                                name="Phone_Number"
                                placeholder="Here"
                                value={element.Phone_Number}
                                onChange={(e) => this.handleChange(index, e)}
                              />
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="ftv-field">
                              <label htmlFor="input2a">E-mail*</label>
                              <input
                                id="input2a"
                                type="email"
                                className="form-control"
                                name="Email"
                                placeholder="Here"
                                value={element.Email}
                                onChange={(e) => this.handleChange(index, e)}
                              />
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="ftv-field">
                              <label htmlFor="input3">City*</label>
                              <input
                                id="input3"
                                type="text"
                                className="form-control"
                                name="City"
                                placeholder="Here"
                                value={element.City}
                                onChange={(e) => this.handleChange(index, e)}
                              />
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="ftv-field">
                              <label htmlFor="input3">Nationality*</label>
                              <input
                                id="input3"
                                type="text"
                                className="form-control"
                                name="Address"
                                placeholder="Here"
                                value={element.Address}
                                onChange={(e) => this.handleChange(index, e)}
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    ))}

                    <Modal
                      show={this.state.showModal}
                      size="lg"
                      onHide={() => this.setState({ showModal: false })}
                      dialogClassName="review_modal"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Review Application</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Accordion defaultActiveKey="0">
                          {this.state.traveler_info.map((element, index) => (
                            <Card key={index}>
                              <Card.Header>
                                <Accordion.Toggle
                                  as={Button}
                                  variant="link"
                                  eventKey={index.toString()}
                                >
                                  {element.First_Name} {element.Last_Name}
                                </Accordion.Toggle>
                              </Card.Header>
                            </Card>
                          ))}
                        </Accordion>
                      </Modal.Body>
                    </Modal>
                  </div>

                  {this.state.showAlert ? (
                    <>
                      {" "}
                      <br />{" "}
                      <Alert key="warning" variant="warning">
                        {" "}
                        Some field is empty/null.
                      </Alert>{" "}
                    </>
                  ) : (
                    ""
                  )}

                  {this.state.travellerCount <= 5 ? (
                    <button
                      className="btn3 d-block w-100 mt-4"
                      type="button"
                      onClick={this.addFormFields}
                    >
                      + Add Traveller
                    </button>
                  ) : (
                    <button className="btn3 d-block w-100 mt-4" type="button">
                      + You can Add Max 5 Traveller
                    </button>
                  )}

                  <button
                    className="btn4 d-block w-100 mt-4"
                    type="button"
                    onClick={this.submitTravellerInfo}
                  >
                    Continue to Payment
                  </button>
                </form>

                <div className="text-center mt-4">
                  <Image
                    src="/img/secure-stripe-payment.png"
                    fill="true"
                    height={74}
                    width={500}
                  />
                </div>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <div className="card">
                  <div className="card-header bg-white">
                    <h3 className="d-flex justify-content-between">
                      Order Summary{" "}
                      <span className="small">
                        {this.state.travellerCount >= 1
                          ? "" + this.state.travellerCount
                          : " "}{" "}
                        pax
                      </span>
                    </h3>
                  </div>
                  <figure>
                    {" "}
                    <Image
                      alt={this.props.checkoutpage[0].title}
                      sizes="(max-width: 500px) 30vw"
                      src={
                        "https://ik.imagekit.io/vs4gypuhi/" +
                        this.props.checkoutpage[0].imageurl
                      }
                      fill="true"
                      height={254}
                      width={381}
                    />
                  </figure>
                  <ul className="plan-Summary">
                    <li className="planname">
                      {this.props.checkoutpage[0].title}
                    </li>
                    <li>
                      <div className="card card-body p-2 mb-2">
                        {this.props.checkoutpage[0].duration} Single Entry Visa
                      </div>
                    </li>
                    <li className="d-flex">
                      <span>Embassy Fees</span>{" "}
                      <span className="font-weight-bold">
                        {" "}
                        {this.props.checkoutpage[0].currency_icon}{" "}
                        {this.props.checkoutpage[0].embassey_fee *
                          this.state.travellerCount}{" "}
                      </span>
                    </li>

                    <li className="d-flex">
                      <span>Processing Fees</span>{" "}
                      <span className="font-weight-bold">
                        {" "}
                        {this.props.checkoutpage[0].currency_icon}{" "}
                        {(this.props.checkoutpage[0].price -
                          this.props.checkoutpage[0].embassey_fee) *
                          this.state.travellerCount}{" "}
                      </span>
                    </li>

                    <li
                      id="Discount_code"
                      className="justify-content-between"
                      style={{
                        display: this.state.showSuccessMessage
                          ? "flex"
                          : "none",
                      }}
                    >
                      <span>Discount </span>
                      <span className="font-weight-bold">
                        - {this.props.checkoutpage[0].currency_icon}{" "}
                        {this.state.discountAmount}
                      </span>
                    </li>

                    {isCouponValid ? (
                      <li className="d-flex">
                        <span>Total Fees</span>
                        <strong>
                          {this.props.checkoutpage[0].currency_icon}{" "}
                          {Math.round(totalFees - this.state.discountAmount)}
                        </strong>
                      </li>
                    ) : (
                      <li className="d-flex">
                        <span>Total Fees</span>
                        <strong>
                          {this.props.checkoutpage[0].currency_icon} {totalFees}{" "}
                        </strong>
                      </li>
                    )}
                    <li>
                      <div className="ftv-field promocode">
                        <label htmlFor="coupon">Promo Code</label>
                        <input
                          type="text"
                          className="form-control file"
                          placeholder="Enter Here"
                          value={this.state.Coupon_code}
                          onChange={this.Coupon_code}
                          name="coupon"
                          id="coupon"
                        />
                        <button className="btn" onClick={this.onApply}>
                          Apply
                        </button>
                      </div>
                      {isCouponValid ? (
                        <>
                          <p
                            className="text-success pt-2"
                            id="success_coupon"
                            style={{
                              display: isCouponValid ? "block" : "none",
                            }}
                          >
                            Coupon Applied. You just saved (
                            {this.props.checkoutpage[0].currency_icon}){" "}
                            {this.state.discountAmount}{" "}
                          </p>
                        </>
                      ) : (
                        <p
                          className="text-danger pt-2"
                          id="error_coupon"
                          style={{ display: isCouponValid ? "none" : "block" }}
                        >
                          Invalid Coupon.
                        </p>
                      )}
                    </li>

                    <li className="pd">Processing details</li>
                    <li className="d-flex">
                      <span>Citizenship</span>{" "}
                      <span>{this.props.checkoutpage[0].country_site}</span>
                    </li>

                    <li className="d-flex">
                      <span>Destination</span>{" "}
                      <span>{this.props.checkoutpage[0].country}</span>
                    </li>
                    <li className="d-flex">
                      <span>Visa Type</span>{" "}
                      <span>{this.props.checkoutpage[0].type}</span>
                    </li>
                    <li className="d-flex">
                      <span>As fast as</span>{" "}
                      <span>{this.props.checkoutpage[0].tat}</span>
                    </li>
                    <li className="d-flex">
                      <span>Duration of stay</span>{" "}
                      <span>up to {this.props.checkoutpage[0].duration}</span>
                    </li>

                    <li className="faq-page pb-0">
                      <Accordion defaultActiveKey="0">
                        <Accordion.Toggle
                          as={Card.Header}
                          className="pl-0 font-weight-bold"
                          eventKey="0"
                        >
                          Specific Rule
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                          <div className="pt-1 pb-2">
                            {this.props.checkoutpage[0].specificrule === null
                              ? ""
                              : ReactHtmlParser(
                                  this.props.checkoutpage[0].specificrule
                                )}
                          </div>
                        </Accordion.Collapse>

                        <Accordion.Toggle
                          as={Card.Header}
                          className="pl-0 font-weight-bold"
                          eventKey="1"
                        >
                          General Information
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                          <div className="pt-1 pb-0">
                            {this.props.checkoutpage[0].grule === null
                              ? ""
                              : ReactHtmlParser(
                                  this.props.checkoutpage[0].grule
                                )}
                          </div>
                        </Accordion.Collapse>
                      </Accordion>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <LazyLoad offset={100}>
          <Footer ce_name={this.props.country_ext}></Footer>
        </LazyLoad>
        {/* {console.log(this.state.clientSecret)}; */}
        {this.state.isContinueToPayment === true && this.state.clientSecret ? (
        <Elements options={{clientSecret:this.state.clientSecret,loader}} stripe={stripePromise}>
          <Payment
            paymentData={this.state.paymentData}
            handleCallback={this.handleCallback}
          />
          </Elements>
        ) : (
          ""
        )}
      </>
    );
  }
}
export default Checkoutpagein;
