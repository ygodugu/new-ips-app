import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { TempleForm } from "./TempleForm";

const addTemple = (payload) => {
  return axiosInstance.post(`/temples`, payload);
};

export const AddTempleModal = ({ handleSuccess, handleClose }) => {
  const addTempleMutation = useMutation({
    mutationFn: addTemple,
  });
  const initialValues = {
    name: "",
    description: "",
    status: "",
  };

  const saveTemple = (values) => {
    addTempleMutation.mutate(values, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Temple</Modal.Title>
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
        <TempleForm initialValues={initialValues} onSubmit={saveTemple} />
      </Modal.Body>
    </Modal>
  );
};
