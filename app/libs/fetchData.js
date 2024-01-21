export const fetchData = async (query) => {
  try {
    const res = await fetch(`https://server.lastnewsbd24.com.bd/api/v1/category/list?deleted=0&status=0&page=${1}&perpage=${100}`)
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export const fetchPostDetails = async (query) => {
  try {
    const res = await fetch(`https://server.lastnewsbd24.com.bd/api/v1/post/details?post_no=${query}`)
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export const fetchCategoryNewsData = async (query) => {
  console.log(query);
  try {
    const res = await fetch(` https://server.lastnewsbd24.com.bd/api/v1/post/list?deleted=0&status=0&page=${1}&perpage=${100}&category_no=${query}`, {
      cache: "no-store"
    })

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export const fetchSearchCategoryNewsData = async (query, search) => {
  try {
    const res = await fetch(`https://server.lastnewsbd24.com.bd/api/v1/post/list?deleted=0&status=0&page=${1}&perpage=${100}&category_no=${query}&search=${search}`, {
      cache: "no-store"
    })

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export const fetchHomeNewsData = async () => {
  try {
    const res = await fetch(`https://server.lastnewsbd24.com.bd/api/v1/post/list?deleted=0&status=0&page=${1}&perpage=${100}&category_no=CTR1021&`, {
      cache: "no-store"
    })

    return res.json();
  } catch (error) {
    console.log(error);

  }
}

export const fetchSearchNewsData = async (search) => {

  try {
    const res = await fetch(`https://server.lastnewsbd24.com.bd/api/v1/post/list?deleted=0&status=0&page=${1}&perpage=${100}&search=${search}`, {
      cache: "no-store"
    })

    return res.json();
  } catch (error) {
    console.log(error);

  }
}

export const fetchTermAndConditionData = async () => {
  try {
    const res = await fetch(`https://server.lastnewsbd24.com.bd/api/v1/settings/terms_conditions/list?deleted=0&status=0&page=${1}&perpage=${100}`, {
      cache: "no-store"
    })

    return res.json();
  } catch (error) {
    console.log(error);

  }
}

export const fetchAboutUsData = async () => {
  try {
    const res = await fetch(`https://server.lastnewsbd24.com.bd/api/v1/settings/about_us/list?deleted=0&status=0&page=${1}&perpage=${100}`, {
      cache: "no-store"
    })

    return res.json();
  } catch (error) {
    console.log(error);

  }
}

export const fetchPhotoData = async () => {
  try {
    const res = await fetch(`https://server.lastnewsbd24.com.bd/api/v1/media/list/image?deleted=0&status=0&page=${1}&perpage=${100}`, {
      cache: "no-store"
    })

    return res.json();
  } catch (error) {
    console.log(error);

  }
}

export const fetchAdsData = async () => {
  try {
    const res = await fetch(`https://server.lastnewsbd24.com.bd/api/v1/ads/list?deleted=0&status=0&page=${1}&perpage=${100}`, {
      cache: "no-store"
    })

    return res.json();
  } catch (error) {
    console.log(error);

  }
}

export const fetchSocialData = async () => {
  try {
    const res = await fetch(`https://server.lastnewsbd24.com.bd/api/v1/social/list?deleted=0&status=0&page=${1}&perpage=${100}`, {
      cache: "no-store"
    })

    return res.json();
  } catch (error) {
    console.log(error);

  }
}

export const fetchLogoData = async () => {
  try {
    const res = await fetch(`https://server.lastnewsbd24.com.bd/api/v1/settings/logo/list?deleted=0&status=0&page=${1}&perpage=${100}`, {
      cache: "no-store"
    })

    return res.json();
  } catch (error) {
    console.log(error);

  }
}
export const fetchDashboardInfoData = async () => {
  try {
    const res = await fetch(`https://server.lastnewsbd24.com.bd/api/v1/dashboard/info?deleted=0&status=0&page=${1}&perpage=${100}`, {
      cache: "no-store"
    })

    return res.json();
  } catch (error) {
    console.log(error);

  }
}

export const fetchContactInfoData = async () => {
  try {
    const res = await fetch(`https://server.lastnewsbd24.com.bd/api/v1/settings/footer/info/details?deleted=0&status=0&page=${1}&perpage=${100}`, {
      cache: "no-store"
    })

    return res.json();
  } catch (error) {
    console.log(error);

  }
}
export const fetchAdsPackageData = async () => {
  try {
    const res = await fetch(`https://server.lastnewsbd24.com.bd/api/v1/package/list?deleted=0&status=0&page=${1}&perpage=${100}`, {
      cache: "no-store"
    })

    return res.json();
  } catch (error) {
    console.log(error);

  }
}
