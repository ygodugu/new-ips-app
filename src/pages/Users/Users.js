import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { EditIcon } from "../../components/EditIcon";
import { axiosInstance } from "../../axiosInstance";
import { Address } from "../../components/Address";
import { CustomPagination } from "../../components/CustomPagination";
import { AddUserModal } from "./AddUser";
import { EditUserModal } from "./EditUser";
import { DeleteIcon } from "../../components/DeleteIcon";
import { Status } from "../../components/Status";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const fetchUsers = (pageIndex = 0, pageSize = 20) => {
  return axiosInstance
    .get(`/users?pageIndex=${pageIndex}&pageSize=${pageSize}`)
    .then((res) => res.data);
};
const deleteUser = (id) => axiosInstance.delete(`/users/${id}`);

export const Users = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userId, setUserId] = useState();
  const pageSize = 20;
  const [showError, setShowError] = useState(false);

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
  });

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["users", page],
    queryFn: () => fetchUsers(page, pageSize),
    keepPreviousData: true,
  });

  const handleAddUserSuccess = () => {
    setShowAddModal(false);
    refetch();
  };

  const handleUpdateUserSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["user-details", userId] });
    setShowEditModal(false);
    refetch();
  };

  const handleEditClick = (id) => () => {
    setUserId(id);
    setShowEditModal(true);
  };

  const handleDelete = (id) => () => {
    deleteMutation.mutate(id, {
      onSuccess: refetch,
      onError(error) {
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 3000);
      },
    });
  };

  return (
    <>
      {showError ? (
        <Alert variant="danger" onClose={() => showError(false)}>
          <Alert.Heading>Server Error!</Alert.Heading>
          <p>Can not user</p>
        </Alert>
      ) : null}

      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row heading-add">
            <aside className="col-sm-10">
              <h2 className="mb-0 page-title">Users</h2>
            </aside>
            <aside className="col-sm-2 add-sec">
              <button className="bttn" onClick={() => setShowAddModal(true)}>
                Add
              </button>
            </aside>
          </div>
          <div className="row my-2">
            <div className="col-md-12">
              <div className="card shadow">
                <div className="card-body">
                  <div className="resp-table users-tb">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>First Name</th>
                          <th>Middle Name</th>
                          <th>Last Name</th>
                          <th>Address Line 1</th>
                          <th>Address Line 2</th>
                          <th>City</th>
                          <th>State</th>
                          <th>Country</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          <th>Current Location</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading ? (
                          <tr>
                            <td rowSpan="10" colSpan="13">
                              <div className="text-center py-5">
                                <Spinner animation="border" />
                              </div>
                            </td>
                          </tr>
                        ) : (
                          data.data.map((u) => (
                            <tr key={u.id}>
                              <td>{u.firstName}</td>
                              <td>{u.middleName}</td>
                              <td> {u.lastName}</td>
                              <Address address={u.address} />

                              <td>{u.email}</td>
                              <td>{u.primaryMobile}</td>

                              <td></td>
                              <td>
                                <Status code={u.status} />
                              </td>

                              <td className="actions">
                                <EditIcon onClick={handleEditClick(u.id)} />
                                <DeleteIcon onClick={handleDelete(u.id)} />
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                  {!isLoading ? (
                    <CustomPagination
                      page={page}
                      pageSize={pageSize}
                      data={data}
                      setPage={setPage}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAddModal ? (
        <AddUserModal
          handleSuccess={handleAddUserSuccess}
          handleClose={() => setShowAddModal(false)}
        />
      ) : null}
      {showEditModal ? (
        <EditUserModal
          id={userId}
          handleSuccess={handleUpdateUserSuccess}
          handleClose={() => setShowEditModal(false)}
        />
      ) : null}
    </>
  );
};
