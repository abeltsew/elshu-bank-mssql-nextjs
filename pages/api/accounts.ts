// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import DBconfig from "../../config/DBconfig";

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

const sql = require("mssql");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await sql.connect(DBconfig);
  const result = await sql.query`
  use elshubank;
  SELECT acc.account_no as accountId,cli.firstName,cli.lastName, acc.balance
  FROM [elshubank].[dbo].[accounts] as acc join [dbo].[clients] as cli on acc.account_no = cli.account_no
 `;

  res.status(200).json(result);
}
