import Wellcome from "./components/Wellcome";
import MiniDisplay from "./components/Display";
import LikeButton from "./components/LikeButton";
import { ListaDeCompras } from "./components/ListaDeCompras";
import LikButton from "./components/BotaoReproducao";
import { ToggleDark } from "./components/ToggleDark";
import { Browser } from "leaflet";
import { Card } from "./components/RevCard";
import { BrowserRouter  , Routes , Route  } from "react-router-dom";
import Counter from "./components/ContLikeButton";
import Lampada from "./components/Lampada";
  

export default function Home() {
  return (
    <div className="flex justify-center items-center h-180 bg-gray-600">
      <div>
        {/* <Wellcome /> */}
        {/* <MiniDisplay/> */}
        {/* <LikeButton /> */}
        {/* <LikButton/> */}
        {/* <ListaDeCompras/> */}
        {/* <ToggleDark onToggle={}/> */}

        
        

        {/* <BrowserRouter>
        <Routes>
          <Route path="/" index  element={<Wellcome />} />
          <Route index  element= {}>

          </Route>
        </Routes>
        </BrowserRouter> */}
      </div>
{/* 
          <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 gap-6">
            <Card
              title="Montanhas da Noruega"
              description="Uma bela vista das montanhas cobertas de neve."
              img="/por-do-sol.jpg"
            />
            <Card
              title="Lago Azul"
              description="Um lago cristalino rodeado por florestas."
              img="/por-do-sol.jpg"
            />
          </div> */}

          {/* <div>
            <Counter initial={0}/>
          </div> */}
          <div>
            <Lampada/>
          </div>
    </div>

    
  );
}
