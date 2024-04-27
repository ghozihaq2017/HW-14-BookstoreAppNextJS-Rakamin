// Kalo Pake Lokal
import BASE_URL from '@/lib/baseUrl';

export const getDetailBookById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/api/books/${id}`);
    // const response = await fetch(`/api/books/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};

export const updateBook = async (id, newData) => {
  console.log(id, newData);
  try {
    const response = await fetch(`${BASE_URL}/api/books/${id}`, {
      // const response = await fetch(`/api/books/${id}`, {
      method: 'PUT',
      body: JSON.stringify(newData),
    });

    return response;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/api/books/${id}`, {
      // const response = await fetch(`/api/books/${id}`, {
      method: 'DELETE',
    });

    return response;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};

export const createBook = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/books`, {
      // const response = await fetch(`/api/books`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to create book');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};
