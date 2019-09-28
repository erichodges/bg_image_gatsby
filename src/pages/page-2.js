import { Link } from 'gatsby';
import React from 'react';
// import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';


const SecondPage = () => (
  <Layout>
    <SEO title="Second Page" />
    <h1>Second Page</h1>
    <p>More second page text</p>
    <div style={{ maxWidth: `300px`, margin: `0 auto`, marginBottom: `1.45rem` }}>

    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
