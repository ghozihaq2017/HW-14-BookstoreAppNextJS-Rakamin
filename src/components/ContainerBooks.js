import CardBook from './CardBook';
import prisma from '@/lib/prisma';

const getData = async () => {
  try {
    const data = await prisma.book.findMany();

    return data;
  } catch (err) {
    console.log(err);
  }
};

async function ContainerBooks() {
  const data = await getData();

  return (
    <div className="container-cards flex justify-center items-center ">
      <div className="products xl:grid-cols-4 md:grid-cols-3 grid-cols-2 grid mt-5 gap-5 xl:gap-12 place-content-between w-full">
        {data.map((book) => (
          <CardBook key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default ContainerBooks;
