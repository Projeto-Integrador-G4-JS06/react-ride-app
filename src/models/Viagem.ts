import Veiculo from "./Veiculo";

export default interface Viagem {
    id: number;
    bairro_partida: string;
    cidade_partida: string;
    data_partida: string;
    bairro_destino: string;
    cidade_destino: string;
    distancia: number;
    vel_media: number;
    duracao: string;
    preco: number;
    veiculo: Veiculo | null;
}
