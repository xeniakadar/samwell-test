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
    name: "Roger Federer",
    email: "nnew@example.com",
    signupDate: "2023-10-10",
  },
  {
    id: 5,
    name: "Bob Lance",
    email: "bob@example.com",
    signupDate: "2023-10-10",
  },
  {
    id: 6,
    name: "Rafael Nadal",
    email: "bob@example.com",
    signupDate: "2023-10-11",
  },
  {
    id: 7,
    name: "John Adams",
    email: "bob@example.com",
    signupDate: "2023-10-11",
  },
  {
    id: 8,
    name: "Cody Lance",
    email: "bob@example.com",
    signupDate: "2023-10-11",
  },
  {
    id: 9,
    name: "Jerry Seinfeld",
    email: "bob@example.com",
    signupDate: "2023-10-15",
  },
  // ... add more mock users as desired
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Signup[]>
) {
  res.status(200).json(signups);
}
