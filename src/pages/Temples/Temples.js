import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "../../assets/images/avatar-generic-avatar.png";
import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";
import { DeleteIcon } from "../../components/DeleteIcon";
import { EditIcon } from "../../components/EditIcon";
import { Status } from "../../components/Status";
import { AddTempleModal } from "./AddTemple";
import { EditTempleModal } from "./EditTemple";
import Spinner from "react-bootstrap/Spinner";

const fetchTemples = (pageIndex = 0, pageSize = 20) => {
  return axiosInstance
    .get(`/temples?pageIndex=${pageIndex}&pageSize=${pageSize}`)
    .then((res) => res.data);
};

const deleteTemple = (id) => axiosInstance.delete(`/temples/${id}`);

export const Temples = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [templeId, setTempleId] = useState();
  const [showError, setShowError] = useState(false);

  const pageSize = 20;
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["temples", page],
    queryFn: () => fetchTemples(page),
    keepPreviousData: true,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTemple,
  });

  const handleAddClick = () => setShowAddModal(true);

  const handleAddTempleSuccess = () => {
    setShowAddModal(false);
    refetch();
  };

  const handleUpdateTempleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["temple-details", templeId] });

    setShowEditModal(false);
    refetch();
  };

  const handleEditClick = (id) => () => {
    setTempleId(id);
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
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row heading-add">
            <aside className="col-sm-10">
              <h2 className="mb-0 page-title">Temples</h2>
            </aside>
            <aside className="col-sm-2 add-sec">
              <button className="bttn" onClick={handleAddClick}>
                Add
              </button>
            </aside>
          </div>
          <div className="row my-2">
            <div className="col-md-12">
              <div className="card shadow">
                <div className="card-body">
                  <div className="resp-table temples-tb">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Temple Name</th>
                          <th>Temple Board</th>
                          <th>Temple Images</th>
                          <th>Legal Identification Number</th>
                          <th>Temple Type</th>
                          <th>Address</th>
                          <th>City</th>
                          <th>State</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          <th>Current Location</th>
                          <th>Website</th>
                          <th>Year Of Establishment</th>
                          <th>Description or History</th>
                          <th>Facebook URL</th>
                          <th>Twitter URL</th>
                          <th>Instagram Handle</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading ? (
                          <tr>
                            <td rowSpan="10" colSpan="12">
                              <div className="text-center py-5">
                                <Spinner animation="border" />
                              </div>
                            </td>
                          </tr>
                        ) : (
                          data.data.map((p) => (
                            <tr key={p.id}>
                              <td>
                                {p.name}
                                {/* <Link to={`/temples/${p.id}/view`}>
                                  {p.name}
                                </Link> */}
                              </td>
                              <td>{p.boardName}</td>
                              <td>
                                <img
                                  style={{ borderRadius: "50%" }}
                                  height="40"
                                  width="40"
                                  src={p.image || Avatar}
                                />
                              </td>

                              <td>{p.legalIdentificationNumber}</td>
                              <td>{p.templeType}</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td>{p.user.email}</td>
                              <td>{p.phone}</td>
                              <td></td>
                              <td>{p.website}</td>
                              <td>
                                {new Date(p.yearOfEstablishment).getFullYear()}
                              </td>
                              <td>{p.descriptionOfHistory}</td>
                              <td>{p.facebookUrl}</td>
                              <td>{p.twitterUrl}</td>
                              <td>{p.instagramHandle}</td>
                              <td>
                                <Status code={p.status} />
                              </td>

                              <td className="actions">
                                <EditIcon onClick={handleEditClick(p.id)} />
                                <DeleteIcon onClick={handleDelete(p.id)} />
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
        <AddTempleModal
          handleSuccess={handleAddTempleSuccess}
          handleClose={() => setShowAddModal(false)}
        />
      ) : null}
      {showEditModal ? (
        <EditTempleModal
          handleSuccess={handleUpdateTempleSuccess}
          id={templeId}
          handleClose={() => setShowEditModal(false)}
        />
      ) : null}
    </>
  );
};
