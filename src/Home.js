import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Without_remorse/launch/1500x600_Hero-Tall_JPN._CB670768292_.jpg"
            alt=""
            className="home__image"
          />
          <div className="home__row">
            <Product
              id={1001}
              title="Zebronics Zeb-Transformer Gaming Keyboard and Mouse Combo (USB, Braided Cable)"
              image="https://m.media-amazon.com/images/I/51YSwNjbFOL._AC_SY200_.jpg"
              price={19.99}
              rating={5}
            />
            <Product
              id={1002}
              title="TP-Link Archer C6 Gigabit MU-MIMO Wireless Router, Dual Band 1200 Mbps Wi-Fi Speed, 5 Gigabit Ports, 4 External Antennas and 1 Internal Antenna WiFi Coverage with Access Point Mode, Qualcomm Chipset"
              image="https://images-na.ssl-images-amazon.com/images/I/51yKgeaEbnL._SY355_.jpg"
              price={9.99}
              rating={3}
            />
          </div>
          <div className="home__row">
            <Product
              id={1003}
              title="Zebronics Zeb-Warrior 2.0 Multimedia Speaker with Aux Connectivity,USB Powered and Volume…"
              image="https://images-eu.ssl-images-amazon.com/images/I/81grtcmxsyL._AC_UL160_SR160,160_.jpg"
              price={39.99}
              rating={4}
            />
            <Product
              id={1004}
              title="Redgear MP35 Speed-Type Gaming Mousepad (Black/Red)"
              image="https://images-eu.ssl-images-amazon.com/images/I/61G5-hNFMYL._AC_UL160_SR160,160_.jpg"
              price={1.99}
              rating={5}
            />
            <Product
              id={1005}
              title="Antec VP450P Plus 450 Watt Power Supply 85% efficient I 80 Plus 230V Standard Certified"
              image="https://images-eu.ssl-images-amazon.com/images/I/614kOGn4CQL._AC_UL160_SR160,160_.jpg"
              price={29.99}
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id={1006}
              title="LG 29 inch Ultrawide Full HD IPS Gaming, Multitasking Monitor with 1ms Response Rate"
              image="https://images-na.ssl-images-amazon.com/images/I/81t1tAzEgGL._SX450_.jpg"
              price={109.99}
              rating={5}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
