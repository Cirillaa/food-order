import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Burger from "./content/img/restaurants/burgerPh.png";
import BurgerLogo from "./content/img/restaurants/burger.png";
import BelieveLogo from "./content/img/restaurants/Believe.png";
import Believe from "./content/img/restaurants/BelievePh.png";
import Vet from './content/img/restaurants/Vet.png';
import VetLogo from './content/img/restaurants/vietnamese.png';
import PasterLogo from './content/img/restaurants/il_paster.png';
import Paster from './content/img/restaurants/Il_pastifigo.png';
import classes from "./Restaurants.module.css";
import RestItem from "./UI/RestItem";

const DUMMY_REST = [
  {
    id: "r1",
    logo: BurgerLogo,
    photo: Burger,
  },
  {
    id: "r2",
    logo: BelieveLogo,
    photo: Believe,
  },
  {
    id: "r3",
    logo: PasterLogo,
    photo: Paster,
  },
  {
    id: "r4",
    logo: VetLogo,
    photo: Vet,
  },
  {
    id: "r5",
    logo: BurgerLogo,
    photo: Burger,
  },
  {
    id: "r6",
    logo: PasterLogo,
    photo: Paster,
  },
];


function Restaurants() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const restaurants = DUMMY_REST.map((rest) => (
    <RestItem
      id={rest.id}
      key={rest.id}
      logo={rest.logo}
      img={rest.photo}
    />
  ));

  return (
    <div className={classes.container}>
      <div className={classes.mainTitle}>
        <h2 className={classes.title}>Restaurants</h2>
        <button className={classes.all}>show all</button>
      </div>
      <div className={classes.list}>
          <Slider {...settings}>{restaurants}</Slider>
      </div>
    </div>
  );
}

export default Restaurants;
