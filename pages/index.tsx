import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import React, { useState } from "react";
import AccountsList from "../src/components/AccountsList";

const Home: NextPage = ({ records }: any) => {
  const [firstName, setfirstName] = useState<any>("");
  const [lastName, setlastName] = useState<any>("");
  const [balance, setbalance] = useState<any>("");

  const handleCreateAccount = async (e: any) => {
    e.preventDefault();
    const result = axios.post("http://localhost:3000/api/new", {
      firstName,
      lastName,
      balance,
    });

    console.log({ result });
  };
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 h-screen">
      <Head>
        <title>Elshu Bank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // const records = await axios.get(`http://localhost:3000/api/accounts`);
  return {
    props: {
      records: [], // records: records.data.recordset,
    },
  };
}

export default Home;
