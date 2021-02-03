const apiHost = "http://boutiquedkm.herokuapp.com";

export const getProductsFromApi = (path) => {
  const url = path ? `${apiHost}${path}` : `${apiHost}/api/products`;
  return fetchApi(url);
};

export const getProductsByCategoryApi = (id) => `/api/products?category=${id}`;
export const getProductsByNameApi = (name) => `/api/products?name=${name}`;

export const getCategoriesFromApi = () => {
  return fetchApi(`${apiHost}/api/categories`);
};

const fetchApi = async (url) => {
  try {
    let response = await fetch(url);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
