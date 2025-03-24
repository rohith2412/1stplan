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

  return (
    <div>
      <div className="flex gap-30 text-sm ">
        <div>Project name</div>
        <div>Price(USD)</div>
        <div>Email</div>
        <div>Product Id</div>
        <div>
          Talk to the <br />
          developer
        </div>
        <div>Contact us</div>
      </div>
      <div>
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          <div>
            {products.map((product) => (
              <div key={product._id}>
                <div className="flex gap-40 text-sm">
                  <div>{product.name}</div>
                  <div className=""> {"$" + product.budget}</div>
                  <div>{product.email}</div>
                  <div>{product._id}</div>
                  <div>Developer</div>
                  <div></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
