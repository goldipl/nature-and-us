import React from "react";
import Link from "next/link";
import { Article, articleHref } from "@/data/articles";

interface NewsSlotProps {
  article: Article;
  showExcerpt?: boolean;
}

const NewsSlot = ({ article, showExcerpt = false }: NewsSlotProps) => {
  return (
    <Link
      href={articleHref(article.slug)}
      className="news-section-wrapper-slot"
    >
      <div className="news-section-wrapper-slot__img">
        <img src={article.image.src} alt={article.title} width={640} height={640} />
      </div>
      <div className="news-section-wrapper-slot__text">
        <div className="date-label-box">
          <div className="news-section-wrapper-slot__text--date">
            <p>{article.date}</p>
          </div>
          {article.label && (
            <div className="news-section-wrapper-slot__text--label">
              <p>{article.label}</p>
            </div>
          )}
        </div>
        <div className="news-section-wrapper-slot__text--title">
          <h2>{article.title}</h2>
        </div>
        {showExcerpt && (
          <>
            <div className="news-section-wrapper-slot__text--desc">
              <p>{article.excerpt}</p>
            </div>
            <div className="news-section-wrapper-slot__text--more">
              <span>Read more ⇨</span>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default NewsSlot;
