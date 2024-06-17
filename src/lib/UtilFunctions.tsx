const domain = process.env.REACT_APP_DOMAIN;
const IMAGE_ENDPOINT = `${domain}/api/images`;
export const fetchImage = async (identifier: string) => {
  const url = `${IMAGE_ENDPOINT}/${identifier}`;
  const res = await fetch(url);
  const imageBlob = await res.blob();
  const imageObjectUrl = URL.createObjectURL(imageBlob);
  return imageObjectUrl;
};

export const getPosts = async () => {
  const url = `${domain}/api/posts`;
  const res = await fetch(url);
  const json = res.json();
  return json;
};
