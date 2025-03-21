import axios from "axios"
import Link from "next/link"
import {AiFillCheckCircle} from 'react-icons/ai'

const PricingCard = ({price}) => {

const dynamicDescription = () => {
    return (
      <div className="mt-6 space-y-4 ">
        <div className="flex space-x-3">
          <AiFillCheckCircle
            className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
            aria-hidden="true"
          />
          <h2 className="text-sm text-gray-500">$25 per day after 3 days</h2>
        </div>
        <div className="flex space-x-3">
          <AiFillCheckCircle
            className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
            aria-hidden="true"
          />
          <h2 className="text-sm text-gray-500">
            Neighborhood & HOA Friendly
          </h2>
        </div>
        <div className="flex space-x-3">
          <AiFillCheckCircle
            className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
            aria-hidden="true"
          />
          <h2 className="text-sm text-gray-500">
            Eco-Friendly Waste Management
          </h2>
        </div>
        <div className="flex space-x-3">
          <AiFillCheckCircle
            className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
            aria-hidden="true"
          />
          <h2 className="text-sm text-gray-500">Driveway Protection</h2>
        </div>
      </div>
    );
  
};

const handleSubscription = async (e) => {
  e.preventDefault();
  const { data } = await axios.post('/api/payment',
  {
    priceId: price.id
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
  );
  window.location.assign(data)
}

  return (
    <div className="">
       <div>
        <div className="">
           <p>{price.price}</p>
           <h3>Verification Payment</h3>
        </div>
        <div>
          <div className="">
              <h1 className=""> 
              {(price.unit_amount / 100).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })}
              </h1>
          </div>
          <ul className="">
              <li className="" >{dynamicDescription(price)}</li>
          </ul>
          <button className="blue_gradient cursor-pointer pl-4.5 pt-1 pb-1 text-white pr-4.5 rounded-lg" onClick={handleSubscription}>
             Proceed
          </button>
        </div>
       </div>
    </div>
  )
}

export default PricingCard