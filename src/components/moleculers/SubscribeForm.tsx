import GetIcon from "@/utils/getIcon";
import { Button } from "../ui/button";

export const SubscribeForm: React.FC = () => {
  return (
    <form className="flex flex-col sm:flex-row gap-3 items-center w-full">
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        id="email"
        type="email"
        placeholder="Your Email"
        className="bg-zinc-900 placeholder:text-zinc-500 text-white px-4 py-3 rounded-md border border-zinc-800 w-full"
      />
      <Button
        type="submit"
        disabled
        className="px-4 py-3 rounded-md bg-sand text-black font-semibold hover:bg-sand"
      >
        <GetIcon name="ArrowRight" className="size-5 cursor-pointer" />
      </Button>
    </form>
  );
};
