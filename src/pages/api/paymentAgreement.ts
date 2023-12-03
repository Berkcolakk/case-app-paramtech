import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"
import { Packages, PaymentAgreement } from '@/constants/Endpoints/Login';
type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (!req.headers.authorization) {
    return res.status(400).json({ message: "token is required!" })
  }
  const result = await axios.get(PaymentAgreement, { headers: { "Authorization": req.headers.authorization } });
  
  res.status(result.status).json(result.data)
}