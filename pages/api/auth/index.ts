import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  return res.json({
    status: 200,
    message: "Hello, World!",
    message_type: "All systems are normal.",
  });
}
