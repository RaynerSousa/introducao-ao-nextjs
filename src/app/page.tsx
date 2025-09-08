import Wellcome from "./components/Wellcome";
import MiniDisplay from "./components/MineDisplay";
import LikeButton from "./components/LikeButton";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-180 bg-blue-900 ">
      <div>
        {/* <Wellcome /> */}
        {/* <MiniDisplay/> */}
        {/* <LikeButton /> */}
        <MiniDisplay/>
      </div>
    </div>
  );
}
