import { useState } from "react";
import Button from "../shared/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="flex items-center bg-secondary-white justify-center sm:items-start lg:items-end sm:p-10 lg:py-14 lg:px-20 flex-col lg:flex-row lg:justify-between py-10 px-5 gap-10 rounded-3xl border-2 shadow-sm m-6 mb-0 max-w-[1262px] xl:m-0">
      <span className="font-playfair font-light text-4xl md:text-6xl text-muted md:w-max lg:relative ">
        Our Newsletter
      </span>
      <form
        className="flex flex-col gap-1 w-full md:w-max"
        onSubmit={handleSubscribe}
      >
        <label htmlFor="email" className="text-muted">
          Email
        </label>
        <div className="flex flex-col sm:flex-row gap-3 xs:w-full ">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="outline-none bg-secondary-yellow p-4 flex-grow rounded-lg text-primary w-full sm:max-w-96 lg:w-[372px] lg:max-w-[372px]"
          />
          <Button
            type="submit"
            variant="primary"
            className="px-8 py-3 w-full md:w-auto sm:max-w-32"
          >
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Newsletter;
