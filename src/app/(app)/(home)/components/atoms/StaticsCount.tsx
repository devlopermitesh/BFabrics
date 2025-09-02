const StaticsCount = ({ name, count }: { name: string; count: string }) => {
  return (
    <div className="flex flex-col justify-center items-center border border-gray-400 border-dashed rounded p-3 md:p-5">
      <h2 className="text-white font-primary text-2xl">{count}</h2>
      <p className="text-inactive font-primary text mt-1">{name}</p>
    </div>
  );
};

export default StaticsCount;
