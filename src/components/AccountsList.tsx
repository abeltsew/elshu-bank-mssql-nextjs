import React from "react";
import axios from "axios";

function AccountsList({ records }: any) {
  const handleDelete = async (accountId: any) => {
    const response = await axios.delete(
      `http://localhost:3000/api/${accountId}`
    );
    console.log({ response });
  };

  const renderBody = () => {
    return records.map((account: any) => {
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
  };
  return (
    <div className="flex flex-col w-full ">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <table className="min-w-full ">
              <thead className="bg-white bg-opacity-30 border-b ">
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
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className=" border-b bg-opacity-0">
                <tr className=" border-b bg-opacity-0">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    10232
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Abel
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Tsegaye
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    5343
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
                <tr className="bg-white border-b bg-opacity-30">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    10232
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Abel
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Tsegaye
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    5343
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
                <tr className="bg-white border-b bg-opacity-30">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    10232
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Abel
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Tsegaye
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    5343
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
                <tr className="bg-white border-b bg-opacity-30">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    10232
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Abel
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Tsegaye
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    5343
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
                {renderBody()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountsList;
