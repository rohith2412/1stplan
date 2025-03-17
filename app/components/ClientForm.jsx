import { useRouter } from "next/navigation";
import { useState } from "react";
import { Field } from "./Field"

export function ClientForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    region: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex justify-center ">
        <div className="">
          <div className="text-xl pt-15 pr-40 flex justify-center tracking-tighter">
            Post your job description below ~
          </div>
          <div className="flex gap-20 pt-30 text-sm ">
            <div className="grid pr-50">
              <div className="grid gap-5">
                <input
                  className="outline-none bg-gray-100  p-1 rounded-md  "
                  name="name"
                  placeholder="Name *"
                  type="text"
                  required
                  onChange={handleChange}
                />
                <input
                  className="outline-none bg-gray-100 p-1 rounded-md  "
                  name="email"
                  placeholder="Email *"
                  type="email"
                  required
                  onChange={handleChange}
                />
                <Field />
                <input
                  className="outline-none bg-gray-100 p-1 rounded-md  "
                  name="budget"
                  placeholder="Budget *"
                  type="text"
                  required
                  onChange={handleChange}
                />
                <input
                  className="outline-none bg-gray-100 p-1 rounded-md  "
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
                className="text-sm w-full h-70  p-3 border outline-none resize-none"
                name="description"
                placeholder="Description about the project *"
                required
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center pt-25">
            <button className=" blue_gradient cursor-pointer pl-7 pt-3 pb-3 text-white pr-7 rounded-lg hover:opacity-70">
              Add Payment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
