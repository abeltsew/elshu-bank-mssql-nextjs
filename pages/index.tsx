import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import React, { useState } from "react";

const Home: NextPage = ({ records }: any) => {
  const handleDelete = async (accountId: any) => {
    const response = await axios.delete(
      `http://localhost:3000/api/${accountId}`
    );
    console.log({ response });
  };

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
    <div>
      <Head>
        <title>Elshu Bank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ol>
        {records.map((account: any) => {
          return (
            <li key={account.no}>
              {account.no} {account.firstName} {account.balance} -{" "}
              <button onClick={() => handleDelete(account.accountId)}>
                Delete
              </button>
            </li>
          );
        })}
      </ol>
      <div>
        <h1>Create New Account</h1>
        <form className="flex flex-col" style={{ display: "flex" }}>
          <div>
            <label>firstName</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
          <br />
          <div className="">
            <label>lastName</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <br />
          <div className="">
            <label>balance</label>
            <input
              type="text"
              value={balance}
              onChange={(e) => setbalance(e.target.value)}
            />
          </div>

          <button onClick={(e) => handleCreateAccount(e)}>
            Add new Account
          </button>
        </form>
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
