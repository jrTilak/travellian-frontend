import Button from "../shared/buttons/button";

const Newsletter = () => {
  return (
    <div className="w-[1262px] flex justify-between p-12 rounded-3xl border-2 border-gray-300">
      <span className="font-playfair font-light text-[64px]">
        Our Newsletter
      </span>
      <form className="flex flex-col gap-1">
        <label htmlFor="email" className="">
          Email
        </label>
        <div className="flex gap-6">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="outline-none bg-secondary-yellow p-4 rounded-lg text-primary w-[372px]"
          />
          <Button variant="primary" className="px-8">
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Newsletter;
