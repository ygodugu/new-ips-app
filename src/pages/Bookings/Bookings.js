import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";

import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";
import { DateOfBirth } from "../../components/DateOfBirth";
import { DeleteIcon } from "../../components/DeleteIcon";
import { EditIcon } from "../../components/EditIcon";
import { Status } from "../../components/Status";
import { AddBookingModal } from "./AddBooking";
import { EditBookingModal } from "./EditBooking";

const fetchBookings = (pageIndex = 0, pageSize = 20) => {
  return axiosInstance
    .get(`/bookings?pageIndex=${pageIndex}&pageSize=${pageSize}`)
    .then((res) => res.data);
};

const deleteBooking = (id) => {
  return axiosInstance.delete(`/bookings/${id}`);
};

export const Bookings = () => {
  const [page, setPage] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showError, setShowError] = useState(false);

  const [certificationId, setCertificationId] = useState();
  const pageSize = 20;
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["bookings", page],
    queryFn: () => fetchBookings(page),
    keepPreviousData: true,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteBooking,
  });

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleAddCertificationSuccess = () => {
    setShowAddModal(false);
    refetch();
  };

  const handleUpdateCertificationSuccess = () => {
    setShowEditModal(false);
    refetch();
  };

  const handleEditClick = (id) => () => {
    setCertificationId(id);
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
          <p>Can not delete service</p>
        </Alert>
      ) : null}
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row heading-add">
            <aside className="col-sm-10">
              <h2 className="mb-0 page-title">Orders</h2>
            </aside>
            {/* <form className="form-inline  mr-auto searchform">
              <input
                className="form-control mr-sm-2 border-0"
                type="search"
                style={{ background: "white" }}
                placeholder="Search"
                aria-label="Search"
              />
            </form> */}

            {/* <aside className="col-sm-2 add-sec">
                <button className="bttn" onClick={handleAddClick}>
                  Add
                </button>
              </aside> */}
          </div>
          <div className="row my-2">
            <div className="col-md-12">
              <div className="card shadow">
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Service Name</th>
                        <th>Priest</th>
                        <th>Temple</th>
                        <th>Booking Date</th>
                        <th>Order Value</th>
                        <th>Booking Status</th>
                        {/* <th>Actions</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {isLoading ? (
                        <tr>
                          <td rowSpan="10" colSpan="8">
                            <div className="text-center py-5">
                              <Spinner animation="border" />
                            </div>
                          </td>
                        </tr>
                      ) : (
                        data.data.map((p) => (
                          <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.user?.userName}</td>
                            <td> {p.serviceResponse?.name}</td>
                            <td> {p.priestResponse?.user?.userName}</td>
                            <td> {p.templeResponse?.user.userName}</td>
                            <td>
                              <DateOfBirth dob={p.bookingDate} />
                            </td>
                            <td> ${p.serviceResponse?.defaultPrice}</td>
                            <td> {p.bookingStatus}</td>

                            {/* <td className="actions">
                              <EditIcon onClick={handleEditClick(p.id)} />
                              <DeleteIcon onClick={handleDelete(p.id)} />
                            </td> */}
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
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
        <AddBookingModal
          handleSuccess={handleAddCertificationSuccess}
          handleClose={() => setShowAddModal(false)}
        />
      ) : null}
      {showEditModal ? (
        <EditBookingModal
          handleSuccess={handleUpdateCertificationSuccess}
          handleClose={() => setShowEditModal(false)}
          id={certificationId}
        />
      ) : null}
    </>
  );
};
