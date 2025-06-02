import Wellcome from "./components/Wellcome";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className=" ">
        
      <NavBar links={
        [
          {label:"inicio", href:"/"},
          {label:"Sobre nos", href:"/"},
          {label:"Contato", href:"/"},


        ]} />

    </div>
  );
}
