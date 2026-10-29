import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import { ArticleCardList } from "@/components/global/ArticleCard";
import { articleCategories, regions, sortedArticles } from "@/data/articles";

const ArticlesPage = () => {
  const router = useRouter();
  const region =
    typeof router.query.region === "string" ? router.query.region : "";
  const category =
    typeof router.query.category === "string" ? router.query.category : "";

  const filteredArticles = sortedArticles.filter(
    (article) =>
      (!region || article.region === region) &&
      (!category || article.label === category)
  );

  // Builds a link that keeps the other active filter
  const filterHref = (next: { region?: string; category?: string }) => {
    const query: Record<string, string> = {};
    const nextRegion = next.region ?? region;
    const nextCategory = next.category ?? category;
    if (nextRegion) query.region = nextRegion;
    if (nextCategory) query.category = nextCategory;
    return { pathname: "/articles", query };
  };

  const regionLabel = regions.find((r) => r.value === region)?.label;
  const pageTitle = regionLabel ? `${regionLabel} Nature News` : "Nature News";

  return (
    <>
      <Head>
        <title>{`${pageTitle} | Nature & Us`}</title>
      </Head>
      <main className="subpage articles-page">
        <div className="subpage-wrapper">
          <Breadcrumbs items={[{ label: "Nature News" }]} />
          <header className="subpage-header">
            <h1>{pageTitle}</h1>
            <p>
              Stories from our forests and from around the world: research,
              wildlife, events and practical tips for exploring nature.
            </p>
          </header>

          <div className="filters">
            <div className="filters__group">
              <span className="filters__title">Region:</span>
              <Link
                href={filterHref({ region: "" })}
                className={`filter-btn ${!region ? "active" : ""}`}
              >
                All
              </Link>
              {regions.map((r) => (
                <Link
                  key={r.value}
                  href={filterHref({ region: r.value })}
                  className={`filter-btn ${region === r.value ? "active" : ""}`}
                >
                  {r.label}
                </Link>
              ))}
            </div>
            <div className="filters__group">
              <span className="filters__title">Category:</span>
              <Link
                href={filterHref({ category: "" })}
                className={`filter-chip ${!category ? "active" : ""}`}
              >
                All
              </Link>
              {articleCategories.map((c) => (
                <Link
                  key={c}
                  href={filterHref({ category: c })}
                  className={`filter-chip ${category === c ? "active" : ""}`}
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>

          <p className="results-count">
            {filteredArticles.length}{" "}
            {filteredArticles.length === 1 ? "article" : "articles"}
          </p>

          {filteredArticles.length > 0 ? (
            <ArticleCardList articles={filteredArticles} />
          ) : (
            <div className="empty-state">
              <p>No articles match the selected filters.</p>
              <Link href="/articles" className="button-primary">
                Show all articles
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default ArticlesPage;
