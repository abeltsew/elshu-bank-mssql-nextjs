import React from 'react';
import axios from 'axios';

function AccountsList({ records }: any) {
  const handleDelete = async (accountId: any) => {
    const response = await axios.delete(
      `http://localhost:3000/api/${accountId}`
    );
    window.location.reload();
  };

  const renderBody = () => {
    return records.map((account: any, i: any) => {
      return (
        <tr
          key={account.accountId}
          className={` border-b  ${
            i % 2 !== 0 ? 'bg-white bg-opacity-30' : 'bg-opacity-0 '
          }`}
        >
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
            {account.accountId}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
            {account.firstName}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
            {account.lastName}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
            {account.balance}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
            <button
              className="text-center "
              onClick={() => handleDelete(account.accountId)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="flex flex-col w-full bg-white bg-opacity-30 rounded-lg shadow-lg">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <table className="w-full ">
              <thead className="bg-white bg-opacity-30 border-b w-full text-white">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center whitespace-nowrap "
                  >
                    Account #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center whitespace-nowrap "
                  >
                    First Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center whitespace-nowrap "
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Balance
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className=" border-b  ">{renderBody()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountsList;
