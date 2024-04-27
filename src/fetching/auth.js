// import BASE_URL from '@/lib/baseUrl';

export const register = async (params) => {
  try {
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
    const response = await fetch(`${BASE_URL}/api/logout`, {
      method: 'POST',
    });

    return response;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};
