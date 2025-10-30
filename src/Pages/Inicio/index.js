import styles from "./Inicio.module.css";
import Post from "Componentes/PostCard";

import posts from "json/posts.json";

export default function Inicio () {
    return (  
        <ul className={styles.posts}> 
            {posts.map(post => (
                <li key={post.id} className={styles.post}>
                    <Post post={post}/>
                </li>
            ))}
        </ul>
    )
}