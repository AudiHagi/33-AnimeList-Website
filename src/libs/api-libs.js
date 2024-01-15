export const get_anime_response = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await response.json();
  return anime;
};

export const get_nested_anime_response = async (resource, object_property) => {
  const response = await get_anime_response(resource);
  return response.data.flatMap((item) => item[object_property]);
};

export const reproduce_data = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;
  const response = {
    data: data.slice(first, last),
  };
  return response
};
