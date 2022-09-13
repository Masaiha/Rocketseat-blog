import { useState, useEffect } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function Post({ author, publishedAt, content }) {

    const [newCommentText, setNewCommentText] = useState('');
    const [comments, setComments] = new useState([]);

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale:ptBR });
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale:ptBR, addSuffix: true });

    function handleCreateNewComment() {
        event.preventDefault();
        
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    return (
        <article className={ styles.post }>
            <header>
                <div className={ styles.author }>
                    <Avatar src={ author.avatar_url }/>
                    <div className={ styles.authorInfo }>
                        <strong>{ author.name }</strong>
                        <span>{ author.role }</span>
                    </div>
                </div>

                <time title={ publishedDateFormatted } dateTime={ publishedAt.toISOString() }>{ publishedDateRelativeToNow }</time>
            </header>
            <div className={ styles.content }>
            {                
                content.map(line => {
                    if(line.type == 'paragraph'){
                        return <p>{ line.content }</p>
                    }else if(line.type === 'link'){
                        return <a href="#">{ line.content }</a> 
                    }else{
                        return ''
                    }
                    
                })
            }                    
            </div>

            <form onSubmit={ handleCreateNewComment } className={ styles.comentForm }>
                <strong>Deise seu feedback</strong>

                <textarea 
                    placeholder='Deixe seu comentário' 
                    cols="30" 
                    rows="10" 
                    name='comment'
                    value={ newCommentText }
                    onChange={ handleNewCommentChange }
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={ styles.commentList }>                
                {
                    comments?.map(comment => {
                        return <Comment content={comment}/>
                    })
                }                
            </div>
        </article>
    )
}