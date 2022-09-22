import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <div className="offerBnner"></div>
      <div className="hometop">
        <div className="hometopSubContainers">
          <div className="NykaaLogo"></div>
          <div className="categories">Categories</div>
          <div className="topleftheader">
            <div className="searchbarContainer">
              <div className="searchicon"></div>
              <div>
                <input className="searchbar" placeholder="Search on Nykaa" />
              </div>
            </div>
            <div className="user"></div>
            <div className="shoppinbag"></div>
          </div>
        </div>
        <hr className="headline"></hr>
        <div className="subCategoriesContainer">
          <div className="makeupdropdown">Makeup</div>
          <div className="hairdropdown">Hair</div>
          <div className="skindropdown">skin</div>
          <div className="skindropdown">Men</div>
          <div className="skindropdown">Fregrance</div>
          <div className="offertag">
            <a></a>
            offer
          </div>
        </div>
        <hr className="headerline"></hr>
      </div>
      <div className="carousalContainer">
        <div className="carousal"></div>
      </div>
      <div className="offerimages">
        <div className="blankspace"></div>
        <div className="nykaaoffer"></div>
      </div>
    </div>
  );
}
export default Home;
