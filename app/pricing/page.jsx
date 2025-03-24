"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import PricingCard from "../components/PricingCard";
import { Background } from "../components/Background";
import { Navbar } from "../components/Navbar";
import { Gmail } from "../components/Gmail";

const Pricing = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get("/api/verificationfee");
    setPrices(data);
    console.log(data);
  };

  return (
    
    <section >
      <div className="flex justify-end pt-3 pr-4">
        <Gmail />
      </div>
      <Background />

      <div className="grid justify-center pt-15">
        <div className="">
          <h2 className=" pb-20 text-xl sm:text-2xl md:text-4xl lg:text-4xl font-semibold mx-auto text-center z-10 text-black tracking-tight">
            {" "}
            Verification Payment
          </h2>
        </div>
        <div className="px-10">
        <div className="p-2 border-1 rounded-xl ">
          {prices &&
            prices.map((price) => <PricingCard price={price} key={price.id} />)}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
