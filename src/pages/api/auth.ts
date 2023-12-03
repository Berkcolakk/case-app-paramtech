import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"
import { Authentication, Packages } from '@/constants/Endpoints/Login';
type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (!req.body) {
    return res.status(400).json({ message: "body is required!" })
  }
  const result = await axios.post(Authentication, req.body);

  res.status(result.status).json(result.data)
}