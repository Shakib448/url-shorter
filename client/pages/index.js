import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";

import {
  Layout,
  UrlShrinkForm,
  UrlShrinkTable,
  LoginForm,
} from "@/components/index";

import urlApi from "./api/URL";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getUrls = async () => {
      const { data } = await urlApi.getShortUrls();
      setData(data);
    };
    getUrls();
  }, [data]);

  return (
    <Layout title="URL Shrink Page">
      <Container maxWidth="lg">
        <UrlShrinkForm />
        <UrlShrinkTable data={data} />
        <LoginForm />
      </Container>
    </Layout>
  );
};

export default Home;
