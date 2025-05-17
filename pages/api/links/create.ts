import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@/db'
import { shareLink } from '@/db/schema'

type Response = {
  insertedId?: number
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: Response[] }>,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ data: [{ message: 'Method not allowed' }] })
  }

  const payload = JSON.parse(req.body)

  try {
    const data = await db
      .insert(shareLink)
      .values(payload)
      .returning({ insertedId: shareLink.id })

    return res.status(200).json({ data })
  } catch (error) {
    return res.status(500).json({ data: [{ message: String(error) }] })
  }
}
