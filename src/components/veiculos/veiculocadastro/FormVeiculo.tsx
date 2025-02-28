// import { ChangeEvent, useEffect, useState } from "react";
// import { atualizar, cadastrar, listar } from "../../../services/Service";
// import { useNavigate, useParams } from "react-router-dom";
// import Veiculo from "../../../models/Veiculo";
// import Viagem from "../../../models/Viagem";

// function FormVeiculo() {

//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState<boolean>(false);
//     const [veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo);
  
  
//     const { id } = useParams<{ id: string }>();
  

  
//     async function buscarVeiculoPorId(id: string) {
//       try {
//         await listar(`/viagens/id/${id}`, setVeiculo,{
//           headers: {},
//         });
//       } catch (error: any) {
//         if (error.toString().includes("403")) {
//           alert("erro pesquisa veiculos");
//         }
//       }
//     }
  
//     async function buscarVeiculos() {
//       try {
//         await listar("/veiculos/all", setVeiculos, {
//           headers: {},
//         });
//       } catch (error: any) {
//         if (error.toString().includes("403")) {
//           alert("Erro Pesqusiar Veiculos");
//         }
//       }
//     }
  
//     useEffect(() => {
//       buscarVeiculos();
  
//       if (id !== undefined) {
//         buscarViagemPorId(id);
//       }
//     }, [id]);
  
//     useEffect(() => {
//       setViagem({
//         ...viagem,
//         veiculo: veiculo,
//       });
//     }, [veiculo]);
  
//     function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
//       const { type, value, name } = e.target;
  
//       let valor: string | number = value;
  
//       if (
//         ["number", "range"].includes(type) ||
//         (!isNaN(Number(value)) && value !== "")
//       ) {
//         valor = parseFloat(Number(value).toFixed(2));
//       }
  
//       setViagem({
//         ...viagem,
//         [name]: valor,
//         veiculo: veiculo,
//       });
//     }
  
//     function retornar() {
//       navigate("/viagens");
//     }
  
//     async function gerarNovoViagens(e: ChangeEvent<HTMLFormElement>) {
//       e.preventDefault();
//       setIsLoading(true);
  
//       if (id !== undefined) {
//         try {
//           await atualizar(/viagens/atualizar, viagem, setViagem, {
//             headers: {},
//           });
  
//           alert("Viagem atualizada com sucesso");
//         } catch (error: any) {
//           if (error.toString().includes("403")) {
//           } else {
//             alert(error);
//           }
//         }
//       } else {
//         try {
//           await cadastrar(/viagens/cadastrar, viagem, setViagem, {
//             headers: {},
//           });
  
//           alert("Viagem cadastrada com sucesso");
//         } catch (error: any) {
//           if (error.toString().includes("403")) {
//           } else {
//             alert(error);
//           }
//         }
//       }
  
//       setIsLoading(false);
//       //
//     }
//     const carregandoVeiculo = veiculo.modelo === "";

//     return (
//         <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
//             <h1 className="text-4xl text-center font-bold text-gray-800 mb-6">
//                 Cadastrar Veículo
//             </h1>

//             <form className="w-full max-w-2xl mx-auto flex flex-col gap-6">
//                 <div className="grid grid-cols-2 gap-4">
//                     <div className="flex flex-col">
//                         <label
//                             className="font-semibold text-gray-700"
//                             htmlFor="modelo"
//                         >
//                             Modelo
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Modelo"
//                             name="modelo"
//                             required
//                             className="border p-2 rounded-lg"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label
//                             className="font-semibold text-gray-700"
//                             htmlFor="marca"
//                         >
//                             Marca
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Marca"
//                             name="marca"
//                             required
//                             className="border p-2 rounded-lg"
//                         />
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                     <div className="flex flex-col">
//                         <label
//                             className="font-semibold text-gray-700"
//                             htmlFor="ano"
//                         >
//                             Ano
//                         </label>
//                         <input
//                             type="number"
//                             min="1980"
//                             max="2025"
//                             placeholder="Ano"
//                             className="border p-2 rounded-lg"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label
//                             className="font-semibold text-gray-700"
//                             htmlFor="cor"
//                         >
//                             Cor
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Cor"
//                             name="cor"
//                             required
//                             className="border p-2 rounded-lg"
//                         />
//                     </div>
//                 </div>

//                 <div className="flex flex-col">
//                     <label
//                         className="font-semibold text-gray-700"
//                         htmlFor="tipo"
//                     >
//                         Tipo
//                     </label>
//                     <select name="tipo" className="border p-2 rounded-lg">
//                         <option value="" disabled selected>
//                             Selecione um tipo de veículo
//                         </option>
//                     </select>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                     <div className="flex flex-col">
//                         <label
//                             className="font-semibold text-gray-700"
//                             htmlFor="placa"
//                         >
//                             Placa
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="ABC-1234"
//                             name="placa"
//                             required
//                             className="border p-2 rounded-lg"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label
//                             className="font-semibold text-gray-700"
//                             htmlFor="tipo_combustivel"
//                         >
//                             Tipo de Combustível
//                         </label>
//                         <select
//                             name="tipo_combustivel"
//                             className="border p-2 rounded-lg"
//                         >
//                             <option value="" disabled selected>
//                                 Selecione um tipo de combustível
//                             </option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                     <div className="flex flex-col">
//                         <label
//                             className="font-semibold text-gray-700"
//                             htmlFor="tipo_transmissao"
//                         >
//                             Tipo de Transmissão
//                         </label>
//                         <select
//                             name="tipo_transmissao"
//                             className="border p-2 rounded-lg"
//                         >
//                             <option value="" disabled selected>
//                                 Selecione um tipo de Transmissão
//                             </option>
//                         </select>
//                     </div>
//                     <div className="flex flex-col">
//                         <label
//                             className="font-semibold text-gray-700"
//                             htmlFor="capacidade"
//                         >
//                             Capacidade (L)
//                         </label>
//                         <input
//                             type="number"
//                             placeholder="Em Litros"
//                             name="capacidade"
//                             required
//                             className="border p-2 rounded-lg"
//                         />
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                     <div className="flex flex-col">
//                         <label
//                             className="font-semibold text-gray-700"
//                             htmlFor="assentos"
//                         >
//                             Número de Assentos
//                         </label>
//                         <input
//                             type="number"
//                             placeholder="Número de assentos"
//                             name="assentos"
//                             required
//                             className="border p-2 rounded-lg"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label
//                             className="font-semibold text-gray-700"
//                             htmlFor="itens"
//                         >
//                             Itens Opcionais
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Ex: Ar condicionado, Direção Hidráulica"
//                             name="itens"
//                             required
//                             className="border p-2 rounded-lg"
//                         />
//                     </div>
//                 </div>

//                 <button
//                     type="submit"
//                     className="mt-4 rounded-lg bg-indigo-500 hover:bg-indigo-700 text-white font-bold w-full py-2"
//                 >
//                     Cadastrar Veículo
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default FormVeiculo;
