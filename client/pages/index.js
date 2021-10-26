import React from "react";
import { Container } from "@mui/material";

import { Layout, UrlShrinkForm, UrlShrinkTable } from "../src/Components";
import urlApi from "./api/URL";

const Home = ({ data }) => {
  return (
    <Layout title="URL Shrink Page">
      <Container maxWidth="lg">
        <UrlShrinkForm />
        <UrlShrinkTable data={data} />
      </Container>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const { data } = await urlApi.getShortUrls();
  return {
    props: { data },
    revalidate: 1,
  };
}
