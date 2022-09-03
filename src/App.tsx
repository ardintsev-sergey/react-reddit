import React, { useEffect, useState } from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content/Content";
import { CardsList } from "./shared/CardsList/CardsList";
import { UserContextProvider } from "./context/userContext";
import { PostsContextProvider } from "./context/postsContext";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer} from "./store/reducer";
import { useDispatch } from "react-redux";
import thunk from "redux-thunk";
import { saveToken } from "./store/token/action";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Post } from "./shared/Post";
import Error from "./shared/Error/Error";

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

function AppComponent() {
  const dispatch = useDispatch<any>();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  },[]);

  dispatch(saveToken());

  return (
    <>
      {mounted && (
        <BrowserRouter>
          <UserContextProvider>
            <PostsContextProvider>
              <Layout>
                <Header/>
                <Content>
                  <Routes>
                    <Route path="/posts/" element={<CardsList />} />
                    <Route path="/posts/:id" element={<Post />} />
                    <Route path="/error" element={<Error />} />
                    <Route path="/auth/" element={<Navigate to="/posts" replace />} />
                    <Route path="/*" element={<Navigate to="/error" replace />} />
                  </Routes>
                </Content>
              </Layout>
            </PostsContextProvider>
          </UserContextProvider>
        </BrowserRouter>
      )}
    </>
    );
  }

export const App = hot(() =>
  <Provider store={store}>
      <AppComponent />
  </Provider>);

