import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardViagem from "../../components/viagem/cardviagem/CardViagem";
import Viagem from "../../models/Viagem";

function BuscarViagens() {
    const { bairro_partida, cidade_partida, bairro_destino, cidade_destino, data_partida } = useParams();
    const [viagens, setViagens] = useState<Viagem[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const buscarViagens = async () => {
            try {
                const response = await axios.post(
                    'https://nest-ride-app.onrender.com/viagens/buscar',
                    {}, // Corpo vazio, pois os dados estão no header
                    {
                        headers: {
                            bairro_partida,
                            cidade_partida,
                            bairro_destino,
                            cidade_destino,
                            data_partida,
                        },
                    }
                );
                setViagens(response.data);
                setError('');
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    if (err.response && err.response.status === 404) {
                        setError('Não há trajetos disponíveis para essas correspondências.');
                    } else {
                        setError('Ocorreu um erro ao buscar as viagens.');
                    }
                    setViagens([]);
                }
            }
        };

        buscarViagens();
    }, [bairro_partida, cidade_partida, bairro_destino, cidade_destino, data_partida]);

    console.log(bairro_partida, cidade_partida, bairro_destino, cidade_destino, data_partida)

    return (
        <section className="w-full h-screen flex justify-center items-center bg-[#495F80]">
            <div className="container mx-auto px-4 flex flex-col justify-center items-center text-white">
                <h1 className="flex text-center lg:text-3xl">
                    Viagens Encontradas
                </h1>

                <div className="h-140">
                    {viagens
                        .sort((a, b) => a.id - b.id)
                        .map((viagem) => (
                            <CardViagem key={viagem.id} viagem={viagem} />
                        ))}
                </div>
            </div>
        </section>
    );
}

export default BuscarViagens;
