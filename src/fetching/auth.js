// Kalo Pake Lokal
// import BASE_URL from '@/lib/baseUrl';

export const register = async (params) => {
  try {
    // Buat Lokal => const response = await fetch(`${BASE_URL}/api/register`, {
    const response = await fetch(`/api/register`, {
      method: 'POST',
      body: JSON.stringify(params),
    });

    return response;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};

export const login = async (params) => {
  try {
    // Buat Locale => const response = await fetch(`${BASE_URL}/api/login`, {
    const response = await fetch(`/api/login`, {
      method: 'POST',
      body: JSON.stringify(params),
    });

    return response;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};

export const logout = async () => {
  try {
    // Buat Locale => const response = await fetch(`${BASE_URL}/api/logout`, {
    const response = await fetch(`/api/logout`, {
      method: 'POST',
    });

    return response;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};
