import { client } from '../../../libs/client';
import Layout from '../../components/layout';
import type { Blog } from '../../../types/blog';
import dayjs from 'dayjs';
import Seo from '../../components/seo';
import { Category } from '../../../types/category';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import ReturnTopButton from '../../components/Common/returnTopButton';
import CustomEmoji from '../../components/Atom/customEmoji';
import 'dayjs/locale/ja';

dayjs.locale('ja');
const baseUrl = process.env.NEXT_PUBLIC_HOST;

export default function BlogId({ blog }: { blog: Blog }) {
  const icon = blog.category.length > 0 ? blog.category[0].icon[0] : '';
  return (
    <Layout isHome={false}>
      <Seo
        pageTitle={`${blog.title}`}
        pageDescription={`${blog.body}`}
        pagePath={`${baseUrl}/blog/${blog.id}`}
        pageImg={`${baseUrl}/images/small/my_home_1mb.jpg`}
        pageImgWidth={1280}
        pageImgHeight={960}
      ></Seo>
      <p className='text-gray-400 m-2 text-center'>
        {dayjs(blog.publishedAt).format('YYYY年MM月DD日 (dd)')}
      </p>
      <div className='text-center'>
        <CustomEmoji icon={icon}></CustomEmoji>
      </div>
      <p className='text-2xl font-bold m-2 text-center '>{blog.title}</p>
      {/* カテゴリー */}
      {blog.category.length > 0 && (
        <div className='text-center m-2'>
          {blog.category.map((category: Category) => (
            <span
              key={category.id}
              className={
                'rounded-md text-sm p-1 m-1 text-gray-50 ' +
                (category.id == 'mfonvfqwuj8' ? 'bg-blue-500' : 'bg-gray-500')
              }
            >
              {category.name}
            </span>
          ))}
        </div>
      )}
      <div className='border-b'></div>
      {/* ここから本文 */}
      <div
        className='prose  bg-gray-100 p-8 my-4 mx-4 sm:mx-auto'
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />

      <div className='text-center'>
        <ReturnTopButton></ReturnTopButton>
      </div>

      <div className='m-4'>
        {/* Twitterでシェア */}
        <TwitterShareButton url={`${baseUrl}/blog/${blog.id}`} title={blog.title}>
          <TwitterIcon size={50} round={true} />
        </TwitterShareButton>
      </div>
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
