import productList from './productList.json';

export const getProductById = async (event) => {

try {
  const item = productList.find(el => el.id === event.path.split('/')[2]);

  if(item){
    return {
      statusCode: 200,
      body: JSON.stringify({product:item}, null, 2),
    };
  } else {
    return {
      statusCode: 404,
      body: 'Not found',
    };
  }
} catch (e) {
  return {
    statusCode: 401,
    body: 'Access token is missing or invalid',
  };
     next(e);
  }

};
