import React, { useEffect } from "react";
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
import { rootReducer, setToken } from "./store/reducer";
import { useDispatch } from "react-redux";
import thunk from "redux-thunk";

// const logger: Middleware = (store) => (next) => (action) => {
//   console.log('dispatching:', action);
//   const returnValue = next(action);
//   console.log('action after next:', returnValue);
// }

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

// const timeout = (ms: number): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, _getState) => {
//   dispatch({ type: 'START' });
//   setTimeout(() => {
//     dispatch({ type: 'FINISH' });
//   }, ms);
// }

function AppComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.__token__) {
      dispatch(setToken(window.__token__));
    };
    // @ts-ignore
    // store.dispatch(timeout(5000));
    }, []);

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
