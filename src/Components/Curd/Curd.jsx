import React from "react";
import Header from "../Header/Header";
import Style from "../Curd/Curd.module.css"
import { MdEdit,MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import data from './UserData.json'
const Curd = () => {
  
  return (
    <>
      <Header />
      <NavLink to={"/create"} className={`btn btn-primary ${Style.btn}`} >Add+</NavLink>
      <table className={`table table-hover ${Style.tablebar}`}>
        <thead>
          <tr>
            <th>#Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>

          </tr>
          <tr></tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
              <td><button className={`btn btn-sm btn-warning ${Style.editBtn}`}><MdEdit/></button><button className={`btn btn-sm btn-danger ms-1 ${Style.delBtn}`}><MdDelete/></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Curd;
