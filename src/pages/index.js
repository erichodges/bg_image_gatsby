import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
// import Image from '../components/image'
import SEO from '../components/seo';


const IndexPage = () => (
  <div>
  <section>
  <Layout>
    <SEO
      title="gatsby-background-image test"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <h1>Hi people</h1>
    <p>
      Welcome to the <code>gatsby-background-image</code> test site.
    </p>
    <p>Now go build something great.</p>
    <div
      style={{ maxWidth: `300px`, margin: `0 auto`, marginBottom: `1.45rem` }}
    >      
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  </section>
  <section>
  <div>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ut perspiciatis minima voluptatem amet. Quisquam obcaecati ratione ipsam vero, sunt nam architecto eius molestias molestiae neque rerum necessitatibus ad perferendis at officia aliquid nesciunt placeat? Deserunt repudiandae cum expedita, facere fugiat id quasi blanditiis totam ratione non aliquam delectus, debitis, voluptates accusantium ducimus laborum odit magni sapiente labore. Beatae sunt voluptates amet placeat quam ipsam eius debitis temporibus, fugit earum quas accusamus blanditiis soluta incidunt similique tempora assumenda natus. Voluptatum officiis quam provident sequi optio dicta quod sit cumque sapiente, minus, blanditiis alias aliquid assumenda nihil doloremque, iure modi perferendis deserunt dignissimos nesciunt. Est, aut. Aspernatur consectetur iste ratione, tempora quae eos officiis porro animi, eum nam, quod reiciendis tenetur soluta. Magni, harum. Id neque aut reiciendis fuga nesciunt ratione ipsum cumque optio cupiditate error. Nisi dolore veritatis, nulla ipsa expedita dicta culpa obcaecati! Saepe laborum, quaerat inventore quod blanditiis fugit debitis aspernatur possimus quo, eos nemo ad aliquam cupiditate temporibus doloribus amet excepturi sunt tempore quia! Cumque, tempore fugiat nulla mollitia fuga nemo quidem accusamus soluta eaque, nam quasi aliquid accusantium perferendis dolor quo quaerat, eveniet quam architecto et placeat. Error doloribus consectetur nam quibusdam non! Consectetur, molestias sint.</p>
  </div>
  </section>
  </div>
)

export default IndexPage
