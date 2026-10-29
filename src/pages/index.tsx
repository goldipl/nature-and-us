import React from "react";
import Head from "next/head";
import Link from "next/link";
import NewsSection from "@/components/home/NewsSection";
import SquareNewsSection from "@/components/home/SquareNewsSection";
import { articles } from "@/data/articles";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nature & Us - Home page</title>
      </Head>
      <main className="main-page">
        <SquareNewsSection items={articles.slice(4, 8)} />
        <NewsSection items={articles.slice(0, 4)} />
        <SquareNewsSection items={articles.slice(8, 12)} />
        <div className="all-news-link">
          <Link href="/articles" className="button-primary">
            See all news ⇨
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
