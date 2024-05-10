export const fetchData = async () => {
  let response = await fetch(
    "https://api.fucmusic.ru/api/page-homes/1?populate=deep",
  );
  let data = await response.json();
  return data;
};
