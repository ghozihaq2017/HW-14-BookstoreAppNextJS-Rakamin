import React from 'react';
import Link from 'next/link';

function CardBook({ book }) {
  return (
    <Link href={`/books/${book.id}`}>
      <div className="card w-40 xl:w-56 bg-base-100 shadow-xl hover:shadow-2xl hover:border-2">
        <figure>
          <img
            src={book.image}
            width={500}
            height={500}
            alt={`${book.title} image`}
            className="w-full h-full"
          />
        </figure>
        <div className="card-body bg-white text-txt flex justify-center items-center xl:p-3 p-3">
          <h5 className="card-title font-bold text-base">{book.title}</h5>
          <p className="text-xs">{book.author}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline xl:text-xs text-[0.5rem]">Best Seller</div>
            <div className="badge badge-outline xl:text-xs text-[0.5rem]">Book</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardBook;
