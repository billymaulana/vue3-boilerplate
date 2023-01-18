/* eslint-disable no-console */
import { ofetch } from 'ofetch'

export const API = import.meta.env.VITE_API_URL
export const useMyFetch = ofetch.create({
  baseURL: API,
  async onRequest({ request }) {
    console.log('fetch request', request)
  },
  async onRequestError({ request, error }) {
    console.log('fetch request error', request, error)
  },
  async onResponseError({ request, response, options }) {
    console.log('fetch response error', request, response.status, response.body, options)
  },
})
