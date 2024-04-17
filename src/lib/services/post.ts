import axios from "axios";

const getPosts = async () => {
  const response = await axios.get(process.env.url + "/posts");
  console.log(response);
  return response.data;
};

const postService = {
  getPosts,
};

export default postService;
