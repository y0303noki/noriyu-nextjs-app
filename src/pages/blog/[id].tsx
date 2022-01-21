import { client } from '../../../libs/client';
import Layout from '../../components/layout';
import type { Blog } from '../../../types/blog';

export default function BlogId({ blog }: { blog: Blog }) {
  return (
    <Layout isHome={false}>
      <h1 className='text-xl'>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getServerSideProps = async (context: { params: { id: any } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
