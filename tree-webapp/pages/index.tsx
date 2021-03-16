import { NextSeo } from 'next-seo';

import Layout from 'components/Layout';
import Home from 'components/Home';

export default () => {
  return (
    <Layout>
      <NextSeo
        title="Home | Tree"
        description="A short description goes here."
      />
      <Home />
    </Layout>
  );
};
