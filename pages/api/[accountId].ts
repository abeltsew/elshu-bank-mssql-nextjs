// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import DBconfig from "../../config/DBconfig";

const sql = require("mssql");
export default async function handler(req: any, res: NextApiResponse<any>) {
  const { accountId }: any = req.query;
  console.log(req.query);

  await sql.connect(DBconfig);

  switch (req.method) {
    case "DELETE":
      const result = await sql.query`
        BEGIN TRAN
        Delete FROM [elshubank].[dbo].[accounts] WHERE account_no = ${parseInt(
          accountId
        )}
        Delete FROM [elshubank].[dbo].[accounts] WHERE account_no = ${parseInt(
          accountId
        )}
        COMMIT TRAN
        `;

      console.log(result);
      console.log(parseInt(accountId));

      res.status(200).json(result);
    default:
      break;
  }
}
