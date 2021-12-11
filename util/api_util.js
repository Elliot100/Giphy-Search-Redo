
export const fetchSearchGiphys = (searchTerm) =>
  $.ajax({
    method: "GET",
    url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=h0TXriBXWwTDGKcgVWIDQhbY6xr6FSxs&limit=2`,
  });
