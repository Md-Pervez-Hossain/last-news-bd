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

export const fetchTermAndConditionData = async () => {
  try {
    const res = await fetch(`https://news-server-8hnz.onrender.com/api/v1/settings/terms_conditions/list`, {
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

export const fetchAboutUsData = async () => {
  try {
    const res = await fetch(`https://news-server-8hnz.onrender.com/api/v1/settings/about_us/list`, {
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

export const fetchPhotoData = async () => {
  try {
    const res = await fetch(`https://news-server-8hnz.onrender.com/api/v1/media/list/image?deleted=0`, {
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

export const fetchAdsData = async () => {
  try {
    const res = await fetch(`https://news-server-8hnz.onrender.com/api/v1/ads/list?deleted=0&status=0&page=${1}&perpage=${100}`, {
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

export const fetchSocialData = async () => {
  try {
    const res = await fetch(`https://news-server-8hnz.onrender.com/api/v1/social/list?deleted=0&status=0&page=${1}&perpage=${100}`, {
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
