import { Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [userList, setUserList] = useState([]);

  const [selUser, setSelUser] = useState(null);

  const submitForm = async (values) => {
    console.log(values);

    // sending a request on backend to save user data
    const res = await fetch(
      "http://localhost:2000/product/update/" + selUser._id,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );

    console.log(res.status);

    if (res.status === 200) {
      toast.success("User Updated");
      fetchUserData();
    }

    // add code here to connect to backend
  }

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:2000/product/getall");

    console.log(res.status);

    const data = await res.json();
    console.log(data);

    setTimeout(() => {
      setUserList(data);
    }, 2000);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const deleteUser = async (id) => {
    console.log(id);
    const res = await fetch("http://localhost:2000/product/delete/" + id, {
      method: "DELETE",
    });

    console.log(res.status);

    if (res.status === 200) {
      toast.success("User Deleted");
      fetchUserData();
    }
  };

  const updateUser = async (userdata) => {
    setSelUser(userdata);
    console.log(userdata);
  };

  const displayUsers = () => {
    if (userList.length === 0)
      return <h1 className="text-center my-5">Loading...</h1>;
    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Material</th>
            <th>Price</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr>
              <td>{user._id}</td>
              <td>{user.title}</td>
              <td>{user.material}</td>
              <td>{user.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={(e) => deleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#updateuser"
                  type="button"
                  onClick={(e) => updateUser(user)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <>
        {/* Modal */}
        <div
          className="modal fade"
          id="updateuser"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          // onBlur={() => setSelUser(null)}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {selUser && (

                  <Formik initialValues={selUser} onSubmit={submitForm} >
                    {({values, handleSubmit, handleChange}) => (
                       <form onSubmit={handleSubmit}>
                       <label htmlFor="">Name</label>
                       <input
                         className="form-control mb-3"
                         onChange={handleChange}
                         value={values.name}
                         name="name"
                       />
   
                       <label htmlFor="">Email</label>
                       <input
                         className="form-control mb-3"
                         onChange={handleChange}
                         value={values.email}
                         name="email"
                       />
   
                       <label htmlFor="">Password</label>
                       
                       <input
                         className="form-control mb-3"
                         type="password"
                         onChange={handleChange}
                         value={values.password}
                         name="password"
                       />
   
                       <button type="submit" className="btn btn-primary mt-4">
                         Update
                       </button>
                     </form>
                    )}
                  </Formik>

                 
                )}
              </div>
            </div>
          </div>
        </div>
      </>

      <p className="display-4 text-center fw-bold my-3">Manage User Data</p>
      <section className="mt-5">
        <div className="container">{displayUsers()}</div>
      </section>
    </div>
  );
};

export default ManageProducts;
