import React from "react";
import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import { ArticleCardList } from "@/components/global/ArticleCard";
import {
  articleHref,
  articles,
  getArticleBySlug,
  regions,
  sortedArticles,
} from "@/data/articles";

interface ArticlePageProps {
  slug: string;
}

const ArticlePage = ({ slug }: ArticlePageProps) => {
  const article = getArticleBySlug(slug)!;
  const region = regions.find((r) => r.value === article.region)!;

  const index = sortedArticles.findIndex((a) => a.slug === slug);
  const newerArticle = sortedArticles[index - 1];
  const olderArticle = sortedArticles[index + 1];

  // Same-region stories first, then the latest ones
  const relatedArticles = [
    ...sortedArticles.filter(
      (a) => a.slug !== slug && a.region === article.region
    ),
    ...sortedArticles.filter(
      (a) => a.slug !== slug && a.region !== article.region
    ),
  ].slice(0, 3);

  return (
    <>
      <Head>
        <title>{`${article.title} | Nature & Us`}</title>
        <meta name="description" content={article.excerpt} />
      </Head>
      <main className="subpage article-page">
        <div className="subpage-wrapper">
          <Breadcrumbs
            items={[
              { label: "Nature News", href: "/articles" },
              { label: article.title },
            ]}
          />
          <article className="article">
            <header className="article-header">
              <div className="article-meta">
                <Link
                  href={{
                    pathname: "/articles",
                    query: { category: article.label },
                  }}
                  className="article-meta__label"
                >
                  {article.label}
                </Link>
                <span className="article-meta__date">{article.date}</span>
                <Link
                  href={{
                    pathname: "/articles",
                    query: { region: article.region },
                  }}
                  className="article-meta__region"
                >
                  {region.label} news
                </Link>
              </div>
              <h1>{article.title}</h1>
              <p className="article-lead">{article.excerpt}</p>
            </header>
            <div className="article-hero">
              <img
                src={article.image.src}
                alt={article.title}
                width={1300}
                height={600}
              />
            </div>
            <div className="article-body">
              {article.content.map((block, i) =>
                block.startsWith("## ") ? (
                  <h2 key={i}>{block.slice(3)}</h2>
                ) : (
                  <p key={i}>{block}</p>
                )
              )}
            </div>
            <nav className="article-nav">
              {olderArticle ? (
                <Link
                  href={articleHref(olderArticle.slug)}
                  className="article-nav__link article-nav__link--prev"
                >
                  <span>⇦ Previous article</span>
                  <strong>{olderArticle.title}</strong>
                </Link>
              ) : (
                <span />
              )}
              {newerArticle && (
                <Link
                  href={articleHref(newerArticle.slug)}
                  className="article-nav__link article-nav__link--next"
                >
                  <span>Next article ⇨</span>
                  <strong>{newerArticle.title}</strong>
                </Link>
              )}
            </nav>
          </article>

          <section className="related-section">
            <div className="related-section__header">
              <h2>Related articles</h2>
              <Link href="/articles">All news ⇨</Link>
            </div>
            <ArticleCardList articles={relatedArticles} />
          </section>
        </div>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: articles.map((article) => ({ params: { slug: article.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticlePageProps> = async ({
  params,
}) => {
  return { props: { slug: params!.slug as string } };
};

export default ArticlePage;
