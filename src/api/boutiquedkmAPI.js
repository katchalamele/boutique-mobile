const apiHost = "http://172.20.10.2:8000";

export const getProductsFromApi = (path) => {
  const url = path ? `${apiHost}${path}` : `${apiHost}/api/products`;
  return fetchApi(url);
};

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
