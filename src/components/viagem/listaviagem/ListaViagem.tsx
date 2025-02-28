import { useEffect, useState } from "react";
import Viagem from "../../../models/Viagem";
import { listar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CardViagem from "../cardviagem/CardViagem";

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
