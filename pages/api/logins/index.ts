import { NextApiRequest, NextApiResponse } from "next";

const logins = [
  { userId: 1, date: "2023-10-05", device: "Desktop" },
  { userId: 1, date: "2023-10-02", device: "Mobile" },
  { userId: 2, date: "2023-09-28", device: "Tablet" },
  // ... add more mock login activities as desired
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(logins);
}
