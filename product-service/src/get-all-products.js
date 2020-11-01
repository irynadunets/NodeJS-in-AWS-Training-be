import productList from './productList.json';

export const getAllProducts = async (event) => {
  try {
  return {
    statusCode: 200,
    body: JSON.stringify(productList)
  };
} catch (e) {
  return {
    statusCode: 401,
    body: 'Access token is missing or invalid',
  };
     next(e);
  }
};
