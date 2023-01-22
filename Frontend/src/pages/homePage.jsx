import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useState } from "react";
import axios from "axios";

export default function homePage() {
  const [list, setList] = useState([]);

  const fetchHandler = async () => {
    try {
      const body = {
        genres: ["Horror"],
      };
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2MxNjM3YmIzODg0Y2IwODczMmQ0YSIsImlhdCI6MTY3NDM2OTkwMiwiZXhwIjoxNjc2MDk3OTAyfQ.Prwe4UnFLmXJMeO2G2br5MWVcdW15CqnUF44RRdYuKc";
      const results = await axios.post(
        "http://localhost:8000/api/v1/list/generate",
        body,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setList(results.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <button
        onClick={() => {
          fetchHandler();
        }}
      >
        Press me (hardcoded for now)
      </button>
      <div className="">
        {list.list &&
          list.list.map((e) => {
            return <Card data={e} key={e.id} />;
          })}
      </div>
    </div>
  );
}
