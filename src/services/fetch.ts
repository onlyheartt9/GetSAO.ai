const token = process.env.REACT_APP_API_KEY;
const get = async (url: string, data: any = {}, options: any = {}) => {
  const response = await fetch(url, {
    ...options,
    method: "GET",
    data: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${options.token}`,
    },
  });
  return response;
};

const post = async (url: string, data: any = {}, options: any = {}) => {
  console.log(token,77777778888888);
  const response = await fetch(url, {
    ...options,
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${options.token}`,
    },
  });
  return response.json();
};
export default { get, post };
