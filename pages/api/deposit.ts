// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import DBconfig from '../../config/DBconfig';

const sql = require('mssql');
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { depositAccount, depositAmount } = req.body;

  await sql.connect(DBconfig);

  const result = await sql.query`
  use elshubank;
  UPDATE [dbo].[accounts]
  set balance = (select balance from [dbo].[accounts] where account_no = ${depositAccount}) + ${depositAmount}
  where account_no = ${depositAccount}
  `;

  res.status(200).json(result);
}
