import React from "react";
import "./style/Gallery.css";

function Gallery() {
  return (
    <div className="background">
      <div className="container p-5 mt-5 ">
        <h3 className="text-center text-white">Our PortFolio</h3>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mt-4 border-0 bg-color">
              <img
                className="card-image card-img-top"
                src={require("../assets/images/1.jpg")}
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mt-4 border-0 bg-color">
              <img
                className="card-image card-img-top"
                src={require("../assets/images/2.jpg")}
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mt-4 border-0 bg-color">
              <img
                className="card-image card-img-top"
                src={require("../assets/images/3.jpg")}
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mt-4 border-0 bg-color">
              <img
                className="card-image card-img-top"
                src={require("../assets/images/4.jpg")}
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mt-4 border-0 bg-color">
              <img
                className="card-image card-img-top"
                src={require("../assets/images/5.jpg")}
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mt-4 border-0 bg-color">
              <img
                className="card-image card-img-top"
                src={require("../assets/images/6.jpg")}
                alt="Card image cap"
              />
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Gallery;
