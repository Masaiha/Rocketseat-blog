import styles from './Post.module.css';


export function Post() {
    return (
        <article className={ styles.post }>
            <header>
                <div className={ styles.author }>
                    <img class="_avatar_2ovoz_21" src="https://avatars.githubusercontent.com/u/14970377?v=4" alt="" />
                    <div className={ styles.authorInfo }>
                        <strong>Masanori Iha</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de maio às 08:13' dateTime='2022-05-11 08:13:38'>Publicado em 1h</time>
            </header>

            <div className={ styles.content }>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> <a href="#">👉 jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a> {' '}
                    <a href="#">#nlw</a> {' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={ styles.comentForm }>
                <strong>Deise seu feedback</strong>

                <textarea placeholder='Deixe seu comentário' cols="30" rows="10"></textarea>

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
        </article>
    )
}