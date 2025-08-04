import { Button } from "@/components/ui/button"
export default function Wellcome() {

    return (
        <div>
            <h1>Bem-vindo(a) à Home</h1>
            <p>
                Esta é minha primeira página
                em next.js
            </p>

            <button><a href="/about">About</a></button>

            <Button label="Clique aqui"  />

        </div>
    )
}