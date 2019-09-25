import { Link } from 'gatsby';
import React from 'react';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>page 2</h1>
    <p>Welcome to page 2</p>
    <div style={{ maxWidth: `300px`, margin: `0 auto`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
