/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@/db'
import { shareLink } from '@/db/schema'

export default async function tampilkan(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const data = await db.select().from(shareLink)
    return res.status(200).json(data)
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  }
}
