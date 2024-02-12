
import Free from "../Component/Free";
import Gold from "../Component/Gold";
import Diamond from "../Component/Diamond";

const CardOne = () => {
  return (
    <div>
      <h1 className=" text-2xl text-slate-950 p-6 font-semibold">Pricing Cards UI Design</h1>
      <div className="grid lg:grid-cols-3 lg:gap-8 w-4/5 lg:w-full mx-auto">
        <Free price={0}/>
        <Gold price={30} />
        <Diamond price={50}/>
      </div>
    </div>
  );
};

export default CardOne;
