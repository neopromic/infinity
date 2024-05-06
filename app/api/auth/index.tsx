import { NextApiRequest, NextApiResponse } from "next";

export default function GET(req : NextApiRequest, res : NextApiResponse) {
    return res.json({
        "status": 200,
    });
}