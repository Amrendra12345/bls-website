import React from "react";
import Link from 'next/link'
import Container from 'react-bootstrap/Container'

import Image from 'next/image'

const Open_new = () => {

  return (
    <>

      <div className="ready-get">
        <Container>
          <div className="row align-items-center justify-content-between">

            <div className="col-12 col-md-6">
              <h2>
                Open a new ancillary<br />  revenue stream.
              </h2>
              <p> Reduce your costs and operational risk while<br /> enhancing your customer experience.</p>
              <p><Link href={'/'}>
                <a className="btn1 pl-4 pr-4">
                  Get a demo
                </a></Link></p>
            </div>
            <div className="col-12 col-md-5">
              <figure> <Image alt=" The Smartest Way to get an eVisa" src={'/img/ready-get.png'} width={487} height={450} /></figure>
            </div>

          </div>
        </Container>
      </div>


    </>
  );
}

export default Open_new;
