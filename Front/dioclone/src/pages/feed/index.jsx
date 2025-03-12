import React from "react";
import Header from "../../components/Header";
import { FeedContainer, Main, TopUsersContent } from "./styles";

import FeedCard from "../../components/FeedCard";
import UserInfo from "../../components/UserInfo";

const Home = () => {
  return (
    <>
      <Header authenticated={true} />
      <Main>
        <FeedContainer>
          <h1>Feed</h1>
          <FeedCard
            banner={
              "https://viventeandante.com/wp-content/uploads/2025/01/tudo-sobre-dragon-ball-daima.webp"
            }
            name={"Luiz Fabiano de Souza"}
            userImg={"https://avatars.githubusercontent.com/u/137304972?v=4"}
            time={32}
            title={"Dragon Ball Daima "}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt quasi molestiae id, culpa facere eveniet doloremque pariatur placeat velit. Itaque et nisi vitae, architecto ipsa dolor aliquam non nulla?"
            }
            likes={123}
          />

          <FeedCard
            banner={
              "https://kinsta.com/pt/wp-content/uploads/sites/3/2023/04/react-must-be-in-scope-when-using-jsx.jpg"
            }
            name={"Luiz Fabiano de Souza"}
            userImg={"https://avatars.githubusercontent.com/u/137304972?v=4"}
            time={32}
            title={"React JS"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt quasi molestiae id, culpa facere eveniet doloremque pariatur placeat velit. Itaque et nisi vitae, architecto ipsa dolor aliquam non nulla?"
            }
            likes={123}
          />

          <FeedCard
            banner={
              "https://hermes.dio.me/articles/cover/45f97e1b-09b8-48cc-8d89-782eb8626142.png"
            }
            name={"Luiz Fabiano de Souza"}
            userImg={"https://avatars.githubusercontent.com/u/137304972?v=4"}
            time={32}
            title={".NET"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt quasi molestiae id, culpa facere eveniet doloremque pariatur placeat velit. Itaque et nisi vitae, architecto ipsa dolor aliquam non nulla?"
            }
            likes={123}
          />

        </FeedContainer>
        <TopUsersContent>
          <h3># RANKING TOP 5 DA SEMANA</h3>
          <UserInfo
            image={"https://avatars.githubusercontent.com/u/137304972?v=4"}
            nome={'Luiz Fabiano de Souza'}
            percentual={88}
          />
          <UserInfo
            image={"https://avatars.githubusercontent.com/u/137304972?v=4"}
            nome={'Luiz Fabiano de Souza'}
            percentual={79}
          />
          <UserInfo
            image={"https://avatars.githubusercontent.com/u/137304972?v=4"}
            nome={'Luiz Fabiano de Souza'}
            percentual={64}
          />
          <UserInfo
            image={"https://avatars.githubusercontent.com/u/137304972?v=4"}
            nome={'Luiz Fabiano de Souza'}
            percentual={50}
          />
          <UserInfo
            image={"https://avatars.githubusercontent.com/u/137304972?v=4"}
            nome={'Luiz Fabiano de Souza'}
            percentual={32}
          />
        </TopUsersContent>
      </Main>
    </>
  );
};

export default Home;
