import React from "react";
import Link from "next/link";
import { Article, articleHref } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link href={articleHref(article.slug)} className="article-card">
      <div className="article-card__img">
        <img
          src={article.image.src}
          alt={article.title}
          width={420}
          height={260}
        />
      </div>
      <div className="article-card__body">
        <div className="article-card__meta">
          <span className="article-card__label">{article.label}</span>
          <span className="article-card__date">{article.date}</span>
        </div>
        <h3 className="article-card__title">{article.title}</h3>
        <p className="article-card__excerpt">{article.excerpt}</p>
        <span className="article-card__more">Read more ⇨</span>
      </div>
    </Link>
  );
};

interface ArticleCardListProps {
  articles: Article[];
}

export const ArticleCardList = ({ articles }: ArticleCardListProps) => {
  return (
    <div className="article-card-list">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
};

export default ArticleCard;
