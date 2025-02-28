import { useNavigate, useParams } from "react-router-dom";
import Veiculo from "../../../models/Veiculo";
import { useState, useEffect, ChangeEvent } from "react";
import { atualizar, cadastrar, listar } from "../../../services/Service";
import Viagem from "../../../models/Viagem";
import { RotatingLines } from "react-loader-spinner";

function FormViagem() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [veiculo, setVeiculo] = useState<Veiculo>({
    id: 0,
    modelo: "",
    marca: "",
    ano: 0,
    cor: "",
    tipo: "",
    foto: "",
    placa: "",
    tipo_combustivel: "",
    tipo_transmissao: "",
    capacidade: 0,
    num_assentos: 0,
    itens: "",
    disponibilidade: false,
    viagem: null,
  });

  const [viagem, setViagem] = useState<Viagem>({} as Viagem);

  const { id } = useParams<{ id: string }>();

  async function buscarViagemPorId(id: string) {
    try {
      await listar(`/viagens/id/${id}`, setViagem, {
        headers: {},
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("erro");
      }
    }
  }

  async function buscarVeiculoPorId(id: string) {
    try {
      await listar(`/veiculos/id/${id}`, setVeiculo, {
        headers: {},
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("erro pesquisa veiculos");
      }
    }
  }

  async function buscarVeiculos() {
    try {
      await listar("/veiculos/all", setVeiculos, {
        headers: {},
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("Erro Pesqusiar Veiculos");
      }
    }
  }

  useEffect(() => {
    buscarVeiculos();

    if (id !== undefined) {
      buscarViagemPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setViagem({
      ...viagem,
      veiculo: veiculo,
    });
  }, [veiculo]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { type, value, name } = e.target;

    let valor: string | number = value;

    if (
      ["number", "range"].includes(type) ||
      (!isNaN(Number(value)) && value !== "")
    ) {
      valor = parseFloat(Number(value).toFixed(2));
    }

    setViagem({
      ...viagem,
      [name]: valor,
      veiculo: veiculo,
    });
  }

  function retornar() {
    navigate("/viagens");
  }

  async function gerarNovoViagens(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/viagens/atualizar`, viagem, setViagem, {
          headers: {},
        });

        alert("Viagem atualizada com sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
        } else {
          alert(error);
        }
      }
    } else {
      try {
        await cadastrar(`/viagens/cadastrar`, viagem, setViagem, {
          headers: {},
        });

        alert("Viagem cadastrada com sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
        } else {
          alert(error);
        }
      }
    }

    setIsLoading(false);
    //
  }
  const carregandoVeiculo = veiculo.modelo === "";

  return (
    <div className="container flex flex-col mx-auto items-center flex-wrap">
      <h1 className="text-4xl text-center my-8">
        {" "}
        {id !== undefined ? "Editar Viagem" : "Cadastrar Viagem"}
      </h1>
      <form className="flex flex-col w-1/2 gap-4 " onSubmit={gerarNovoViagens}>
        <div className="flex flex-col gap-2">
          <label htmlFor="bairro_partida">Bairro de Partida</label>
          <input
            type="text"
            placeholder="Bairro de Partida"
            name="bairro_partida"
            className="border-2 border-slate-700 rounded p-2"
            value={viagem.bairro_partida}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="cidade_partida">Cidade de Partida</label>
          <input
            type="text"
            placeholder="Cidade de Partida"
            name="cidade_partida"
            className="border-2 border-slate-700 rounded p-2"
            value={viagem.cidade_partida}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        {/* Input de Data de Partida */}
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="datadepartida">Data de Partida</label>
          <input
            type="date"
            name="data_partida"
            className="border-2 border-slate-700 rounded p-2"
            value={viagem.data_partida}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="bairrodedestino">Bairro de Destino</label>
          <input
            type="text"
            placeholder="Bairro de Destino"
            name="bairro_destino"
            className="border-2 border-slate-700 rounded p-2"
            value={viagem.bairro_destino}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cidadededestino">Cidade de Destino</label>
          <input
            type="text"
            placeholder="Bairro de Destino"
            name="cidade_destino"
            className="border-2 border-slate-700 rounded p-2"
            value={viagem.cidade_destino}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex gap-4">
          {/* Campo de Distância */}
          <div className="flex flex-col gap-2 w-1/3">
            <label htmlFor="distancia">Distância</label>
            <input
              type="number"
              placeholder="Em KM"
              name="distancia"
              value={viagem.distancia}
              className="border-2 border-slate-700 rounded p-2"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          {/* Campo de Velocidade Média */}
          <div className="flex flex-col gap-2 w-1/3">
            <label htmlFor="velocidademedia">Velocidade Média</label>
            <input
              type="number"
              placeholder="Em KM/h"
              name="vel_media"
              value={viagem.vel_media}
              className="border-2 border-slate-700 rounded p-2"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          {/* Campo de Preço */}
          <div className="flex flex-col gap-2 w-1/3 lg:w-1/4">
            <label htmlFor="preco">Preço</label>
            <input
              type="number"
              name="preco"
              value={viagem.preco}
              className="border-2 border-slate-700 rounded p-2"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
        </div>
        <div className="flex gap-4">
          {/* Campo de Veículo */}
          <div className="flex flex-col gap-2 flex-1">
            <p>Veiculo</p>
            <select
              name="veiculo"
              id="veiculo"
              className="border p-2 border-slate-800 rounded"
              onChange={(e) => buscarVeiculoPorId(e.currentTarget.value)}
            >
              <option value="" selected disabled>
                Selecione um veiculo
              </option>

              {veiculos.map((veiculo) => (
                <option value={veiculo.id}>{veiculo.modelo}</option>
              ))}
            </select>
          </div>

          {/* Campo de Duração */}
        </div>
        <button
          type="submit"
          className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/1 mx-auto py-2 flex justify-center "
          disabled={carregandoVeiculo}
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormViagem;
