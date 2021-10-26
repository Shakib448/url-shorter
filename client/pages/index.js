import React from "react";
import { Container } from "@mui/material";

import { Layout, UrlShrinkForm, UrlShrinkTable } from "../src/Components";

const Home = () => {
  return (
    <Layout title="URL Shrink Page">
      <Container maxWidth="lg">
        <UrlShrinkForm />
        <UrlShrinkTable />
      </Container>
    </Layout>
  );
};

export default Home;
