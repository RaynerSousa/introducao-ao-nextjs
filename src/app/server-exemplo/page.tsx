import ClienteCounter from "../components/ClienteCouter";
export default function ServerExample() {
    const data = 'dados do banco de dados';

    return(
        <div>
            <h1>Dados do Servidor</h1>
            <p>{data}</p>
            <ClienteCounter />
        </div>
    )
}