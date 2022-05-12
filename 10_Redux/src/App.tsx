import React, { useEffect } from "react";
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
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer, setToken } from "./store";
import { useDispatch } from "react-redux";


const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  // const [token] = useToken();

  // const value = useSelector<RootState, string>(state => state.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.__token__) {
      dispatch(setToken(window.__token__));
    }
    }, []);

  // const { Provider } = tokenContext;
  // const CommentProvider = commentContext.Provider;
  return (
    // <Provider store={store}>
    //  <tokenContext.Provider value={token}>
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
    //      </tokenContext.Provider>
    //  </Provider>
  );
}

// export const App = hot(() => <AppComponent />);
export const App = hot(() =>
  <Provider store={store}>
    <AppComponent />
  </Provider>);
