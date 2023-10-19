import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import {AnimatePresence,motion} from 'framer-motion'

const ManageUsers = () => {

  const [userList, setMusicList] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5000/user/getall");
    console.log(res.status);

    const data = await res.json();
    console.table(data);

    setMusicList(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const deleteUser = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:5000/user/delete/'+id, {method : 'DELETE'});
    console.log(res.status);
    if(res.status === 200){
      fetchUserData();
      toast.success('Music Deleted Successfully');
    }
  }

  return (
    <div
    

     className="vh-100 bg-body-secondary">
      <div className="container py-5">
        <h1 className="text-center my-4">Upload Music</h1>

        <table className="table table-dark">
          <thead>
            <tr>
              <th>S. no.</th>
              <th>ID</th>
              <th>Name</th>
              <th>Music</th>
              <th>instrument</th>
              <th colSpan={2} className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode='popLayout'>
            {
              userList.map( (user, index) => (
                <motion.tr
                 animate={{opacity:1}}
                 exit={{opacity:0}} 
                 key={user._id}>
                  <td>{index+1}</td>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                  <td>
                    <Link to={'/updateuser/'+user._id} className="btn btn-primary">Edit</Link>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={ () => { deleteUser(user._id) } } >Delete</button>
                  </td>
                </motion.tr>
              ))
            }
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
