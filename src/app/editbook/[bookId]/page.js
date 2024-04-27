'use client';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import Navigation from '@/components/Navigation';
import NovelForm from '@/components/NovelForm';
import { getDetailBookById } from '@/fetching/books';
import React, { useEffect, useState } from 'react';

function EditBookPage({ params }) {
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
    <section className="editbook-page bg-white min-h-screen font-jkt text-txt ">
      <Header />
      <div className="editbook-content px-2 py-10 md:px-10 w-full flex items-center flex-col ">
        <div className="container-editbook h-auto min-h-screen px-4 md:px-10 py-10 w-full bg-white rounded-xl pb-28 shadow-3xl md:w-10/12 mt-12">
          <div className="title-content">
            <h4 className="text-xl font-bold text-txt font-jkt">Edit Book</h4>
          </div>
          <NovelForm bookData={detailBook} />
        </div>
      </div>
      <Navigation />
    </section>
  );
}

export default EditBookPage;
