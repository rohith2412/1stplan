import { useRouter } from "next/navigation";
import { useState } from "react";

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
        <div className="flex justify-center"> 
        <div className="">
            <div className="text-2xl flex justify-center">Post A Job</div>
      <div className="flex gap-20 pt-15">
        <div className="grid">
            <div className="grid gap-10">
                <input className="border rounded p-1" name="name" placeholder="Name*" type="text" required onChange={handleChange} />
                <input className="border rounded p-1" name="email" placeholder="Email*" type="email" required onChange={handleChange} />
                <input className="border rounded p-1" name="email" placeholder="Email*" type="email" required onChange={handleChange} />
                <input className="border rounded p-1" name="budget" placeholder="Budget*" type="text" required onChange={handleChange} />
                <input className="border rounded p-1" name="region" placeholder="Region*" type="text" required onChange={handleChange} />
                <input className="border rounded p-1" name="region" placeholder="Region*" type="text" required onChange={handleChange} />
            </div>
        </div>
      <div className="grid">
        <textarea className="" name="description" placeholder="Description about the project*" required onChange={handleChange}></textarea>
        <button type="submit" className="">Add Payment</button>
      </div>
      </div>
      </div>
      </div>
    </form>
  );
}
