// dynamic routes implementation
import styles from '../post/post.module.scss';
export async function getStaticPaths() {

    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const posts = await res.json();

    const paths = posts.map((post: any) => (
        {
            params: { slug: post.userId.toString() },
        }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.slug}`);
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    };
}

export default function Post({ posts }: any) {
   
    return (
        <div className={`${!posts?.completed &&( styles.postdata) } ${styles.services}`}>
            <ul >
                <li>
                    {posts.userId}
                </li>
               
                <li>
                    {posts.title}
                </li>

            </ul>
        </div>
    )
    // Render post...
}