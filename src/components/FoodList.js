import React, { useState } from "react";

import classes from './FoodList.module.css';

import Burger from './content/img/icons/burger.png';
import Pasta from './content/img/icons/raviolli.png';
import Fish from "./content/img/icons/fish.png";
import Pizza from './content/img/icons/pizza.png';
import Chicken from "./content/img/icons/chicken.png";
import { useEffect } from "react";

const DUMMY_FOOD = [
  {
    id: 1,
    icon: Burger,
    title: "Burger",
    active: false,
  },
  {
    id: 2,
    icon: Pasta,
    title: "Pasta",
    active: false,
  },
  {
    id: "fish",
    icon: Fish,
    title: "Fish",
    active: false,
  },
  {
    id: "chicken",
    icon: Chicken,
    title: "Chicken",
    active: false,
  },
  {
    id: "pizza",
    icon: Pizza,
    title: "Pizza",
    active: false,
  },
];

function FoodList () {
    const [active, setActive] = useState('');

    function activeHandler() {

    }


    const foodFilter = DUMMY_FOOD.map((food) => (
      <div
        key={food.id}
        onClick={activeHandler(food)}
        className={
          {active}
            ? [classes.filterItem, classes.active].join(" ")
            : [classes.filterItem]
        }
      >
        <img src={food.icon} />
        <p>{food.title}</p>
      </div>
    ));


    return <section>
        <div>
            <h2>Specialities</h2>
        </div>
        <div className={classes.filter}>
            {foodFilter}
        </div>
    </section>
}

export default FoodList;