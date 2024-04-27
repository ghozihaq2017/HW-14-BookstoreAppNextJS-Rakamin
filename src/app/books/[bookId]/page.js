'use client';
import React, { useEffect, useState } from 'react';
import ButtonsDetail from '@/components/ButtonsDetail';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { getDetailBookById } from '@/fetching/books';
import Loading from '@/components/Loading';

// import Swal from 'sweetalert2';

function DetailBookPage({ params }) {
  const id = +params.bookId;

  const [detailBook, setDetailBook] = useState(null);

  useEffect(() => {
    const fetchBookDetail = async () => {
      if (id) {
        try {
          const detail = await getDetailBookById(id);
          if (detail) {
            setDetailBook(detail);
          } else {
            console.error('Book detail is undefined');
          }
        } catch (error) {
          console.error('Error fetching book detail:', error);
        }
      }
    };

    fetchBookDetail();
  }, [id]);

  if (!detailBook) {
    return <Loading />;
  }

  return (
    <section className="detail-book font-jkt bg-white text-txt min-h-screen">
      <Header />
      <div className="detail-page-content px-2 py-10 md:px-10 w-full flex items-center flex-col xl:pb-32">
        <div className="detail-container flex flex-col md:flex-row mt-20 md:px-8 xl:px-24 px-0">
          <figure className=" p-2 w-full md:w-[30rem] max-h-[40rem]">
            <img
              className="w-full h-full object-cover"
              src={detailBook.image}
              alt={`${detailBook.title} image`}
            />
          </figure>
          <div className="detail-body md:w-2/4 w-full md:ml-10 pt-4 px-6 md:px-0 pb-20">
            <div className="title-product">
              <p className="text-base mb-3">Book</p>
              <h5 className="text-3xl font-bold mb-3">{detailBook.title}</h5>
              <p className="price text-xl mb-6">{detailBook.author}</p>
            </div>

            <div className="description">
              <p className="text-sm leading-6">{`Publisher: ${detailBook.publisher}`}</p>
              <p className="text-sm leading-6">{`Pages: ${detailBook.pages}`}</p>
              <p className="text-sm leading-6">{`Year: ${detailBook.year}`}</p>
            </div>

            <ButtonsDetail bookId={detailBook.id} />
          </div>
        </div>
      </div>
      <Navigation />
    </section>
  );
}

export default DetailBookPage;
