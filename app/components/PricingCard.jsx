import axios from "axios";
import Link from "next/link";

const PricingCard = ({ price }) => {
  const handleSubscription = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: price.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.location.assign(data);
  };

  return (
    <div className="">
      <div>
        <div>
          <div className="">
            <h1 className="p-10 flex justify-center gap-3 text-xl sm:text-2xl md:text-4xl lg:text-2xl font-semibold mx-auto text-center z-10 text-black tracking-tighter">
              <div>USD</div>
              <div>
                {(price.unit_amount / 100).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </h1>
            <p className="opacity-70 text-sm text-left grid justify-center">
              Note: This payment is required solely <br /> to verify the
              legitimacy of the project <br /> and to avoid spammers. Once this{" "}
              <br />
              payment is completed, clients can <br />
              proceed with the next payment for
              <br />
              the project.
            </p>
          </div>

          <div className="flex justify-center pt-10 pb-5">
            <button
              className="blue_gradient cursor-pointer pl-4.5 pt-1 pb-1 text-white pr-4.5 rounded-lg"
              onClick={handleSubscription}
            >
              Pay now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
