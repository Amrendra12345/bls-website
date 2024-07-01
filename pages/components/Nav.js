import Link from 'next/link'
import Head from 'next/head'
import React, { useEffect, useState, createRef } from 'react';
import Image from 'next/image'
import Router from 'next/router';
import Login from '../login/login';
import Curr_list from '../components/Curr_List';
import Country_dd from '../components/Country_dd';
import Lang_dsp from '../components/Lang_dsp';
import Lang_dd from '../components/Lang_dd';
import { useSession, signOut } from "next-auth/react";
import axios from 'axios';
import { Html } from 'next/document';


const Nav = (props) => {
  const { data: session } = useSession();
  const [isActive, setIsActive] = useState(false);
  const [userName, setUserName] = useState(null);
  const [uName, setuName] = useState(null);

  const [show, setShow] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShow = () => setShow(true);
  const handleShowSignUp = () => setShowSignUp(true);
  const nextAuthUrl = 'https://fasttrackvisa.com';

  useEffect(() => {
    // console.log('test', session?.user.email)
    if (localStorage.getItem('loginDetails') !== null) {
      var loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
      if (loginDetails.email !== '' && loginDetails.email !== null && loginDetails.email !== undefined) {
      } else if (loginDetails.mobile_number !== '' && loginDetails.mobile_number !== null && loginDetails.mobile_number !== undefined) {
      } else {
        isCheckoutPage(true);
      }
    } else {
      var loginDetails = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
      localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
    }


    axios.get('https://cms.fasttrackvisa.com/api' + (props.ce_name === '' ? '' : '/' + props.ce_name) + '/staticcontent').then(res => {
      // console.log(res)
      if (res.status === 200) {
        localStorage.setItem('staticContent', JSON.stringify(res.data));

      }
    })


  }, [])

  useEffect(() => {
    var loginDetails = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
    if (localStorage.getItem('loginDetails') !== null) {
      loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
      if (loginDetails.email !== '' && loginDetails.email !== null && loginDetails.email !== undefined) {
        setUserName(loginDetails.email)
      } else if (loginDetails.mobile_number !== '' && loginDetails.mobile_number !== null && loginDetails.mobile_number !== undefined) {
        setUserName(loginDetails.mobile_number)
      }
      if (loginDetails.name_of_agency !== '' && loginDetails.name_of_agency !== null && loginDetails.name_of_agency !== undefined) {
        setuName(loginDetails.name_of_agency)
      }
    } else {
      localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
    }
  })

  useEffect(() => {
    setTimeout(() => {
      // console.log('sssion', session?.user.email);
      if (session !== undefined && session !== null && userName === null) {
        var loginDetails = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
        setUserName(session?.user?.name);
        setuName(session?.user?.name);
        loginDetails.email = session?.user?.email;
        loginDetails.name = session?.user?.name;
        //  console.log('loginDetails,', loginDetails);
        axios.post('https://cms.fasttrackvisa.com/api' + (props.ce_name === '' ? '' : '/' + props.ce_name) + '/user-login', loginDetails).then(res => {
          //alert("nav")
          if (res.status === 200) {
            localStorage.setItem('loginDetails', JSON.stringify(res.data.data));
            const url = props.meta_url.split("/");
            var checkOut = url.find(u => u == 'checkout' || u == 'my-profile' || u == 'success');
            if (checkOut) {
              setShow(false);
            }
          }
        })
        // console.log("load nav...", loginDetails)
      }
    }, 1)
  }, [session])

  const isCheckoutPage = (status) => {
    if (userName === null || userName === undefined || userName === '') {
      const url = props.meta_url.split("/");
      var checkOut = url.find(u => u == 'checkout' || u == 'my-profile' || u == 'success');
      // console.log(userName,status, checkOut, (status && checkOut), (!status && !checkOut))
      if (status && checkOut && session?.user.email != '') {
        setShow(true);
        login();
      }
      else if (!status && checkOut && session == null) {
        if (props.ce_name != '') {
          Router.push('/' + props.ce_name)
        } else {
          Router.push("/");
        }

      }
    }
  }

  const login = () => {
    if (show === true) {
      setShow(false);
      setTimeout(() => {
        setShow(true);
      }, 100)
    } else {
      setShow(true);
    }
  }

  const logOut = () => {
    var loginDetail = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
    localStorage.setItem('loginDetails', JSON.stringify(loginDetail));
    console.log('setTimeout')
    if (props.ce_name != '') {
      if (props?.handleCallback) {
        props?.handleCallback(false);
        Router.push('/' + props.ce_name);
      } else {
        Router.push('/' + props.ce_name)
      }
    }
    else {
      if (props?.handleCallback) {
        props?.handleCallback(false);
        Router.push('/')
      } else {
        Router.push('/')
      }
    }
    if (session != undefined && session != null) {
      setTimeout(() => {
        signOut();
        setUserName(null);
        setuName(null);
      }, 1);
      if (props.ce_name != '') {
        Router.push('/' + props.ce_name);
      } else {
        Router.push('/')
      }
    }
  }

  const Showhidenav = event => {
    setIsActive(current => !current);
  };




  const handleCallback = (loginStatue) => {
    console.log(loginStatue)
    if (loginStatue) {
      if (props?.handleCallback) {
        props?.handleCallback(true)
      }
      var loginDetails = { provider_id: '', provider: '', name: '', email: '', mobile_number: '' };
      if (JSON.parse(localStorage.getItem('loginDetails')) !== null) {
        loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
        if (loginDetails.email !== '' && loginDetails.email !== null && loginDetails.email !== undefined) {
          setUserName(loginDetails.email)
        } else if (loginDetails.mobile_number !== '' && loginDetails.mobile_number !== null && loginDetails.mobile_number !== undefined) {
          setUserName(loginDetails.mobile_number)
        }
      }
    } else {
      isCheckoutPage(false);
    }
  }

  return (

    <>
      <Head>
         <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PSNXH65');`}}></script> 

        <meta charSet="utf-8" />
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" crossOrigin="true" />
        <link rel="preconnect" href="//fonts.gstatic.com" crossOrigin="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link href="//fonts.googleapis.com/css2?family=Fira+Sans:wght@700&Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="/css/font-awesome-4.7.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/ftv_styles.css" />
        <link rel="stylesheet" type="text/css" href="/css/flags.min.css" />
        <meta name="theme-color" content="#245cc1" />

        {props.ce_name == '' ?
          <>

            <title>{props.meta_title}</title>
            <meta name="description" content={props.meta_desc} />

            <meta name="keywords" content={props.meta_keyword} />

            <meta property="og:title" content={props.meta_title} />
            <meta property="og:description" content={props.meta_desc} />

            <meta property="og:keywords" content={props.meta_keyword} />

            <meta property="og:image" content={props.meta_img} />
            <meta property="og:url" content={'/' + props.meta_url} />

            <meta property="og:type" content="Article" />
            <meta property="og:site_name" content="FastTrackVisa.com" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@FastTrackVisa" />
            <meta name="twitter:creator" content="@FastTrackVisa" />

            <meta name="twitter:image" content={props.meta_img} />
            <meta name="twitter:title" content={props.meta_title} />
            <meta name="twitter:description" content={props.meta_desc} />
            <meta name="twitter:url" content={'/' + props.meta_url} />
            {/* <link rel="canonical" href={'/' + props.meta_url} /> */}
            

          </>

          :
          <>


            <title>{props.meta_title}</title>
            <meta name="description" content={props.meta_desc} />
            <meta name="keywords" content={props.meta_keyword} />
            <meta property="og:title" content={props.meta_title} />
            <meta property="og:description" content={props.meta_desc} />
            <meta property="og:keywords" content={props.meta_keyword} />
            <meta property="og:image" content={props.meta_img} />
            <meta property="og:url" content={'/' + props.ce_name + props.meta_url} />
            <meta property="og:type" content="Article" />
            <meta property="og:site_name" content="FastTrackVisa.com" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@FastTrackVisa" />
            <meta name="twitter:creator" content="@FastTrackVisa" />
            <meta name="twitter:image" content={props.meta_img} />
            <meta name="twitter:title" content={props.meta_title} />
            <meta name="twitter:description" content={props.meta_desc} />

            <meta name="checkout" content="https://fasttrackvisa.com/en-in/checkout/cambodia-business-e-visa/16?cnp=FTVNY"/>
            <meta name="twitter:url" content={'/' + props.ce_name + props.meta_url} />
            {/* <link rel="canonical" href={'/' + props.ce_name + props.meta_url} /> */}
            <link rel="canonical" href={`${nextAuthUrl}/${props.ce_name}${props.meta_url}`} />

          </>}


        <meta name="google-site-verification" content="L0_50ckD83y8UrprubZ2rY3vo-2RucflVhKVAi_qSrg" />
      </Head>

      <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSNXH65"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>` }}></noscript>


      <div className="container dflex position-relative">
        <div className="d-flex">
          <span className="navbtn" onClick={Showhidenav}><i className='fa fa-bars'></i></span>
          {props.ce_name === '' ? <Link href={'/'}>
            <a className="navbar-brand">
              <Image priority alt="Fast Track Visa" src={'/img/logo.png'} width={209} height={56} />
            </a>
          </Link> : <Link href={'/' + props.ce_name}>
            <a className="navbar-brand"> <Image priority alt="Fast Track Visa" src={'/img/logo.png'} width={209} height={56} /> </a>
          </Link>}

        </div>
        <nav className={isActive ? 'active_nav w-100' : 'w-100'}>
          <ul className="nav navbar">


            <li className='cdd ml-auto'>
              <Curr_list country_ext={props.ce_name}></Curr_list>
              <Country_dd country_ext={props.ce_name}></Country_dd>

            </li>

            <li className='cdd'>

              <Lang_dsp country_ext={props.ce_name}></Lang_dsp>
              <Lang_dd country_ext={props.ce_name}></Lang_dd>


            </li>
          </ul>
        </nav>
        <ul className="myac_nav">
          {userName !== null && userName !== undefined && userName !== '' ?
            <li className='cdd'>
              <a><i className='fa fa-user-circle'></i>
                {uName === null || userName === undefined || userName === '' ?
                  ' Hi User'
                  : ' ' + uName || userName
                }</a>
              {props.ce_name === '' ?
                <div className='cn_dd'>
                  <Link href={'/my-profile'}><a><i className='fa fa-user'></i> My Profile</a></Link>
                  <Link href={'/my-profile/my-transactions'}><a><i className='fa fa-list'></i> My Transaction</a></Link>
                  <a onClick={logOut}><i className='fa fa-sign-out'></i> Log Out</a>
                </div>

                :
                <div className='cn_dd'>
                  <Link href={'/' + props.ce_name + '/my-profile'}><a><i className='fa fa-user'></i> My Profile</a></Link>
                  <Link href={'/' + props.ce_name + '/my-profile/my-transactions'}><a><i className='fa fa-list'></i> My Transaction</a></Link>
                  <a onClick={logOut}><i className='fa fa-sign-out'></i> Log Out</a>

                </div>
              }

            </li>
            :

            <li>
              {/* <Link href={'/login/login'}><a>Sign In</a></Link> */}
              <a onClick={login}>Sign In</a>
            </li>
          }
        </ul>
      </div>

      {show === true ? <Login ce_name={props.ce_name} handleCallback={handleCallback} /> : ''}


    </>
  )
}
export default Nav
