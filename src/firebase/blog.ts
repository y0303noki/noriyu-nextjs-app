import { collection, doc, getDocs, getDoc, getFirestore } from 'firebase/firestore';
import { Blog } from '../../types/blog';

// export async function getBlog(id: string): Promise<Blog> {
//   const books = new Array<Blog>();
//   const db = getFirestore();
//   const docRef = doc(db, '/blog', id);
//   const blogsSnapshot = await getDoc(docRef);
//   const test = blogsSnapshot.data() as Blog;
//   console.log(test);

//   return test;
// }

// export const getStaticProps: GetStaticProps = async () => {

// 指定したidでブログ情報を取得
export const getBlog = async (id: string) => {
  const db = getFirestore();
  const docRef = doc(db, '/blog', id);
  const blogsSnapshot = await getDoc(docRef);
  const blog = blogsSnapshot.data() as Blog;
  console.log(blog);

  return blog;
};

export async function getBlogs(): Promise<Blog[]> {
  const books = new Array<Blog>();
  const db = getFirestore();
  const blogsSnapshot = await getDocs(collection(db, '/blog'));

  blogsSnapshot.forEach((doc) => {
    const blog = doc.data() as Blog;
    books.push({ ...blog, id: doc.id });
  });

  return books;
}
