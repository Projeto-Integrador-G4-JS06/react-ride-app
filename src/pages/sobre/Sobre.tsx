import Carrossel from "../../components/carrossel/Carrossel";

function Sobre() {
    return (
        <>
            <section className="w-full h-full flex justify-center items-center bg-gray-200 p-10">
                <div className="container mx-auto px-4 flex flex-col lg:items-center lg:justify-between text-gray-900">
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className='text-center  lg:w-1/2 px-4'>
                            <h2 className='text-5xl font-bold text-[var(--color-aqua-dark)]'>
                                Quem Somos Nós?
                            </h2>
                            <p className='text-left text-base md:text-xl lg:text-2xl mb-8 text-gray-900 pt-8'>
                                O PeopleHub é uma API escalável para gestão de colaboradores em Recursos Humanos. Permite cadastrar, consultar, atualizar e remover funcionários com segurança, armazenando dados como nome, cargo, salário e admissão. Intuitiva e eficiente, simplifica a administração de dados e otimiza processos de RH.
                            </p>
                        </div>
                        <div className="mt-8 lg:mt-0 lg:w-1/2 flex w-full justify-center">
                            <img
                                src="https://ik.imagekit.io/22g34n0mo/SVG/car-sharing-concept-illustration.png?updatedAt=1740747680425"
                                alt="Imagem Página Home"
                                className="w-[400px] md:w-[600px] lg:w-[800px] mx-auto"
                            />
                        </div>
                    </div>
                    <div className="w-full pt-10 max-w-screen-md mx-auto overflow-hidden">
                        <h2 className='text-5xl font-bold text-[var(--color-aqua-dark)]'>Integrantes da Equipe</h2>
                        <Carrossel />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sobre;
