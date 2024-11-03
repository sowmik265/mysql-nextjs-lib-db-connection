import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";

const UsersTable = ({ users, handleDelete, onEdit }) => {
  console.log(users);
  return (
    <div className="mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          {users.map((user, index) => (
            <tr key={user.user_id}>
              <td>{index + 1}</td>
              <td> {user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => handleDelete(user.user_id)}
                  type="button"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  <RiDeleteBin2Fill className="text-xl" />
                </button>
                <button
                  onClick={() => onEdit(user)}
                  type="button"
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  <GrUpdate className="text-xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
