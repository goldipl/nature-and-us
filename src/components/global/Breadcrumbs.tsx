import React from "react";
import Link from "next/link";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumbs">
      <Link href="/">Home</Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="breadcrumbs__separator">/</span>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span className="breadcrumbs__current">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
