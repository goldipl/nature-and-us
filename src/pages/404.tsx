import React from "react";
import Head from "next/head";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Page not found | Nature & Us</title>
      </Head>
      <main className="subpage not-found-page">
        <div className="subpage-wrapper">
          <header className="subpage-header">
            <h1>Page not found</h1>
            <p>
              The path you followed seems to have grown over. Try the home page
              or browse our latest news.
            </p>
          </header>
          <div className="not-found-page__links">
            <Link href="/" className="button-primary">
              Home page
            </Link>
            <Link href="/articles" className="button-secondary">
              Nature News
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
