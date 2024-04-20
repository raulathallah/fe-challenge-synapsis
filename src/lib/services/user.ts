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

const createUser = async ({ body }: { body: CreateUserType }) => {
  const response = await axios.post(process.env.url + `/users`, body, {
    headers: { Authorization: `Bearer ${process.env.token}` },
  });
  return { data: response.data, status: response.status };
};
const updateUser = async ({
  body,
  id,
}: {
  body: CreateUserType;
  id: string;
}) => {
  const response = await axios.put(process.env.url + `/users/${id}`, body, {
    headers: { Authorization: `Bearer ${process.env.token}` },
  });

  return { data: response.data, status: response.status };
};

const userService = {
  getUsers,
  getUserDetails,
  createUser,
  updateUser,
};

export default userService;
