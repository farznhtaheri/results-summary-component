import Card from "./Card";
import ReactionImg from "./assets/icon-reaction.svg";
import MemoryImg from "./assets/icon-memory.svg";
import VerbalImg from "./assets/icon-verbal.svg";
import VisualImg from "./assets/icon-visual.svg";

function App() {
  return (
    <div className="bg-white md:flex md:h-[90%] md:w-1/2 md:rounded-3xl md:shadow-lg w-full">
      <div
        className="bg-radial-[at_50%_100%] from-light-royal-blue to-light-slate-blue to-90%
       md:w-1/2 md:rounded-3xl rounded-b-3xl pt-2 pb-10"
      >
        <div className="text-center my-9 text-light-lavender font-bold">
          Your Result
        </div>
        <div
          className="size-36 mx-auto flex flex-col items-center justify-center rounded-full 
        bg-radial-[at_50%_75%] from-persian-blue to-violet-blue to-90% text-white text-5xl font-bold mb-9"
        >
          <div>76</div>
          <div className="text-sm text-light-lavender mt-1.5">of 100</div>
        </div>
        <h1 className="text-2xl font-bold text-white text-center">Great</h1>
        <p className="text-center text-light-lavender mt-3 font-medium w-3/4 mx-auto text-base">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>

      <div className="mx-8 my-9 md:w-1/2 font-bold">
        <h1 className="text-dark-gray-blue text-2xl mb-5">Summary</h1>
        <Card title="Reaction" score={80} img={ReactionImg} color="lightRed" />
        <Card title="Memory" score={92} img={MemoryImg} color="orangeyYellow" />
        <Card title="Verbal" score={61} img={VerbalImg} color="greenTeal" />
        <Card title="Visual" score={73} img={VisualImg} color="blueCobalt" />
        <button
          className="rounded-4xl bg-radial-[at_50%_100%] from-light-royal-blue to-light-slate-blue to-90% text-white
         w-full p-2.5 mt-6 cursor-pointer hover:bg-dark-gray-blue hover:bg-none"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default App;
