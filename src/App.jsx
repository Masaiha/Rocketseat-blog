import { Header } from "./Components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";
import { Sidebar } from "./Components/Sidebar";

function App() {
  return (
    <>
      <Header />

      <div className={ styles.wrapper }>
        <Sidebar />
        <main>
          <Post author="Masanori Iha" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"/>

          <Post author="Fernanda Iha" content="Novo Post"/>
        </main>
      </div>
    </>
  )
}

export default App
