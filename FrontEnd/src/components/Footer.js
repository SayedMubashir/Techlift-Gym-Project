import React from "react";
import "./style/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" bg-secondary footer">

      <div className="container">
        <div className="row">
          <div className="col-md-6 text-white">
            <h1>Address</h1>
            <address className="address">
              {" "}
              Allama Iqbal Town,
              <br />
              743, Kashmir Block <br />
              Lahore, Pakistan{" "}
            </address>
            <h1>Phone</h1>
            <address className="address">+92-301-5924577<br/>
            +92-301-833-877</address>
          </div>

          <div className="col-md-6 text-white">
            <h1>Links</h1>
            <div className="flex">
              <ul className="list-group list">
                <li>
                  <Link className="list-group-item list-group-item-action bg-secondary text-white" to={'/home'}>Home</Link>
                </li>
                <li>
                  <Link className="list-group-item list-group-item-action bg-secondary text-white"  to={'/services'}>Services</Link>
                </li>
                  <li>
                    <Link className="list-group-item list-group-item-action bg-secondary text-white"  to={'/about'}>About</Link>
                  </li>
                  <li>
                    <Link className="list-group-item list-group-item-action bg-secondary text-white" to={'/contact'}>Contact</Link>
                  </li>

              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
