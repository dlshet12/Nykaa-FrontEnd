import React from "react";
import ImageSlider from "../../components/imageslider/imageslider";
import "./home.css";

function Home() {
  const slides = [
    { url: "../../asset/pictures/add-1.png", title: "adv1" },
    { url: "../../asset/pictures/add-2.png", title: "adv2" },
    { url: "../../asset/pictures/add-3.png", title: "adv3" },
    { url: "../../asset/pictures/add-4.png", title: "adv4" },
  ];

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
          <div className="skindropdown">Brands</div>
          <div className="offertag">offer</div>
        </div>
        <hr className="headerline"></hr>
      </div>
      <div className="carousalContainer">
        <div className="carousal">
          <ImageSlider slides={slides} />
        </div>
      </div>
      <div className="offerimages">
        <div className="blankspace"></div>
        <div className="nykaaoffer"></div>
        <div className="childContainer">
          <div className="aishimg"></div>
          <div className="gigiimag"></div>
        </div>
        <div className="katimg"></div>
        <div className="subAdvertise"></div>
      </div>
    </div>
  );
}
export default Home;
