export function getAPI(url) {
  return {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
    params: { language: "en-US" },
    url,
  };
}
