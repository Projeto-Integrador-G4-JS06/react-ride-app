import Carrossel from "../../components/carrossel/Carrossel";

function Sobre() {
    return (
        <>
            <section className="w-full h-full flex justify-center items-center bg-gray-200 p-10">
                <div className="container mx-auto px-4 flex flex-col lg:items-center lg:justify-between text-gray-900">
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className='text-center lg:w-1/2 px-4'>
                            <h2 className='md:text-5xl text-4xl font-bold text-[var(--color-aqua-dark)]'>
                                Quem Somos Nós?
                            </h2>
                            <p className='text-right text-base md:text-xl lg:text-2xl mb-8 text-gray-900 pt-8'>
                                O BoraAí é uma plataforma de caronas compartilhadas que conecta motoristas e passageiros
                                que possuem trajetos em comum. Com foco na praticidade, economia e sustentabilidade,
                                a aplicação permite criar e gerenciar viagens, promovendo a redução de custos e o impacto ambiental positivo.
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
                    <div className="w-full pt-10 max-w-screen-lg mx-auto overflow-hidden">
                        <h2 className='text-4xl font-bold text-[var(--color-aqua-dark)]'>Integrantes da Equipe</h2>
                        <div className="w-full">
                            <Carrossel />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sobre;
