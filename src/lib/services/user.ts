import axios from "axios";

const getUsers = async ({
  page,
  per_page,
}: {
  page: number;
  per_page: number;
}) => {
  const response = await axios.get(
    process.env.url + `/users?page=${page}&per_page=${per_page}`
  );
  return response.data;
};
const getUserDetails = async (id: number) => {
  const response = await axios.get(process.env.url + `/users/${id}`);
  return response.data;
};

const userService = {
  getUsers,
  getUserDetails,
};

export default userService;
