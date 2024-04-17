type PostType = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

type UserType = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

type CommentType = {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
};
