import React, { useEffect, useState } from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content/Content";
import { CardsList } from "./shared/CardsList/CardsList";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./context/tokenContext";
import { UserContextProvider } from "./context/userContext";
import { PostsContextProvider } from "./context/postsContext";

function AppComponent() {
  const [token] = useToken();
  // const { Provider } = tokenContext;    

  return(
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <PostsContextProvider>
        <Layout>       
          <Header/>
          <Content>
            <CardsList />    
          </Content>    
        </Layout>
        </PostsContextProvider>
      </UserContextProvider>      
    </tokenContext.Provider>    
  );
}

export const App = hot(() => <AppComponent />);
