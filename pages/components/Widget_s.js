import React, { Component } from 'react';
import Link from 'next/link'


class Widget_s extends Component {
  render(props) {
    return (
      <>

        <div className="widget_300 widgetform">
          <h4>Fly Anywhere.<br />
            Get an eVisa</h4>
          <form>

            <div className="ftv-field">
              <label htmlFor="input2">Planning to visit</label>
              <input id="input2" type="text" className="form-control" placeholder="Dubai" />
            </div>
            <div className="ftv-field">
              <label htmlFor="input1">I am a citizen of</label>
              <input id="input1" type="text" className="form-control" placeholder="India" />
            </div>
            <Link href={'/en-in/uae-visa'}><a className="btn btn-lg btn2">Get an eVisa</a></Link>
          </form>
        </div>


      </>

    );
  }
}

export default Widget_s;
