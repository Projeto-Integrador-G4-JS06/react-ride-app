import { Pencil, Trash } from "@phosphor-icons/react";
import Veiculo from "../../../models/Veiculo";

interface CardVeiculoProps {
  veiculo: Veiculo;
}

function CardVeiculo({ veiculo }: CardVeiculoProps) {
  return (
    <div className="flex flex-col justify-between my-10 mx-10 overflow-hidden bg-gray-50 w-[13.5rem] h-[20rem] rounded-lg">
      <div className="flex items-end  border-amber-500 bg-orange py-1.5 justify-end pt-2 pr-2">
        {/* <Link to={`/editarveiculo/${veiculo.id}`}> */}
        <Pencil
          size={24}
          color="#293241"
          className="mr-1 hover:fill-teal-800"
        />
        {/* </Link> */}
        {/* <Link to={`/deletarveiculo/${veiculo.id}`}> */}
        <Trash size={24} color="#293241" className="mr-1 hover:fill-red-700" />
        {/* </Link> */}
      </div>

      <div className="py-4">
        <img
          src={veiculo.foto}
          className="mx-auto my-1.5 rounded-full w-[8rem] h-[8rem] max-w-75"
          alt="Imagem do carro"
        />

        <div className="p-4 flex flex-col items-center">
          <p className="text-sm font-poppins">Marca: {veiculo.marca} </p>
          <p className="text-sm font-poppins">Modelo: {veiculo.modelo}</p>
          <p className="text-sm font-poppins">Ano: {veiculo.ano}</p>
          <p className="text-sm font-poppins">Cor: {veiculo.cor}</p>
          <p className="text-sm font-poppins">Placa: {veiculo.placa}</p>
        </div>
      </div>
    </div>
  );
}

export default CardVeiculo