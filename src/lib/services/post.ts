import axios from "axios";

const getPosts = async ({
  page,
  per_page,
}: {
  page: number;
  per_page: number;
}) => {
  const response = await axios.get(
    process.env.url + `/posts?page=${page}&per_page=${per_page}`
  );
  return response.data;
};

const getPostDetails = async (id: number) => {
  const response = await axios.get(process.env.url + `/posts/${id}`);
  return response.data;
};

const postService = {
  getPosts,
  getPostDetails,
};

export default postService;
