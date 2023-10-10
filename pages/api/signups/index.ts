import { NextApiRequest, NextApiResponse } from "next";
import { Signup } from "../../../types/api";

const signups = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    signupDate: "2023-10-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    signupDate: "2023-09-27",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    signupDate: "2023-09-20",
  },
  {
    id: 4,
    name: "New user",
    email: "nnew@example.com",
    signupDate: "2023-10-10",
  },
  // ... add more mock users as desired
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Signup[]>
) {
  res.status(200).json(signups);
}
