import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { BookingForm } from "./BookingForm";

const updateBooking = (payload) => {
  return axiosInstance.put(`/bookings/${payload.id}`, payload);
};

const getBookingDetails = (id) => {
  return axiosInstance.get(`/bookings/${id}`).then((res) => res.data);
};

export const EditBookingModal = ({ handleSuccess, handleClose, id }) => {
  const { data: bookingDetails } = useQuery({
    queryKey: ["bookinng-details", id],
    queryFn: () => getBookingDetails(id),
  });

  const updateBookingMutation = useMutation({
    mutationFn: updateBooking,
  });

  const handleUpdateBooking = (values) => {
    updateBookingMutation.mutate(
      { ...values, id },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <>
      {bookingDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit Booking</Modal.Title>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </Modal.Header>
          <Modal.Body>
            <BookingForm
              initialValues={bookingDetails}
              onSubmit={handleUpdateBooking}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
