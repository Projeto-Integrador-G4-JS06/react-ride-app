import { ChangeEvent, useEffect, useState } from "react";
import { atualizar, cadastrar, listar } from "../../../services/Service";
import { useNavigate, useParams } from "react-router-dom";
import Veiculo from "../../../models/Veiculo";

function FormVeiculo() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
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
        disponibilidade: true, // Valor fixo
        viagem: null,
    });

    const { id } = useParams<{ id: string }>();

    async function buscarVeiculoPorId(id: string) {
        try {
            await listar(`/viagens/id/${id}`, setVeiculo, {
                headers: {},
            });
        } catch (error: any) {
            if (error.toString().includes("403")) {
                alert("erro pesquisa veiculos");
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarVeiculoPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setVeiculo({
            ...veiculo,
            [e.target.name]: e.target.value,
        });
    }

    async function gerarNovoVeiculo(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/veiculos/atualizar`, veiculo, setVeiculo, {});
                alert("O veiculo foi atualizado com sucesso!");
            } catch (error: any) {
                if (error.toString().includes("403")) {
                    console.log("erro");
                } else {
                    alert("Erro ao atualizar o veiculo1.");
                }
            }
        } else {
            try {
                await cadastrar(`/veiculos/cadastrar`, veiculo, setVeiculo, {});
                alert("O veiculo foi cadastrado com sucesso!");
            } catch (error: any) {
                if (error.toString().includes("403")) {
                } else {
                    alert(error);
                }
            }

            setIsLoading(false);
            retornar();
        }

        function retornar() {
            navigate("/veiculos");
        }
    }
    return (
        <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl text-center font-bold text-gray-800 mb-6">
                {id === undefined ? "Cadastrar Veículo" : "Editar Veículo"}
            </h1>

            <form
                onSubmit={gerarNovoVeiculo}
                className="w-full max-w-2xl mx-auto flex flex-col gap-6"
            >
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label
                            className="font-semibold text-gray-700"
                            htmlFor="modelo"
                        >
                            Modelo
                        </label>
                        <input
                            type="text"
                            placeholder="Modelo"
                            name="modelo"
                            required
                            className="border p-2 rounded-lg"
                            value={veiculo.modelo}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            className="font-semibold text-gray-700"
                            htmlFor="marca"
                        >
                            Marca
                        </label>
                        <input
                            type="text"
                            placeholder="Marca"
                            name="marca"
                            required
                            className="border p-2 rounded-lg"
                            value={veiculo.marca}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label
                            className="font-semibold text-gray-700"
                            htmlFor="ano"
                        >
                            Ano
                        </label>
                        <input
                            type="number"
                            name="ano"
                            min="1980"
                            max="2025"
                            placeholder="Ano"
                            className="border p-2 rounded-lg"
                            value={veiculo.ano}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            className="font-semibold text-gray-700"
                            htmlFor="cor"
                        >
                            Cor
                        </label>
                        <input
                            type="text"
                            placeholder="Cor"
                            name="cor"
                            required
                            className="border p-2 rounded-lg"
                            value={veiculo.cor}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label
                        className="font-semibold text-gray-700"
                        htmlFor="tipo"
                    >
                        Tipo
                    </label>
                    <select
                        name="tipo"
                        className="border p-2 rounded-lg"
                        value={veiculo.tipo}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                            atualizarEstado(e)
                        }
                    >
                        <option value="" disabled>
                            Selecione um tipo de veículo
                        </option>
                        <option value="Hatchback">Hatchback</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Pickup">Pickup</option>
                        <option value="SUV">SUV</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label
                        className="font-semibold text-gray-700"
                        htmlFor="foto"
                    >
                        Foto
                    </label>
                    <input
                        type="text"
                        placeholder="foto"
                        name="foto"
                        required
                        className="border p-2 rounded-lg"
                        value={veiculo.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            atualizarEstado(e)
                        }
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label
                            className="font-semibold text-gray-700"
                            htmlFor="placa"
                        >
                            Placa
                        </label>
                        <input
                            type="text"
                            placeholder="ABC-1234"
                            name="placa"
                            required
                            className="border p-2 rounded-lg"
                            value={veiculo.placa}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            className="font-semibold text-gray-700"
                            htmlFor="tipo_combustivel"
                        >
                            Tipo de Combustível
                        </label>
                        <select
                            name="tipo_combustivel"
                            className="border p-2 rounded-lg"
                            value={veiculo.tipo_combustivel}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                setVeiculo({
                                    ...veiculo,
                                    tipo_combustivel: e.target.value,
                                });
                            }}
                        >
                            <option value="" disabled>
                                Selecione um tipo de combustível
                            </option>
                            <option value="Gasolina">Gasolina</option>
                            <option value="Etanol">Etanol</option>
                            <option value="Flex">Flex</option>
                            <option value="Hibrido">Híbrido</option>
                            <option value="Eletrico">Elétrico</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label
                            className="font-semibold text-gray-700"
                            htmlFor="tipo_transmissao"
                        >
                            Tipo de Transmissão
                        </label>
                        <select
                            name="tipo_transmissao"
                            className="border p-2 rounded-lg"
                            value={veiculo.tipo_transmissao}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                setVeiculo({
                                    ...veiculo,
                                    tipo_transmissao: e.target.value,
                                });
                            }}
                        >
                            <option value="" disabled>
                                Selecione um tipo de Transmissão
                            </option>
                            <option value="Manual">Manual</option>
                            <option value="Automatica">Automática</option>
                            <option value="CVT">CVT</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label
                            className="font-semibold text-gray-700"
                            htmlFor="capacidade"
                        >
                            Capacidade (L)
                        </label>
                        <input
                            type="number"
                            placeholder="Em Litros"
                            name="capacidade"
                            required
                            className="border p-2 rounded-lg"
                            value={veiculo.capacidade}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label
                            className="font-semibold text-gray-700"
                            htmlFor="num_assentos"
                        >
                            Número de Assentos
                        </label>
                        <input
                            type="number"
                            placeholder="Número de assentos"
                            name="num_assentos"
                            required
                            className="border p-2 rounded-lg"
                            value={veiculo.num_assentos}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            className="font-semibold text-gray-700"
                            htmlFor="itens"
                        >
                            Itens Opcionais
                        </label>
                        <input
                            type="text"
                            placeholder="Ex: Ar condicionado, Direção Hidráulica"
                            name="itens"
                            required
                            className="border p-2 rounded-lg"
                            value={veiculo.itens}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)
                            }
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-4 rounded-lg bg-indigo-500 hover:bg-indigo-700 text-white font-bold w-full py-2"
                >
                    <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                </button>
            </form>
        </div>
    );
}

export default FormVeiculo;
