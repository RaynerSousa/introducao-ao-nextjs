import Wellcome from "./components/Wellcome";
import MiniDisplay from "./components/Display";
import LikeButton from "./components/LikeButton";
import { ListaDeCompras } from "./components/ListaDeCompras";
import LikButton from "./components/BotaoReproducao";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-180 bg-gray-600">
      <div>
        {/* <Wellcome /> */}
        {/* <MiniDisplay/> */}
        {/* <LikeButton /> */}
        {/* <LikButton/> */}
        <ListaDeCompras/>
        
      </div>
    </div>
  );
}
