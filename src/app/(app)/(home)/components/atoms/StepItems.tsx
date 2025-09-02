import BorderView from "./BorderView";

const StepItems = ({
  index,
  descp,
  heading,
}: {
  heading: string;
  descp: string;
  index: number;
}) => {
  return (
    <BorderView className="flex flex-col justify-center items-center text-center gap-4 px-6 py-8 rounded-xl md:rounded">
      <p className="text-inactive font-primary text-sm font-semibold uppercase tracking-wide">
        {`Step ${index+1}`}
      </p>
      <h3 className="text-white font-semibold font-primary text-xl leading-snug">
        {heading}
      </h3>
      <p className="text-base text-inactive max-w-lg leading-relaxed">
        {descp}
      </p>
    </BorderView>
  );
};

export default StepItems;
