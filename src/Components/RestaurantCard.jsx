import React from "react";
import latkan from "./RestaurantCard.module.css";

const RestaurantCard = ({ data }) => {
  //   console.log(data, "gerer");
  const {
    name,
    cuisine,
    costForTwo,
    minOrder,
    deliveryTime,
    rating,
    votes,
    reviews,
    src,
    payments_methods,
  } = data;

  const DetailsComponent = ({
    name,
    cuisine,
    minOrder,
    costForTwo,
    cash = false,
    card = false,
  }) => {
    // let text = "";
    // if (cash && upi && card) {
    //   text = "Accepts all payments";
    // } else if (card && upi) {
    //   text = "Accepts only online payments";
    // } else if (cash) {
    //   text = "Accepts only cash";
    // }
    // this is traditional way to do it --> we can also do this smartly
    return (
      <div>
        <div>{name}</div>
        <div>{cuisine}</div>
        <div>Cost {costForTwo} rs for two</div>
        <div>
          Min {minOrder} - upto {deliveryTime} min
        </div>
        <div>
          Accepts {cash && "cash "} {card && "card "} Payments
        </div>
      </div>
    );
  };

  const Rating = ({ rating, votes, reviews }) => {
    return (
      <div>
        <div>rating {rating}</div>
        <div>{votes} votes</div>
        <div>{reviews} reviews</div>
      </div>
    );
  };

  return (
    <div className={latkan.container}>
      <div className={latkan.wrapper}>
        <div>
          <img src={src} alt="" />
        </div>
        <div className={latkan.brand}>
          {/* <div>URU Brewpark</div>
          <div>Continental, Pizza, Asian, Desserts</div>
          <div>Cost 600 rs for one</div>
          <div>Min 50 - upto 30 min</div>
          <div>Accepts online payments only</div> */}
          {/* iske bajaye main ek component banaunga taki isko dynamic bana sake */}
          <DetailsComponent
            name={name}
            cuisine={cuisine}
            minOrder={minOrder}
            costForTwo={costForTwo}
            cash={true}
            card={true}
          />
        </div>
        <div className={latkan.votes}>
          <Rating rating={rating} votes={votes} reviews={reviews} />
        </div>
      </div>
      <div>
        <button>Order Online</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
