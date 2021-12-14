import React from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content/Content";
import { CardsList } from "./shared/CardsList/CardsList";
import { getValue } from "./shared/FunctionalExample";
import { MyHooks, useIsMounted } from "./shared/HooksExample";
import { GenericList } from "./utils/react/GenericList";
import { generateId, generateRandomString } from "./utils/react/generateRandomIndex";
import { merge } from "./utils/js/merge";
import { Dropdown } from "./shared/Dropdown/Dropdown";

const LIST = [
  { text: 'some' },
  { text: 'other some' },
  { text: 'some'},
].map(generateId)

function AppComponent() {
  // const [isVisible, setIsVisible] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [isVisible] = useIsMounted();
  // const handleItemClick = (id: string) => {
  //   console.log(id);
  // }

  const [list, setList] = React.useState(LIST)
  const handleItemClick = (id: string) => {
    setList(list.filter((item) => item.id != id))
  }

  const handleAdd = () => {
    setList(list.concat(generateId({text: generateRandomString()})))
  }

  return(
    <Layout>       
    <Header />
    <Content>
      <CardsList />
      {/* <button onClick={() => setIsVisible(!isVisible)}>Change me!</button> */}
      <input type="text" onChange={getValue(setTitle)} />
      {isVisible && <MyHooks title={title} id='11' />}
      <button onClick={handleAdd}>Добавить элемент</button>
      <GenericList list={LIST.map(merge({onClick: handleItemClick }))}  />
      <Dropdown onOpen={() => console.log('opened')} onClose={() => console.log('closed')} isOpen={false} button={<button>Test</button>}>
      <ul>
      <GenericList list={LIST.map(merge({onClick: handleItemClick }))}  />  
      </ul>  
    </Dropdown>
    </Content>    
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
