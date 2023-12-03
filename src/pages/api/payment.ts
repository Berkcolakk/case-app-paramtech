import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"
import { Packages, Payment } from '@/constants/Endpoints/Login';
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
    if (!req.body) {
        return res.status(400).json({ message: "request body cannot be null" })
    }
    const result = await axios.post(Payment, req.body, { headers: { "Authorization": req.headers.authorization } });

    res.status(result.status).json(result.data)
}