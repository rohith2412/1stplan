import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export function ClientForm() {
  const { data: session } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: session?.user?.name || "",
    email: "",
    budget: "",
    field: "",
    region: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          user: session?.user?.id, 
        }),
      });

      if (response.ok) {
        router.push("/");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex justify-center">
        <div className="">
          <div className="text-xl pt-15 pr-40 flex justify-center tracking-tighter">
            Post your job description below ~
          </div>
          <div className="flex gap-20 pt-30 text-sm">
            <div className="grid pr-50">
              <div className="grid gap-5">
                <input
                  className="outline-none bg-gray-100 p-1 rounded-md"
                  name="name"
                  placeholder="Name *"
                  type="text"
                  value={formData.name}
                  required
                  onChange={handleChange}
                />
                <input
                  className="outline-none bg-gray-100 p-1 rounded-md"
                  name="email"
                  placeholder="Email *"
                  type="email"
                  required
                  onChange={handleChange}
                />
                <input
                  className="outline-none bg-gray-100 p-1 rounded-md"
                  name="field"
                  placeholder="Ex. App Developer *"
                  type="text"
                  required
                  onChange={handleChange}
                />
                <input
                  className="outline-none bg-gray-100 p-1 rounded-md"
                  name="budget"
                  placeholder="Budget *"
                  type="text"
                  required
                  onChange={handleChange}
                />
                <input
                  className="outline-none bg-gray-100 p-1 rounded-md"
                  name="region"
                  placeholder="Region *"
                  type="text"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-[60rem]">
              <textarea
                className="text-sm w-full h-70 p-3 border outline-none resize-none"
                name="description"
                placeholder="Description about the project *"
                required
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center pt-25">
            <button
              type="submit"
              className="blue_gradient cursor-pointer pl-7 pt-3 pb-3 text-white pr-7 rounded-lg hover:opacity-70"
            >
              Add Payment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
