import * as s from "./styled-home";
import {
  Footer,

  Header,
  TituloSecao,
  Card,


  InputButton,
} from "../../componentes";

import { MyContext } from "../../contexto";


import { Cleo, Eu, Logo } from "../../imagens";
import { useContext } from "react";


const Home = () => {
  const { setNomeUsuario, 
    nomeUsuario } = useContext(MyContext);

  const telas = [
    {
      titulo: "Formulário em HTML e CSS",
      link: "/form-basico",
      descricao: (
        <p>
          O primeiro <i>“Hello World”</i> a gente nunca esquece. O primeiro
          formulário feito na aula de Introdução ao HTML e CSS.
        </p>
      ),
    },
    {
      titulo: "Formulário 2.0",
      link: "/form-completo",
      descricao: (
        <p>
          O primeiro <i>“console.log”</i> a gente também não esquece. O
          formulário funcional e agora com React JS + HTML + CSS.
        </p>
      ),
    },
    {
      titulo: "Consumindo API's",
      link: "/consumindo-apis",
      descricao:
        "Brincando com a API viaCEP, informando um CEP, salvando os valores digitados no estado e mostrando os dados na tela.",
    },
    {
      titulo: "A PAIPE e os Paipers",
      link: "/sobre-paipers",
      descricao:
        "Uma página bônus de presente para deixar o seu projeto ainda mais completo. E de quebra ficar por dentro do que acontece na Paipe.",
    },
  ];

  return (
    <s.Container>
      <Header />
      <s.Banner>

        <h1>Que prazer te ver aqui,   
             {" " +nomeUsuario}!
          </h1>
        <img src={Logo} />
        <h2>
          Seja bem-vindo(a) ao Let’s Dev! O evento que vai transformar sua
          carreira.
        </h2>
        <p>
          Você está no módulo Front-end e vai aprender a criar um site básico do
          zero.
        </p>
      </s.Banner>
      <s.Content>
        <TituloSecao titulo="O que fizemos até agora..." />

        <s.GroupCards>
          {telas.map((card) => (
            <Card
              titulo={card.titulo}
              link={card.link}
              descricao={card.descricao}
            />
          ))}
        </s.GroupCards>

        <TituloSecao titulo="Um pouco sobre mim..." />

        <s.Row>
          <img src={Eu} />
          <s.Column>
            <h3>{nomeUsuario}</h3>
            <p>
              Sou um sujeito simples, dedicado e focado. Gosto de praticar atividades físicas, assistir séries e filmes.
              Depois de mais de 10 anos trabalhando e estudando na área de modelamento e  desenvolvimento 3D
              resolvi mudar o rumo da minha carreira e estudos em busca de novos desafios.
              No início do ano larguei um emprego estável de quase 7 anos para ir em busca do meu objetivo.
              Não está sendo fácil, mas eu sei que com o meu esforço e dedicação a hora vai chegar.
            </p>
            <p>

            </p>
            <s.ButtonGroup>
              <InputButton
                outlined
                type="submit"
                value="LinkedIn"
                onClick={() => {
                  // linkedIn
                  window.open("https://www.linkedin.com/in/cleomar-joaquim-175269b8/", "_blank");
                }}
              />   
              <InputButton
                type="submit"
                value="GitHub"
                onClick={() => {
                  // GitHub
                  window.open("https://github.com/cleomarjoaquim", "_blank");
                }}
              />
            </s.ButtonGroup>
          </s.Column>
        </s.Row>
      </s.Content>
      <Footer />
    </s.Container>
  );
};

export default Home;