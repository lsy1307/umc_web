export function getAPI(url, page) {
  return {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
    params: { language: "ko-KR", page },
    url,
  };
}
