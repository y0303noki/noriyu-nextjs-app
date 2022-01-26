import { GetStaticProps } from 'next';
import Link from 'next/link';
import Seo from '../components/seo';
import type { Issue } from '../../types/issue';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const baseUrl = process.env.NEXT_PUBLIC_HOST;

const Issue = () => {
  return;
};

// 改善一覧
const issueUrl = 'https://api.github.com/repos/y0303noki/noriyu-nextjs-app/issues';
const Kaizen = ({ issues }: { issues: Issue[] }) => {
  if (issues.length <= 0) {
    return (
      <>
        <Seo
          pageTitle={`kaizen`}
          pageDescription={`改善一覧です`}
          pagePath={`${baseUrl}/kaizen`}
          pageImg={`${baseUrl}/images/small/my_home_1mb.jpg`}
          pageImgWidth={1280}
          pageImgHeight={960}
        ></Seo>
        <p>issueなし</p>
      </>
    );
  } else {
    return (
      <>
        <Seo
          pageTitle={`kaizen`}
          pageDescription={`改善一覧です`}
          pagePath={`${baseUrl}/kaizen`}
          pageImg={`${baseUrl}/images/small/my_home_1mb.jpg`}
          pageImgWidth={1280}
          pageImgHeight={960}
        ></Seo>
        <div>KAIZEN一覧</div>
        <div className='m-4'>
          <Link href={'/'}>
            <a className='p-4 m-4'>Homeに戻る</a>
          </Link>
        </div>

        <ul className='m-4'>
          {issues.map((issue: Issue) => (
            <li key={issue.id.toString()}>
              <a href={issue.url} target={'_blank'} rel='noreferrer'>
                <div className='flex flex-row justify-between text-2xl font-bold border-b'>
                  <p className='mb-1 pl-1'>{issue.title}</p>
                  <FaArrowAltCircleRight className='mr-4' />
                </div>
              </a>
              <div className='m-2'>{issue.body}</div>
              <div className='m-2'>
                {issue.labels.length > 0 &&
                  issue.labels.map((label: string) => (
                    <span
                      key={label}
                      className={
                        'rounded-md text-sm p-1 m-1 text-gray-50 ' +
                        (label == 'bug' ? 'bg-red-500' : 'bg-gray-500')
                      }
                    >
                      {label}
                    </span>
                  ))}
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
};
export default Kaizen;

// issueのデータを取得する
export const getServerSideProps: GetStaticProps = async (context) => {
  const res = await fetch(issueUrl);
  const datas = await res.json();
  console.log(datas[0]);

  const issues: Issue[] = datas.map((data: any) => {
    const issue: Issue = {
      id: data.id,
      url: data.html_url,
      title: data.title,
      body: data.body,
      state: data.state,
      labels: data.labels.map((label: any) => label.name),
      createdAt: 'data.createdAt',
      updatedAt: 'data.updatedAt',
    };
    return issue;
  });

  return { props: { issues: issues } };
};
