import axios from "axios";

const getCommentsByPostId = async (id: number) => {
  const response = await axios.get(process.env.url + `/posts/${id}/comments`);
  return response.data;
};

const commentService = {
  getCommentsByPostId,
};

export default commentService;
