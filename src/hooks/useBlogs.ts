import { useEffect, useState } from 'react';
import { getBlog, getBlogs } from '../firebase/blog';
import { Blog } from '../../types/blog';

export type UseBlogsOutput = {
  isLoading: boolean;
  blogs: Blog[];
};

// export type UseBlogsOutput3 = Blog {

// }

export type UseBlogsOutput2 = {
  isLoading: boolean;
  blog2: Blog | null;
};

const DEFAULT_OUTPUT: UseBlogsOutput = {
  isLoading: true,
  blogs: [],
};

const DEFAULT_OUTPUT2: UseBlogsOutput2 = {
  isLoading: true,
  blog2: null,
};

export function useBlog(): UseBlogsOutput2 {
  const [output2, setOutput2] = useState(DEFAULT_OUTPUT2);
  useEffect(() => {
    void (async () => {
      const blog2 = await getBlog('YB7WgEmMqa9HUm9ulaLd');
      setOutput2({ isLoading: false, blog2: blog2 });
    })();
  }, []);

  return output2;
}

export function useBlogs(): UseBlogsOutput {
  const [output, setOutput] = useState(DEFAULT_OUTPUT);

  useEffect(() => {
    void (async () => {
      const blogs = await getBlogs();
      setOutput({ isLoading: false, blogs });
    })();
  }, []);

  return output;
}
