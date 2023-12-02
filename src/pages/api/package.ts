import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"
import { Packages } from '@/constants/Endpoints/Login';
type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (!req.headers.authorization) {
    return res.status(500).json({ message: "token is required!" })
  }
  const result = await axios.get(Packages, { headers: { "Authorization": req.headers.authorization } });

  res.status(200).json(result.data)
}