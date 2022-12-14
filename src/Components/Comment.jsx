import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {        
        onDeleteComment(content);
    }

    //Quando for necessário atualizar um valor que depende
    //do valor antigo, utilizar essa forma, onte state pega
    //o valor anterior.
    function handleLikeCount() {
        setLikeCount((state) => {
            return state + 1;
        })
    }
    

    return(
        <div className={ styles.comment }>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/14970377?v=4"/>

            <div className={ styles.commentBox }>
                <div className={ styles.commentContent }>
                    <header>
                        <div className={ styles.authorAndTime }>
                            <strong>Masanori Iha</strong>
                            <time title='11 de Maio às 8:13' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>

                        <button 
                            onClick={ handleDeleteComment }
                            title='Deletar comentário'
                        >
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{ content }</p>
                </div>

                <footer>
                    <button onClick={ handleLikeCount }>
                        <ThumbsUp />  Aplaudir <span>{ likeCount }</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}