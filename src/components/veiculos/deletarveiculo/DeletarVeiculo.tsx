import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Veiculo from "../../../models/Veiculo";
import { deletar, listar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { RotatingLines } from "react-loader-spinner";

function DeletarVeiculo() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo);
  const { id } = useParams<{ id: string }>();

  // Função para buscar o veículo pelo id
  async function buscarPorId(id: string) {
    try {
      await listar(`/veiculos/id/${id}`, setVeiculo, { headers: {} });
    } catch (error: any) {
      console.error("Erro ao buscar veículo:", error);
      if (error.toString().includes("403")) {
        alert("Sua sessão expirou. Faça login novamente.");
        navigate("/");
      } else {
        ToastAlerta("Erro ao carregar o veículo.", "erro");
      }
    }
  }

  // Hook que chama a função de busca quando o componente é montado ou quando o id muda
  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/veiculos");
  }

  async function deletarVeiculo() {
    setIsLoading(true);

    try {
      await deletar(`/veiculos/${id}`, { headers: {} });
      ToastAlerta("Veículo deletado com sucesso!", "sucesso");
      navigate("/veiculos");
    } catch (error: any) {
      console.error("Erro ao deletar veículo:", error);
      if (error.toString().includes("403")) {
        alert("Sua sessão expirou. Faça login novamente.");
        navigate("/");
      } else {
        alert("Erro ao deletar o veículo. Tente novamente");
      }
    }
    setIsLoading(false);
  }

  // Caso o veículo não tenha sido carregado ainda, exibe um spinner de carregamento
  if (!veiculo.modelo) {
    return (
      <div className="flex justify-center items-center h-screen bg-[var(--color-medium-dark-blue)]">
        <RotatingLines
          strokeColor="orange-100"
          strokeWidth="5"
          animationDuration="0.75"
          width="50"
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[var(--color-blue-300)] p-4">
      <div className="container w-full max-w-2xl mx-auto p-6 bg-[var(--color-gray-300)] rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-4xl text-center my-6 text-[var(--color-gray-400)] font-[var(--font-poppins)]">
          Deletar Veículo
        </h1>
        <p className="text-center text-[var(--color-gray-500)] mb-6">
          Você tem certeza de que deseja apagar o seguinte veículo?
        </p>
        <div className="border border-[var(--color-blue-400)] rounded-lg overflow-hidden bg-[var(--color-gray-300)] w-full">
          <header className="py-3 px-6-[var(--color-blue-400)] text-[var(--color-gray-400)] font-bold text-2xl text-center">
            {veiculo.modelo}
          </header>
          <div className="p-6 flex flex-col items-center">
            <img
              src={veiculo.foto}
              alt={veiculo.modelo}
              className="w-48 h-48 object-cover mb-4 rounded-full"
            />
            <p className="text-[var(--color-gray-500)]">
              <span className="font-semibold">Marca:</span> {veiculo.marca}
            </p>
            <p className="text-[var(--color-gray-500)]">
              <span className="font-semibold">Modelo:</span> {veiculo.modelo}
            </p>
            <p className="text-[var(--color-gray-500)]">
              <span className="font-semibold">Ano:</span> {veiculo.ano}
            </p>
            <p className="text-[var(--color-gray-500)]">
              <span className="font-semibold">Cor:</span> {veiculo.cor}
            </p>
            <p className="text-[var(--color-gray-500)]">
              <span className="font-semibold">Placa:</span> {veiculo.placa}
            </p>
          </div>
          <div className="flex">
            <button
              className="flex-1 bg-[var(--color-blue-400)] hover:bg-[var(--color-blue-500)] text-[var(--color-gray-400)] font-bold py-3 transition-colors"
              onClick={retornar}
            >
              Não, voltar
            </button>
            <button
              className="flex-1 bg-[var(--color-red)] hover:bg-[var(--color-orange)] text-[var(--color-gray-50)] font-bold py-3 flex items-center justify-center transition-colors"
              onClick={deletarVeiculo}
            >
              <span>Sim, deletar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletarVeiculo;