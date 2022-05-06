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
import { commentContext } from "./context/commentContext";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./store";


const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  const [token] = useToken();
  const [commentValue, setCommentValue] = useState('')
  // const { Provider } = tokenContext;

  const CommentProvider = commentContext.Provider;
  return(
    <Provider store={store}>
      <CommentProvider value={{
        value: commentValue,
        onChange: setCommentValue,
      }}>
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
    </CommentProvider>
    </Provider>

  );
}

export const App = hot(() => <AppComponent />);
