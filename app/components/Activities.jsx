"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function Activities() {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (session?.user?.id) {
      const fetchProducts = async () => {
        try {
          const response = await fetch(
            `/api/activities?userId=${session.user.id}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch products");
          }

          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchProducts();
    }
  }, [session]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session?.user?.id) {
    return <div>Please log in to view your products.</div>;
  }
  // pl-55 pt-35
  return (
    <div className="">
      <div className="flex gap-40 text-sm border w-fit p-5 bg-gray-200">
        <div>Project name</div>
        <div>Price(USD)</div>
        <div>Email</div>
        <div>Product Id</div>
        <div>Contact developer</div>
        <div>Contact us</div>
      </div>
      <div>
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          <div>
            {products.map((product) => (
              <div key={product._id}>
                <div className="flex gap-40 text-sm p-5 border w-331.5 bg-gray-100">
                  <div className="w-25">{product.name}</div>
                  <div className="w-0 "> {"$" + product.budget}</div>
                  <div className="w-10 ">{product.email}</div>
                  <div className="w-42">{product._id}</div>
                  <div className="w-30 ">{product.field}</div>
                  <div className="w-10 ">Link</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
