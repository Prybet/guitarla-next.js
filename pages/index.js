import Layout from "@/components/layout";
import Guitar from "@/components/guitar";
import styles from "../styles/grid.module.css"
import Post from "@/components/post";
import Course from "@/components/course";

export default function Home({ guitars, course, posts }) {
  return (
    <>
      <Layout title="Inicio" description="Blog de música, venta de guitarras y más">
        <main className="container">
          <h1 className="heading"> Nuestra Coleccón</h1>

          <div className={styles.grid}>
            {guitars?.map(guitar => (
              <Guitar key={guitar?.id} guitar={guitar?.attributes} />
            ))}
          </div>

        </main>
        <Course course={course?.attributes} />

        <section className="container">
          <h2 className="heading"> Blog</h2>
          <div className={styles?.grid}>
            {posts?.map(post => (
              <Post key={post?.id} post={post?.attributes} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}


export async function getStaticProps() {

  const [{ data: guitars }, { data: course }, { data: posts }] = await Promise.all([
    fetch(`${process.env.API_URL}/guitars?populate=image`)
      .then(res => res.json()),
    fetch(`${process.env.API_URL}/course?populate=image`)
      .then(res => res.json()),
    fetch(`${process.env.API_URL}/posts?populate=image`)
      .then(res => res.json())
  ]);

  return {
    props: {
      guitars,
      course,
      posts
    }
  }
}