import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Avatar from "../../assets/images/avatar-generic-avatar.png";
import { axiosInstance } from "../../axiosInstance";
import { Address } from "../../components/Address";
import { CustomPagination } from "../../components/CustomPagination";
import { DateOfBirth } from "../../components/DateOfBirth";
import { DeleteIcon } from "../../components/DeleteIcon";
import { EditIcon } from "../../components/EditIcon";
import { Status } from "../../components/Status";
import { AddPriesteModal } from "./AddPriest";
import { EditPriestModal } from "./EditPriest";

const fetchPriests = (pageIndex = 0, pageSize = 20, search) => {
  return axiosInstance
    .get(
      `/priests?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}`
    )
    .then((res) => res.data);
};

const deletePriest = (id) => axiosInstance.delete(`/priests/${id}`);

export const Priests = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [priestId, setPriestId] = useState();
  const [search, setSearch] = useState("");
  const [showError, setShowError] = useState(false);
  const pageSize = 20;
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["priests", page, search],
    queryFn: () => fetchPriests(page, pageSize, search),
    keepPreviousData: true,
  });

  const deleteMutation = useMutation({
    mutationFn: deletePriest,
  });

  const handleAddClick = () => setShowAddModal(true);

  const handleAddPriestSuccess = () => {
    setShowAddModal(false);
    refetch();
  };

  const handleUpdatePriestSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: ["priest-details", priestId],
    });
    setShowEditModal(false);
    refetch();
  };

  const handleEditClick = (id) => () => {
    setPriestId(id);
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
              <h2 className="mb-0 page-title">Priest</h2>
            </aside>
            {/* <form className="form-inline  mr-auto searchform">
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="form-control mr-sm-2 border-0"
                type="search"
                style={{ background: "white" }}
                placeholder="Search"
                aria-label="Search"
              />
            </form> */}
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
                  <div className="resp-table priest-tb">
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
                          <th>Father Name</th>
                          <th>Date Of Birth</th>
                          <th>Mother Tounge</th>
                          <th>Photograph</th>
                          <th>Designation</th>
                          <th>Years of Exp</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading ? (
                          <tr>
                            <td rowSpan="10" colSpan="15">
                              <div className="text-center py-5">
                                <Spinner animation="border" />
                              </div>
                            </td>
                          </tr>
                        ) : (
                          data.data.map((p) => (
                            <tr key={p.id}>
                              <td>{p.user.firstName}</td>
                              <td>{p.user.middleName}</td>
                              <td> {p.user.lastName}</td>
                              <Address address={p.user.address} />
                              <td>{p.user.email}</td>
                              <td>{p.user.primaryMobile}</td>
                              <td></td>
                              <td>{p.user.fatherName}</td>
                              <td>
                                <DateOfBirth dob={p.user.dateOfBirth} />
                              </td>
                              <td>{p.user.motherTongue}</td>
                              <td>
                                <img
                                  style={{ borderRadius: "50%" }}
                                  height="40"
                                  width="40"
                                  src={p.image || Avatar}
                                />
                              </td>
                              <td>{p.designation}</td>
                              <td>{p.yearsOfExperience}</td>
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
        <AddPriesteModal
          handleSuccess={handleAddPriestSuccess}
          handleClose={() => setShowAddModal(false)}
        />
      ) : null}
      {showEditModal ? (
        <EditPriestModal
          handleSuccess={handleUpdatePriestSuccess}
          id={priestId}
          handleClose={() => setShowEditModal(false)}
        />
      ) : null}
    </>
  );
};
