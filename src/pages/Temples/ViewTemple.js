import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../axiosInstance";
import { AddTempleServiceModal } from "./AddTempleService";

const getTempleDetails = (id) => {
  return axiosInstance.get(`/temples/${id}`).then((res) => res.data);
};

const getTempleServices = (templeId) => {
  return axiosInstance
    .get(`/temple-services?templeId=${templeId}&pageIndex=0&pageSize=20`)
    .then((res) => res.data);
};

export const ViewTemple = () => {
  const { id } = useParams();
  const [showAddServiceModal, setShowAddServiceModal] = useState(false);
  const [showEditServiceModal, setShowEditServiceModal] = useState(false);
  const [templeServiceId, setTempleServiceId] = useState();
  const { data: templeDetails, error } = useQuery({
    queryKey: ["temple-details", id],
    queryFn: () => getTempleDetails(id),
  });

  const { data: templeServices, isLoading: templeServicesLoading } = useQuery({
    queryKey: ["temple-services", id],
    queryFn: () => getTempleServices(id),
  });

  const handleAddServiceClick = () => {
    setShowAddServiceModal(true);
  };

  const handleEditServiceClick = () => {
    setShowEditServiceModal(true);
  };

  const handleAddTempleServiceSuccess = () => {
    setShowAddServiceModal(false);
    // refetch();
  };

  const handleEditTempleServiceSuccess = () => {
    setShowEditServiceModal(false);
    // refetch();
  };

  return (
    <>
      {templeDetails && (
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="row heading-add">
              <aside className="col-sm-10">
                <h2 className="mb-0 page-title">Temple Details</h2>
              </aside>
            </div>
            <div className="row my-2">
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-body">
                    <h5 className="card-title">Temple Details</h5>
                    <div className="row">
                      <div className="col-md-5 mt-1">
                        <label>Temple Name</label>
                      </div>
                      <div className="col-md-7 mt-1">
                        <label>{templeDetails.name}</label>
                      </div>
                      <div className="col-md-5 mt-1">
                        <label>Temple Board</label>
                      </div>
                      <div className="col-md-7 mt-1">
                        <label>{templeDetails.boardName}</label>
                      </div>
                      <div className="col-md-5 mt-1">
                        <label>Legal Identification Number</label>
                      </div>
                      <div className="col-md-7 mt-1">
                        <label>{templeDetails.legalIdentificationNumber}</label>
                      </div>
                      <div className="col-md-5 mt-1">
                        <label>Temple Type</label>
                      </div>
                      <div className="col-md-7 mt-1">
                        <label>{templeDetails.templeType}</label>
                      </div>
                      <div className="col-md-5 mt-1">
                        <label>Mobile</label>
                      </div>
                      <div className="col-md-7 mt-1">
                        <label>{templeDetails.phone}</label>
                      </div>
                      <div className="col-md-5 mt-1">
                        <label>Website</label>
                      </div>
                      <div className="col-md-7 mt-1">
                        <label>{templeDetails.website}</label>
                      </div>
                      <div className="col-md-5 mt-1">
                        <label>Year Of Establishment</label>
                      </div>
                      <div className="col-md-7 mt-1">
                        <label>
                          {new Date(
                            templeDetails.yearOfEstablishment
                          ).getFullYear()}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-body">
                    <h5 className="card-title">Temple Images</h5>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="row">
                      <aside className="col-sm-10">
                        <h5 className="card-title">Temple Services</h5>
                      </aside>
                      <aside className="col-sm-2 add-sec">
                        <button
                          className="bttn"
                          onClick={handleAddServiceClick}
                        >
                          Add
                        </button>
                      </aside>
                    </div>
                    <div>
                      <table className="table mt-2">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Time</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {templeServicesLoading ? (
                            <tr>
                              <td rowSpan="10" colSpan="4">
                                <div className="text-center py-5">
                                  <Spinner animation="border" />
                                </div>
                              </td>
                            </tr>
                          ) : (
                            templeServices.data.map((p) => (
                              <tr key={p.id}>
                                <td>{p.name}</td>
                                <td>{p.boardName}</td>

                                <td></td>
                                <td></td>
                                <td></td>

                                {/* <td className="actions">
                                <EditIcon onClick={handleEditClick(p.id)} />
                                <DeleteIcon onClick={handleDelete(p.id)} />
                              </td> */}
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="row">
                      <aside className="col-sm-10">
                        <h5 className="card-title">Priests</h5>
                      </aside>
                      <aside className="col-sm-2 add-sec">
                        <button
                          className="bttn"
                          onClick={handleAddServiceClick}
                        >
                          Add
                        </button>
                      </aside>
                    </div>
                    <div>
                      <table className="table mt-2">
                        <thead>
                          <tr>
                            <th>Priest Name</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* {data.data.map((p) => (
                              <tr key={p.id}>
                                <td>{p.name}</td>
                                <td>{p.boardName}</td>

                                <td></td>
                                <td></td>
                                <td></td>

                                <td className="actions">
                                  <EditIcon onClick={handleEditClick(p.id)} />
                                  <DeleteIcon onClick={handleDelete(p.id)} />
                                </td>
                              </tr>
                            ))} */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showAddServiceModal ? (
        <AddTempleServiceModal
          handleSuccess={handleAddTempleServiceSuccess}
          templeId={id}
          handleClose={() => setShowAddServiceModal(false)}
        />
      ) : null}
      {showEditServiceModal ? (
        <AddTempleServiceModal
          handleSuccess={handleEditTempleServiceSuccess}
          id={templeServiceId}
          templeId={id}
          handleClose={() => setShowEditServiceModal(false)}
        />
      ) : null}
    </>
  );
};
