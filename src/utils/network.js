import { HTTP, HTTPS } from "@constants/api";

/**
 * Changin URL, HTTP with HTTPS
 * @param {String} url - url for changing
 * @return {String} - url with HTTPS
 */
export const changeHTTP = (url) => {
  return url ? url.replace(HTTP, HTTPS) : url;
};

/**
 * sending Fetch request
 * @param {String} url - url for request
 * @return {Promise} - Promise with result
 */
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.error("Could not fetch.", error.message);
    return false;
  }
};

export const makeConcurrentRequest = async (urls) => {
  const res = await Promise.all(
    urls.map((res) => {
      return fetch(res).then((res) => res.json());
    })
  );

  return res;
};
