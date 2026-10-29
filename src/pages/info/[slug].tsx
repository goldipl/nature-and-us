import React from "react";
import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import Accordion from "@/components/global/Accordion";
import { ArticleCardList } from "@/components/global/ArticleCard";
import { sortedArticles } from "@/data/articles";
import {
  getInfoPageBySlug,
  getInfoPagesBySection,
  getInfoSection,
  infoHref,
  infoPages,
} from "@/data/infoPages";

interface InfoPageProps {
  slug: string;
}

const InfoPage = ({ slug }: InfoPageProps) => {
  const page = getInfoPageBySlug(slug)!;
  const section = getInfoSection(page.section)!;
  const sectionPages = getInfoPagesBySection(page.section);
  const sectionHome = sectionPages[0];

  return (
    <>
      <Head>
        <title>{`${page.title} | Nature & Us`}</title>
        <meta name="description" content={page.intro} />
      </Head>
      <main className="subpage info-page">
        <div className="subpage-wrapper">
          <Breadcrumbs
            items={[
              ...(sectionHome.slug !== page.slug
                ? [{ label: section.title, href: infoHref(sectionHome.slug) }]
                : []),
              { label: page.title },
            ]}
          />
          <div className="info-page-row">
            <aside className="info-sidebar">
              <h2>{section.title}</h2>
              <ul>
                {sectionPages.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={infoHref(p.slug)}
                      className={p.slug === page.slug ? "active" : ""}
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
            <div className="info-content">
              <h1>{page.title}</h1>
              <p className="info-content__lead">{page.intro}</p>
              <p>{section.description}</p>
              {page.details && (
                <ul className="info-content__details">
                  {page.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
              {page.faqs && (
                <div className="info-content__faqs">
                  <Accordion
                    items={page.faqs.map((faq) => ({
                      title: faq.question,
                      content: <p>{faq.answer}</p>,
                    }))}
                  />
                </div>
              )}
              <div className="info-cta">
                <p>Have a question about {page.title.toLowerCase()}?</p>
                <Link href="/contact" className="button-primary">
                  Contact us
                </Link>
              </div>
            </div>
          </div>

          <section className="related-section">
            <div className="related-section__header">
              <h2>Latest news</h2>
              <Link href="/articles">All news ⇨</Link>
            </div>
            <ArticleCardList articles={sortedArticles.slice(0, 3)} />
          </section>
        </div>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: infoPages.map((page) => ({ params: { slug: page.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<InfoPageProps> = async ({
  params,
}) => {
  return { props: { slug: params!.slug as string } };
};

export default InfoPage;
