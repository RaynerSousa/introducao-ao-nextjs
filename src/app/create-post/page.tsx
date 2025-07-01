import { Button } from "@/components/ui/button";
export default function CreatePostPag() {
  return (
    <div className="flex items-center justify-center p-6">
      <div>
        <h1 className=" text-2xl font-bold mb-4 ">Criar novo poste</h1>
        <form action="#">
          <div>
            <label htmlFor="#" className=" block text-sm font-medium">
              Titulo
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite o título do post"
            />
          </div>
          <div>
            <label htmlFor="#" className=" block text-sm font-medium">
              Conteudo
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-6 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite o título do post"
            />
          </div>
          {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Publicar
          </button> */}
          <Button type="submit">Clik aqui</Button>
          
        </form>
      </div>
    </div>
  );
}
