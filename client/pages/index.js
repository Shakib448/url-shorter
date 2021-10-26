import React from "react";
import { Container } from "@mui/material";

import { Layout, UrlShrinkForm } from "../src/Components";

const Home = () => {
  return (
    <Layout title="URL Shrink Page">
      <Container maxWidth="md">
        <UrlShrinkForm />
      </Container>
    </Layout>
  );
};

export default Home;
