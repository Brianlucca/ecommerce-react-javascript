import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

function About() {
  return (
    <div>
      <Header />
      <main className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
        <section className="bg-white shadow-lg rounded-lg p-6 max-w-4xl">
          <h1 className="text-3xl font-bold mb-4 text-gray-600">
            Sobre o Projeto
          </h1>
          <p className="text-lg mb-4">
            Projeto feito para fins de estudo, sem intuito de retorno
            financeiro. O site retorna apenas produtos da API do Mercado Livre.
            Fique à vontade para acessar o nosso site, espero que goste.
          </p>
          <p className="text-lg mb-4">
            Projeto feito por Brian Lucca e Ruan Brito da comunidade Codex
            Space. Fique à vontade para acessar o link QR code no footer para
            acessar nossa comunidade ou{" "}
            <a
              href="https://www.codexspace.com.br/"
              target="_blank"
              className="text-blue-500 underline"
            >
              acesse nosso site
            </a>{" "}
            para saber o que vai encontrar no nosso servidor.
          </p>
          <div className="flex justify-around mt-6">
            <div className="text-center">
              <img
                className="w-32 h-32 bg-gray-300 rounded-full mb-2"
                src="https://media.licdn.com/dms/image/D4E03AQEYTbnpA77_Fw/profile-displayphoto-shrink_400_400/0/1697761716240?e=1727913600&v=beta&t=nhUJAum3aJ2XjmBm96H65a5iSa_JN1Pw07E1mHSUCzc"
                alt="Brian Lucca"
              />
              <p>Brian Lucca</p>
            </div>
            <div className="text-center">
              <img
                className="w-32 h-32 bg-gray-300 rounded-full mb-2"
                src="https://media.licdn.com/dms/image/D4D03AQFbA_Mne359-Q/profile-displayphoto-shrink_400_400/0/1691020897237?e=1727913600&v=beta&t=wk8WKEwuP3FVtkEiunJ-8Mr94T1OAoeS3FIa5xLIp_w"
                alt="Ruan Brito"
              />
              <p>Ruan Brito</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
