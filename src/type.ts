interface PostType {
  id: number;
  user_id: number;
  title: string;
  body: string;
}
interface CreateUserType {
  name: string;
  email: string;
  gender: string;
  status: string;
}
interface CreateUserType1 {
  name: string;
  email: string;
  gender: string;
}
interface UserType extends CreateUserType {
  id: number;
}
interface CommentType {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
}
