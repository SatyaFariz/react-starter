import React from 'react'
import ProductDetails from './ProductDetailsPage'
import Layout from '../Layout';

async function action({ fetch }) {
 /* const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{news{title,link,content}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.news) throw new Error('Failed to load the news feed.');
  return {
    title: 'React Starter Kit',
    chunks: ['home'],
    component: (
      <Layout>
        <Home news={data.news} />
      </Layout>
    ),
  };*/

  return {
    title: 'React Starter Kit',
    chunks: ['home'],
    component: (
      <Layout>
        <ProductDetails />
      </Layout>
    ), 
  }
}

export default action;