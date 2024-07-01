import React, { useEffect, useState, createRef } from 'react';
import FacebookLogin from 'react-facebook-login'; 
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import { signIn } from "next-auth/react";



const Login = (props, { handleCallback }) => {
    var loginDetails = {}
    const [userName, setUserName] = useState(null);

    const [showSignUp, setShowSignUp] = useState(true);
    const handleShowSignUp = () => setShowSignUp(true);
    let loginInput = createRef();
    let signUpInputName = createRef();
    let signUpInputEmail = createRef();
    let signUpInputMobile = createRef();


    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleCloseSignUp = () => setShowSignUp(false);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('loginDetails')) !== null) {
            var loginDetails = { provider_id: '', provider: '', name: '', email: '', phone: '' };
            loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
            if (loginDetails.email !== null && loginDetails.email !== '' && loginDetails.phone !== null && loginDetails.phone !== '') {
                // setUserName(loginDetails.email)
            }
        }
    }, [])

    const responseFacebook = (response) => {
        // console.log(response);
        if (response !== (null && undefined && '')) {
            loginDetails = {
                provider_id: response.id, provider: response.graphDomain, name: response.name, email: response.email, phone: ''
            }
            axios.post('https://cms.fasttrackvisa.com/api' + (props.ce_name === '' ? '' : '/' + props.ce_name) + '/user-login', loginDetails).then(res => {
                //    console.log(res)
                if (res.status === 200) {
                    localStorage.setItem('loginDetails', JSON.stringify(res.data.data));
                    var loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
                    setUserName(loginDetails.email)
                    props.handleCallback(true)
                    handleClose();
                    // console.log(userName)
                }
            })
        }

    }

    
  const popupCenter = (url, title) => {
    const dualScreenLeft = window.screenLeft ?? window.screenX;
    const dualScreenTop = window.screenTop ?? window.screenY;

    const width =
      window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;

    const height =
      window.innerHeight ??
      document.documentElement.clientHeight ??
      screen.height;

    const systemZoom = width / window.screen.availWidth;

    const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
    const top = (height - 550) / 2 / systemZoom + dualScreenTop;

    const newWindow = window.open(
      url,
      title,
      `width=${500 / systemZoom},height=${550 / systemZoom
      },top=${top},left=${left}`
    );

    newWindow?.focus();
  };

    

    const login = () => {
        var loginDetail = { provider_id: '', provider: '', name: '', email: '', phone: '' };
        if (loginInput.current.value.search("@") >= 0 && loginInput.current.value.search(".") >= 0) {
            loginDetail.email = loginInput.current.value;
        }
        //  else {
        //     loginDetail.phone = (loginInput.current.value.length === 10 ? (loginInput.current.value) : '');
        // }
        if (loginDetail.length !== 'undefined' && (loginDetail.email !== '' || loginDetail.phone !== '')) {
            axios.post('https://cms.fasttrackvisa.com/api' + (props.ce_name === '' ? '' : '/' + props.ce_name) + '/user-login', loginDetail).then(res => {
                if (res.status === 200) {
                    localStorage.setItem('loginDetails', JSON.stringify(res.data.data));
                    var loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
                    setUserName(loginDetails.email)
                    props.handleCallback(true)
                    handleClose();
                }
            })
        } else {
            //  console.log('empty')
        }

    }

    const SingUp = () => {
        var loginDetail = { provider_id: '', provider: '', name: '', email: '', phone: '' };
         
        if (signUpInputEmail.current.value.search("@") >= 0 && signUpInputEmail.current.value.search(".") >= 0) {
            loginDetail.email = signUpInputEmail.current.value;
        }

        if (loginDetail.length !== 'undefined' && (loginDetail.email !== '' || loginDetail.phone !== '')) {
            axios.post('https://cms.fasttrackvisa.com/api' + (props.ce_name === '' ? '' : '/' + props.ce_name) + '/user-login', loginDetail).then(res => {
                if (res.status === 200) {
                    localStorage.setItem('loginDetails', JSON.stringify(res.data.data));
                    var loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
                    setUserName(loginDetails.email)
                    props.handleCallback(true)
                    handleClose();
                }
            })
        } else {
            //  console.log('empty')
        }

    }

    const logOut = () => {
        var loginDetail = { provider_id: '', provider: '', name: '', email: '', phone: '' };
        localStorage.setItem('loginDetails', JSON.stringify(loginDetail));
    }

    // const handleCallback = (data) => {
    //     handleClose();
    //     return false;
    // }


    return (
      <>
      
      
      <Modal size="lg" dialogClassName="lsnmodal" backdrop="static"
            keyboard={false} show={show} onHide={handleClose} animation={true}>
            {showSignUp === false ?
                <Modal.Body>
                    <span className="close2 p-3" onClick={() => { props.handleCallback(false), handleClose() }}>
                        &times;
                    </span>
                    <div className="row no-gutters align-items-center">
                        <div className="col-12 col-lg-6 loginimg">
                            <Image alt="Log in"

                                src={'/img/loginimg.jpg'}
                                fill="true"
                                height={1000} width={557}
                            /> </div>
                        <div className="col-12 col-lg-6">
                            <div className="form">
                                <h2 className="mb-1"> Log in</h2>
                                <p className='mb-5'>Welcome back! Please enter your details.</p>
                                <form>

                                    <FacebookLogin
                                        appId="1217349505522568"
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        cssClass="btn btn-smlogin dddface"
                                        buttonText="Login with Facebook"
                                        render={renderProps => (
                                            <button className='btn btn-smlogin facebookbtn' onClick={renderProps.onClick}> Login with Facebook </button>
                                        )}
                                        callback={responseFacebook} />
                                <button className='btn btn-smlogin googlebtn mt-3' onClick={() => popupCenter("/google-signin", "Sign up with Google")} >
                                        Sign In with Google
                                        </button>

                                    {/* <button className='btn btn-smlogin googlebtn mt-3' onClick={() => signIn()}>Login with Google</button> */}

                                    <div className='or'><span>OR</span></div>
                                    <div className="ftv-field">
                                        <label htmlFor="logininput">Email ID</label>
                                        <input id="logininput" name="logininput" type="text" className="form-control" ref={loginInput} placeholder="Here" />
                                    </div>
                                    <a className="buy_btn w-100" id="form-submit-button" type="button" onClick={login}>Submit</a>



                                </form>
                                <p className="mt-5 text-center">If you don't have an account, please  <a onClick={handleShowSignUp}>Sign Up</a></p>


                            </div>
                        </div>
                    </div>


                </Modal.Body>
                :
                <Modal.Body>
                    <span className="close2 p-3" onClick={(event) => { props.handleCallback(false), handleClose() }}>
                        &times;
                    </span>
                    <div className="row no-gutters align-items-center">
                        <div className="col-12 col-lg-6 loginimg"> <Image alt="Log in"

                            src={'/img/loginimg.jpg'}
                            fill="true"
                            height={1000} width={557}
                        /></div>
                        <div className="col-12 col-lg-6">
                            <div className="form">
                                <h2 className="mb-4"> Sign up</h2>

                                <form>

                                    <FacebookLogin
                                        appId="1217349505522568"
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        cssClass="btn btn-smlogin"
                                        textButton="&nbsp;&nbsp; Sign up with Facebook"
                                        render={renderProps => (
                                            <button className='btn btn-smlogin facebookbtn' onClick={renderProps.onClick}> Connect with Facebook</button>
                                        )}
                                        callback={responseFacebook} />
                                         <button className='btn btn-smlogin googlebtn mt-3' onClick={() => popupCenter("/google-signin", "Sign up with Google")} >
                                Sign up with Google
                                        </button>
                                    {/* <button className='btn btn-smlogin googlebtn mt-3' onClick={() => signIn()}>Sign up with Google</button> */}
                                    <div className='or'><span>OR</span></div>
                                    
                                    <div className="ftv-field">
                                        <label htmlFor="signEmailinput">Email</label>
                                        <input id="signEmailinput" name="signEmailinput" type="email" className="form-control" ref={signUpInputEmail} placeholder="Here" />
                                    </div>

                                    <a className="buy_btn w-100" id="form-submit-button" type="button" onClick={SingUp}>Submit</a>



                                </form>
                                <p className="mt-3 mb-1">
                                    <input type={'checkbox'} checked /> I have reviewed the <Link href={props.ce_name === '' ? '' : '/' + props.ce_name + '/privacy-policy'}><a>Privacy Policy*</a></Link>
                                </p>
                                <p><input type={'checkbox'} checked />  I agree to receive alerts via email & SMS*</p>
                                <p className="mt-4 text-center">If you have an account, please  <a onClick={handleCloseSignUp} >Sign In</a></p>


                            </div>
                        </div>
                    </div>


                </Modal.Body>
            }
        </Modal>
      </>
    )
}

export default Login;