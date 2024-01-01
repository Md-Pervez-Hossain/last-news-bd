export const fetchData = async (query) => {
  try {
    const res = await fetch(`https://news-server-8hnz.onrender.com/api/v1/category/list?perpage=50&page=1&deleted=0`)
    // if (!res.ok) {
    //   throw new Error('Failed to fetch data')
    // }
    return res.json();
  } catch (error) {
    console.log(error);

  }
}
export const fetchPostDetails = async (query) => {
  try {
    const res = await fetch(`https://news-server-8hnz.onrender.com/api/v1/post/details?post_no=${query}`)
    // if (!res.ok) {
    //   throw new Error('Failed to fetch data')
    // }
    return res.json();
  } catch (error) {
    console.log(error);

  }
}
export const fetchCategoryNewsData = async (query) => {
  console.log(query);
  try {
    const res = await fetch(`https://news-server-8hnz.onrender.com/api/v1/post/list?deleted=0&category_no=${query}`, {
      cache: "no-store"
    })
    // if (!res.ok) {
    //   throw new Error('Failed to fetch data')
    // }
    return res.json();
  } catch (error) {
    console.log(error);

  }
}