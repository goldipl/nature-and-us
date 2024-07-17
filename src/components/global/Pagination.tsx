import Link from "next/link";
import React from "react";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination-wrapper">
        <Link href="" className="pagination-wrapper__prev">
          <p>Poprzednia strona</p>
        </Link>
        <Link href="" className="pagination-wrapper__slot">
          <p>1</p>
        </Link>
        <Link href="" className="pagination-wrapper__slot active">
          <p>2</p>
        </Link>
        <Link href="" className="pagination-wrapper__slot">
          <p>3</p>
        </Link>
        <Link href="" className="pagination-wrapper__slot">
          <p>4</p>
        </Link>
        <Link href="" className="pagination-wrapper__slot">
          <p>5</p>
        </Link>
        <Link href="" className="pagination-wrapper__slot">
          <p>6</p>
        </Link>
        <Link href="" className="pagination-wrapper__slot">
          <p>7</p>
        </Link>
        <Link href="" className="pagination-wrapper__dots">
          <p>...</p>
        </Link>
        <Link href="" className="pagination-wrapper__slot">
          <p>178</p>
        </Link>
        <Link href="" className="pagination-wrapper__next">
          <p>Następna strona</p>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
