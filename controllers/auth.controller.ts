import { Request, Response } from "express";
import UserModel from "./../models/user.model";

export const signUp = async (req: Request, res: Response) => {
  const { pseudo, email, password } = req.body;
  try {
    const user = await UserModel.create({ pseudo, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(200).send({ err });
  }
};
