export const getCategoris = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};
export const getNewsByCategoriId = async (categori_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categori_id}`,
  );
  const data = await res.json();
  return data.data;
};