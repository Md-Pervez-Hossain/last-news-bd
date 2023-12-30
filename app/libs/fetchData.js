export const fetchData = async (query) => {
  try {
    const res = await fetch(`https://news-server-8hnz.onrender.com/api/v1/category/list?deleted=0`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json();
  } catch (error) {
    console.log(error);
    throw new Error("Faild To Fetch Error")
  }
}
export const fetchCategoryNewsData = async (query) => {
  console.log(query);
  try {
    const res = await fetch(`https://news-server-8hnz.onrender.com/api/v1/post/list?deleted=0&category_no=${query}`, {
      cache: "no-store"
    })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json();
  } catch (error) {
    console.log(error);
    throw new Error("Faild To Fetch Error")
  }
}