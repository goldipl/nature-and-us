import React, { useState, useEffect, FormEvent } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import { ArticleCardList } from "@/components/global/ArticleCard";
import { sortedArticles } from "@/data/articles";
import { infoHref, infoPages } from "@/data/infoPages";

const matches = (query: string, ...fields: string[]) =>
  fields.some((field) => field.toLowerCase().includes(query));

const SearchPage = () => {
  const router = useRouter();
  const query = typeof router.query.q === "string" ? router.query.q : "";
  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push({ pathname: "/search", query: { q: inputValue.trim() } });
  };

  const normalizedQuery = query.trim().toLowerCase();
  const articleResults = normalizedQuery
    ? sortedArticles.filter((article) =>
        matches(
          normalizedQuery,
          article.title,
          article.label,
          article.excerpt,
          ...article.content
        )
      )
    : [];
  const pageResults = normalizedQuery
    ? infoPages.filter((page) =>
        matches(normalizedQuery, page.title, page.intro, ...(page.details ?? []))
      )
    : [];
  const totalResults = articleResults.length + pageResults.length;

  return (
    <>
      <Head>
        <title>Search | Nature & Us</title>
      </Head>
      <main className="subpage search-page">
        <div className="subpage-wrapper">
          <Breadcrumbs items={[{ label: "Search" }]} />
          <header className="subpage-header">
            <h1>Search</h1>
          </header>
          <form className="search-page-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="q"
              placeholder="Search the site"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              aria-label="Search the site"
            />
            <button type="submit" className="button-primary">
              Search
            </button>
          </form>

          {normalizedQuery && (
            <p className="results-count">
              {totalResults} {totalResults === 1 ? "result" : "results"} for
              &quot;{query}&quot;
            </p>
          )}

          {pageResults.length > 0 && (
            <section className="search-results">
              <h2>Pages</h2>
              <ul className="search-results__pages">
                {pageResults.map((page) => (
                  <li key={page.slug}>
                    <Link href={infoHref(page.slug)}>
                      <strong>{page.title}</strong>
                      <span>{page.intro}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {articleResults.length > 0 && (
            <section className="search-results">
              <h2>Articles</h2>
              <ArticleCardList articles={articleResults} />
            </section>
          )}

          {normalizedQuery && totalResults === 0 && (
            <div className="empty-state">
              <p>Nothing found. Try a different word or browse all news.</p>
              <Link href="/articles" className="button-primary">
                Browse news
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default SearchPage;
