import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Viagem from "../../../models/Viagem";
import { deletar, listar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { RotatingLines } from "react-loader-spinner";

function DeletarViagem() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [viagem, setViagem] = useState<Viagem>({} as Viagem);

  const { id } = useParams<{ id: string }>();

  // Função para buscar a viagem pelo id
  async function buscarPorId(id: string) {
    try {
      await listar(`/viagens/id/${id}`, setViagem, { headers: {} }); // Corrigido o endpoint para buscar viagens
    } catch (error: any) {
      console.error("Erro ao buscar viagem:", error);
      if (error.toString().includes("403")) {
        alert("Sua sessão expirou. Faça login novamente.");
        navigate("/");
      } else {
        ToastAlerta("Erro ao carregar a viagem.", "erro"); // Corrigido a mensagem de erro
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
    navigate("/viagens");
  }

  async function deletarViagem() {
    setIsLoading(true);

    try {
      await deletar(`/viagens/${id}`, { headers: {} });
      ToastAlerta("Viagem deletada com sucesso!", "sucesso");
      navigate("/viagens");
    } catch (error: any) {
      console.error("Erro ao deletar viagem:", error);
      if (error.toString().includes("403")) {
        alert("Sua sessão expirou. Faça login novamente.");
        navigate
      } else {
        alert("Erro ao deletar a viagem. Tente novamente");
      }
    }
    setIsLoading(false);
  }

  // Caso a viagem não tenha sido carregada ainda, exibe um spinner de carregamento
  if (!viagem.cidade_destino) {
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
      <div className="container w-full max-w-2xl mx-auto p-6 bg-[var(--color-blue-50)] rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-4xl text-center my-6 text-[var(--color-gray-400)] font-[var(--font-poppins)]">
          Deletar Viagem
        </h1>

        <p className="text-center text-[var(--color-gray-500)] mb-6">
          Você tem certeza de que deseja apagar a seguinte viagem?
        </p>

        <div className="border border-[var(--color-blue-400)] rounded-lg overflow-hidden bg-[var(--color-blue-100)] w-full">
          <header className="py-3 px-6 bg-[var(--color-blue-400)] text-[var(--color-gray-400)] text-2xl text-center font-[var(--font-poppins)]">
            {viagem.cidade_destino}
          </header>
          <div className="p-6 flex flex-col items-center">
            <p className="text-[var(--color-gray-400)]">
              <span className="font-semibold">Partida:</span> {viagem.bairro_partida} - {viagem.cidade_partida}
            </p>
            <p className="text-[var(--color-gray-400)]">
              <span className="font-semibold">Destino:</span> {viagem.cidade_destino}
            </p>
            <p className="text-[var(--color-gray-400)]">
              <span className="font-semibold">Data:</span> {viagem.data_partida}
            </p>
          </div>
          <div className="flex">
            <button
              className="flex-1 bg-[var(--color-blue-400)] hover:bg-[var(--color-blue-500)] text-[var(--color-gray-400)] py-3 transition-colors font-[var(--font-poppins)]"
              onClick={retornar}
            >
              Não, voltar
            </button>
            <button
              className="flex-1 bg-[var(--color-red)] hover:bg-[var(--color-orange)] text-[var(--color-gray-50)] py-3 flex items-center justify-center transition-colors font-[var(--font-poppins)]"
              onClick={deletarViagem}
            >
              <span>Sim, deletar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletarViagem;