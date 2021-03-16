import { NextSeo } from 'next-seo';

import Layout from 'components/Layout';
import Blog from 'components/Blog';

export default () => {
  return (
    <Layout>
      <NextSeo
        title="Blog | Tree"
        description="A short description goes here."
      />
      <Blog />
    </Layout>
  );
};
