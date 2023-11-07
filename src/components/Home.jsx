import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        setData(res.data);
        setRecords(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  const Filter = (event) => {
    /*Now filtering data ..., we r filtering based name*/
    setRecords(
      data.filter((f) => f.name.toLowerCase().includes(event.target.value))
    );
  };

  return (
    <div className="p-5 bg-light">
      <div className="container">
        <div className="bg-white shadow border p-3">
          {/* This is the search bar */}
          <input
            type="text"
            className="form-control mb-3"
            placeholder="search ..."
            onChange={Filter}
          />

          {/* Table component */}
          <div
            className="ta
          ble-responsive"
          >
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {records.map((d, i) => (
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
/* https://youtu.be/KRJvlxhLXxk?si=-me7G9jncqihjXOE    Link of video*/
