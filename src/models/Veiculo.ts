import Viagem from "./Viagem";

export default interface Veiculo {
    id: number;
    modelo: string;
    marca: string;
    ano: number;
    cor: string;
    tipo: string;
    foto: string;
    placa: string;
    tipo_combustivel: string;
    tipo_transmissao: string;
    capacidade: number;
    num_assentos: number;
    itens: string;
    disponibilidade: boolean;
    criado_em: string;
    atualizado_em: string;
    viagem: Viagem | null;
}