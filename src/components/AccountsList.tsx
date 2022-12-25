import React from "react";
import axios from "axios";

function AccountsList({ records }: any) {
  const handleDelete = async (accountId: any) => {
    const response = await axios.delete(
      `http://localhost:3000/api/${accountId}`
    );
    console.log({ response });
  };

  {
    records.map((account: any) => {
      return (
        <tr className="bg-gray-100 border-b" key={account.no}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {account.no}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {account.firstName}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {account.lastName}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {account.balance}
          </td>
          <td>
            <button onClick={() => handleDelete(account.accountId)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Account #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    First Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountsList;
