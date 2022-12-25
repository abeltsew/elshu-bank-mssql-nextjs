import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import React, { useState } from "react";
import AccountsList from "../src/components/AccountsList";
import NavBar from "../src/components/NavBar";

const Home: NextPage = ({ records }: any) => {
  const [firstName, setfirstName] = useState<any>("");
  const [lastName, setlastName] = useState<any>("");
  const [balance, setbalance] = useState<any>("");

  const [amount, setAmount] = useState<any>("");
  const [senderAccount, setSenderAccount] = useState<any>("");
  const [receiverAccount, setreceiverAccount] = useState<any>("");

  const [withdrawAmount, setWithdrawAmount] = useState<any>("");
  const [withdrawalAccount, setWithdrawalAccount] = useState<any>("");

  const handleCreateAccount = async (e: any) => {
    e.preventDefault();
    const result = axios.post("http://localhost:3000/api/new", {
      firstName,
      lastName,
      balance,
    });
    window.location.reload();
    setfirstName("");
    setSenderAccount("");
    setreceiverAccount("");
  };

  const handleSendMoney = async (e: any) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:3000/api/send", {
      senderAccount,
      receiverAccount,
      amount,
    });

    window.location.reload();
    setAmount("");
    setSenderAccount("");
    setreceiverAccount("");
  };

  const handleWithdrawal = async (e: any) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:3000/api/withdraw", {
      withdrawalAccount,
      withdrawAmount,
    });

    window.location.reload();
  };
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 h-full">
      <Head>
        <title>Elshu Bank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div
        className="flex flex-col lg:flex-row justify-around w-full space-x-16 py-10 px-32"
        // style={{
        //   display: "flex",
        //   justifyContent: "space-around",
        //   width: "100%",
        //   gap: "50px",
        //   padding: "10px 30px",
        // }}
      >
        <AccountsList records={records} />

        <div className="flex flex-row space-y-10 lg:flex-col lg:space-y-10">
          <div className="block p-6 rounded-lg shadow-lg bg-white bg-opacity-30 max-w-md">
            <h1 className="mb-5 text-center">Create New Account</h1>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput123"
                    aria-describedby="emailHelp123"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput124"
                    aria-describedby="emailHelp124"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group mb-6">
                <input
                  type="number"
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput125"
                  placeholder="Balance"
                  value={balance}
                  onChange={(e) => setbalance(e.target.value)}
                />
              </div>

              <button
                onClick={(e) => handleCreateAccount(e)}
                type="submit"
                className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
              >
                Create Account
              </button>
            </form>
          </div>

          <div className="block p-6 rounded-lg shadow-lg bg-white bg-opacity-30 max-w-md">
            <h1 className="mb-5 text-center">Local Money Transfer</h1>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group mb-6">
                  <input
                    type="number"
                    className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput123"
                    aria-describedby="emailHelp123"
                    placeholder="Sender Account"
                    value={senderAccount}
                    onChange={(e) => setSenderAccount(e.target.value)}
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="number"
                    className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput124"
                    aria-describedby="emailHelp124"
                    placeholder="Receiver Account"
                    value={receiverAccount}
                    onChange={(e) => setreceiverAccount(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group mb-6">
                <input
                  type="number"
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput125"
                  placeholder="Transfer Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <button
                onClick={(e) => handleSendMoney(e)}
                type="submit"
                className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
              >
                Create Account
              </button>
            </form>
          </div>

          <div className="block p-6 rounded-lg shadow-lg bg-white bg-opacity-30 max-w-md">
            <h1 className="mb-5 text-center">Withdraw from Account</h1>
            <form>
              <div className="form-group mb-6">
                <input
                  type="number"
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput125"
                  placeholder="Account Number"
                  value={withdrawalAccount}
                  onChange={(e) => setWithdrawalAccount(e.target.value)}
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="number"
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput125"
                  placeholder="Withdrawal Amount"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                />
              </div>

              <button
                onClick={(e) => handleWithdrawal(e)}
                type="submit"
                className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
              >
                Withdraw {`$ ${withdrawAmount}`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const records = await axios.get(`http://localhost:3000/api/accounts`);
  return {
    props: {
      records: records.data.recordset,
    },
  };
}

export default Home;
