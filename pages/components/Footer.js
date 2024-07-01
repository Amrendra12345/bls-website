import Link from 'next/link'
import Image from 'next/image'
const Footer = (props) => {

  return (
    <>
      <footer>
        <div className="container">
          <div className="row mb-5 justify-content-between">
            <div className="col-12 col-md-5">

              <figure>
                <Image alt="fasttrackvisa.com" src={'/img/logo2.png'} width={209} height={56} />

              </figure>

              <div className="row mt-4">
                <div className="col-12 col-sm-6">

                  <h5>UAE Office</h5>
                  <p>ELOB Office No. E2-123F-45
                    Hamriyah Free Zone
                    Sharjah, United Arab Emirates, 52101</p>
                </div>
                <div className="col-12 col-sm-6">

                  <h5>US Office</h5>
                  <p>Suite 80
                    55 West 39th Street
                    New York, USA, 10018</p>
                  <a href='mailto:info@fasttrackvisa.com'>info@fasttrackvisa.com</a>
                </div>

              </div>

              <div className="row mt-4">
                <div className="col-12 col-sm-6">
                  <ul className="slink_ul">
                    <li className="slink_li"><a className="slink" target="_blank" href="https://www.facebook.com/fasttrckvisa" rel="nofollow"><i className="fa fa-facebook"></i></a></li>
                    <li className="slink_li"><a className="slink" target="_blank" href="https://twitter.com/FastrackVisa" rel="nofollow"><i className="fa fa-twitter"></i></a></li>
                    <li className="slink_li"><a className="slink" target="_blank" href="https://www.linkedin.com/company/fasttrack-visa-com" rel="nofollow"><i className="fa fa-linkedin"></i></a></li>
                    <li className="slink_li"><a className="slink" target="_blank" href="https://www.instagram.com/fast.trackvisa/"><i className="fa fa-instagram"></i></a></li>
                    <li className="slink_li"><a className="slink" target="_blank" href="https://www.youtube.com/channel/UCUYzoyrZZ7MSEYYwu2P6-6g"><i className="fa fa-youtube"></i></a></li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6">
                  <figure>
                    <Image alt="card_image" src={'/img/card_image.png'} width={150} height={31} />

                  </figure>
                </div>
              </div>

            </div>

            <div className="col-12 col-md-7 col-lg-6">

              {props.ce_name === '' ?
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <h5>Company  </h5>

                    <ul>
                      <li><Link href={'/about-us'}><a>About Us</a></Link></li>
                      <li><Link href={'/contact-us'}><a>Contact Us</a></Link></li>
                      <li><Link href={'/blog'}><a>Blog</a></Link></li>
                      <li><Link href={'/career'}><a>Career</a></Link></li>
                    </ul>
                  </div>


                  <div className="col-12 col-sm-6">
                    <h5>Others Links  </h5>
                    <ul>
                      <li><Link href={'/sitemap'}><a>Sitemap</a></Link></li>
                      {/* <li><Link href={'/track-your-order'}><a>Track Your Order</a></Link></li> */}

                      <li><Link href={'/terms-and-conditions'}><a>Terms & Conditions</a></Link></li>
                      <li><Link href={'/privacy-policy'}><a>Privacy policy</a></Link></li>
                      <li><Link href={'/refund-and-cancellation'}><a>Refund & cancellation</a></Link></li>
                      <li><Link href={'/disclaimer'}><a>Disclaimer</a></Link></li>
                    </ul>
                  </div>


                </div>
                :

                <div className="row">
                  <div className="col-12 col-sm-6">
                    <h5>Company  </h5>

                    <ul>
                      <li><Link href={'/' + props.ce_name + '/about-us'}><a>About Us</a></Link></li>
                      <li><Link href={'/' + props.ce_name + '/contact-us'}><a>Contact Us</a></Link></li>
                      <li><Link href={'/blog'}><a>Blog</a></Link></li>
                      <li><Link href={'/' + props.ce_name + '/career'}><a>Career</a></Link></li>
                    </ul>
                  </div>


                  <div className="col-12 col-sm-6">
                    <h5>Others Links  </h5>
                    <ul>
                      <li><Link href={'/' + props.ce_name + '/sitemap'}><a>Sitemap</a></Link></li>
                      {/* <li><Link href={'/' + props.ce_name + '/track-your-order'}><a>Track Your Order</a></Link></li> */}
                      <li><Link href={'/' + props.ce_name + '/terms-and-conditions'}><a>Terms & Conditions</a></Link></li>
                      <li><Link href={'/' + props.ce_name + '/privacy-policy'}><a>Privacy policy</a></Link></li>
                      <li><Link href={'/' + props.ce_name + '/refund-and-cancellation'}><a>Refund & cancellation</a></Link></li>
                      <li><Link href={'/' + props.ce_name + '/disclaimer'}><a>Disclaimer</a></Link></li>

                    </ul>
                  </div>


                </div>

              }

            </div>


          </div>

          <p className='text-center'><strong className='text-dark'>© 2023 Fast Track Visa. All rights reserved.</strong></p>



        </div>


      </footer>
       
    </>

  );

}

export default Footer;
