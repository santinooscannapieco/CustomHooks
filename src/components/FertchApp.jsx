/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const FertchApp = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data, isLoading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(url, "GET");
  }, []);

  return (
    <div className="text-center">
      <h3>Lista de usuarios:</h3>
      {isLoading ? (
        <h4>Cargando...</h4>
      ) : error ? (
        <h4>Ha ocurrido un error: {error}</h4>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}name</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
