import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { BookingForm } from "./BookingForm";

const addBooking = (payload) => {
  return axiosInstance.post(`/bookings`, payload);
};

export const AddBookingModal = ({ handleSuccess, handleClose }) => {
  const addBookingMutation = useMutation({
    mutationFn: addBooking,
  });
  const initialValues = {
    services: [],
    priests: [],
    bookingDate: "",
    temples: [],
  };

  const saveBooking = (values) => {
    const { temples, services, priests, ...rest } = values;
    addBookingMutation.mutate(rest, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Order</Modal.Title>
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
        <BookingForm initialValues={initialValues} onSubmit={saveBooking} />
      </Modal.Body>
    </Modal>
  );
};
