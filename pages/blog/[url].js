import Layout from "@/components/layout";
import Image from "next/image";
import { formatDate } from '../../utils/helpers'
import styles from "../../styles/blog.module.css"

export default function Post({ post }) {
  const { content, image, title, publishedAt } = post[0]?.attributes;
  return (
    <Layout title={title}>
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image src={image?.data?.attributes?.url} alt={`Post image ${title}`} width={1000} height={800} />

        <div className={styles?.content}>
          <h3>{title}</h3>
          <p className={styles?.date}>{formatDate(publishedAt)}</p>
          <p className={styles?.text}>{content}</p>
        </div>
      </article>
    </Layout>
  )
}

export async function getServerSideProps({ params: { url } }) {
  const { data: post } = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`)
    .then(res => res.json());

  return {
    props: { post }
  }
}
