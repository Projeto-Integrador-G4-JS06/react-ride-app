import { useEffect, useState } from "react";
import Viagem from "../../../models/Viagem";
import { listar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CardViagem from "../cardviagem/CardViagem";
import { Plus } from "@phosphor-icons/react";

function ListaViagens() { 
  const [viagens, setViagens] = useState<Viagem[]>([]);

  async function buscarViagens() {
    try {
      await listar("/viagens/all", setViagens, {
        headers: {},
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("erro");
      }
    }
  }

  useEffect(() => {
    buscarViagens();
  }, [viagens.length]);

  return (
    <>
      {/* {viagens.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )} */}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
                   <div className="items-end flex justify-end m-4">
              <button className="flex flex-row gap-2 text-base hover:cursor-pointer hover:bg-amber-100 border-orange border-2 font-semibold bg-white text-orange rounded-2xl p-2">
                <Plus size={20} color="#ffa500"/>
                Cadastrar nova viagem
              </button>
              </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3
                                    lg:grid-cols-5 gap-8"
          >
            {viagens.map((viagem) => (
              <CardViagem key={viagem.id} viagem={viagem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaViagens;
