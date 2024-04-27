import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { uploadFile } from '@/lib/uploadFile';
import BASE_IMAGE_URL from '@/lib/baseImage';

export const GET = async (req, { params }) => {
  try {
    const data = await prisma.book.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
};

export const POST = async (req, { params }) => {
  try {
    const formData = await req.formData();

    const file = formData.getAll('image')[0];
    const title = formData.getAll('title')[0];
    const author = formData.getAll('author')[0];
    const publisher = formData.getAll('publisher')[0];
    const year = formData.getAll('year')[0];
    const pages = formData.getAll('pages')[0];

    const imagePath = await uploadFile(file, '/images');

    const imageUrl = `${BASE_IMAGE_URL}/${imagePath}`;

    const book = await prisma.book.create({
      data: {
        title,
        author,
        publisher,
        year: parseInt(year),
        pages: parseInt(pages),
        image: imageUrl,
        imagePath,
      },
    });

    return NextResponse.json({ book, message: 'Book Created Successfully' }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
};
