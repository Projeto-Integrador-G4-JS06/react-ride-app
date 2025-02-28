import { useEffect, useState } from "react";
import Viagem from "../../models/Viagem";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { buscarViagens } from "../../services/Service";
import { useParams } from "react-router-dom";
import axios from "axios";


function BuscarViagens() {

    const BuscaViagens = () => {
        const { bairro_partida, cidade_partida, bairro_destino, cidade_destino, data_partida } = useParams();
        const [viagens, setViagens] = useState([]);
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
                };

                buscarViagens();
            }, [bairro_partida, cidade_partida, bairro_destino, cidade_destino, data_partida]);

        return (

            // {isLoading && (

            //     <PacmanLoader
            //         color="#0D9488"
            //         margin={0}
            //         size={80}
            //         speedMultiplier={2}
            //         aria-label="Pacman-loading"
            //         className='mx-auto my-8'
            //     />
            // )}

            <section className="w-full h-screen flex justify-center items-center bg-[#495F80]">
                <div className="container mx-auto px-4 flex flex-col justify-center items-center text-white">
                    <h1 className="flex text-center lg:text-3xl">
                        Viagens Encontradas
                    </h1>

                    <div className="h-140">
                        <p>dsadasdas</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default BuscarViagens
