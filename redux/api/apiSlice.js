import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://server.lastnewsbd.com/api/v1",
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => `/category/list?deleted=0&status=0&page=${1}&perpage=${100}`,
    }),
    getCategoryNews: builder.query({
      query: (query) => `/post/list?deleted=0&status=0&page=${1}&perpage=${100}&category_no=${query}`,
    }),
    getAds: builder.query({
      query: () => `/ads/list?deleted=0&status=0&page=${1}&perpage=${100}`,
    }),
    getLogo: builder.query({
      query: () => `/settings/logo/list?deleted=0&status=0&page=${1}&perpage=${100}`,
    }),
    getSocialData: builder.query({
      query: () => `/social/list?deleted=0&status=0&page=${1}&perpage=${100}`,
    }),
    getPhotos: builder.query({
      query: () => `/media/list/image?deleted=0&status=0&page=${1}&perpage=${100}`,
    }),
    getPostDetails: builder.query({
      query: (query) => `/post/details?post_no=${query}`,
    }),
    getCategoryNewsData: builder.query({
      query: (query) => `/post/list?deleted=0&status=0&page=${1}&perpage=${100}&category_no=${query}`,
    }),
  })
})

export const { useGetCategoryQuery, useGetCategoryNewsQuery, useGetAdsQuery, useGetLogoQuery, useGetSocialDataQuery, useGetPhotosQuery, useGetPostDetailsQuery, useGetCategoryNewsDataQuery } = api