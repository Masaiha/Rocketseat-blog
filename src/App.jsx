import { Header } from "./Components/Header";
import { Post } from "./Components/Post";

import styles from "./App.module.css";
import { Sidebar } from "./Components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatar_url: 'https://avatars.githubusercontent.com/u/14970377?v=4',
      name: 'Masanori Iha',
      role: 'Desenvolvedor Web'
    },
    content: [
       { type: 'paragraph', content: 'Fala galeraa 👋' }
      ,{ type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' }
      ,{ type: 'link', content: '👉 jane.design/doctorcare' }       
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatar_url: 'https://avatars.githubusercontent.com/u/103864822?v=4',
      name: 'Fernanda Iha',
      role: 'Empresária'
    },
    content: [
       { type: 'paragraph', content: 'Fala galeraa 👋' }
      ,{ type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' }
      ,{ type: 'link', content: '👉 jane.design/doctorcare' }       
    ],
    publishedAt: new Date('2022-05-04 19:23:43')
  }
]


function App() {
  return (
    <>
      <Header />

      <div className={ styles.wrapper }>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={ post.id }
                  author= { post.author }
                  content= { post.content }
                  publishedAt= { post.publishedAt }
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}

export default App
