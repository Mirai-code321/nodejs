import { Request, Response } from "express";
import {
  getAllUsers,
  getUserById,
  handleCreateUser,
  handleDeleteUser, updateUserById, 
} from "services/user.service";

const getHomePage = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  return res.render("home", {
    users: users,
  });
};

const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create-user.ejs");
};

const postCreateUser = async (req: Request, res: Response) => {
  //cú pháp object destructuring
  const { name, email, address } = req.body;
  //handle create user
  await handleCreateUser(name, email, address);
  return res.redirect("/");
};

const postDeleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await handleDeleteUser(id as string);
  return res.redirect("/");
};

const postViewUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserById(id as string);
  return res.render("view-user.ejs", {
    id: id,
    user: user,
  });
};

const postUpdateUser = async (req: Request, res: Response) => {
  const { id, name, address, email } = req.body;
   const a = await updateUserById(id, name, address, email );

  return res.redirect("/");
};

export {
  getHomePage,
  getCreateUserPage,
  postCreateUser,
  postDeleteUser,
  postViewUser,
  postUpdateUser,
};
