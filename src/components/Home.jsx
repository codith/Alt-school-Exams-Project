import React from "react";
import { Helmet } from "react-helmet-async";


export default function Home() {
  return (
    <>
       <Helmet>
        <title>Home</title>
        <meta name="description" content="Counter application Home page" />
        <link rel="canonical" href="/"/>
      </Helmet>
      <h1>Alt school Exams</h1>
     
    </>
  );
}
