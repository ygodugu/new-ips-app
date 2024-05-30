import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { ServiceForm } from "./ServiceForm";

const addService = (payload) => {
  return axiosInstance.post(`/services`, payload);
};

export const AddServiceModal = ({ handleSuccess, handleClose }) => {
  const addServiceMutation = useMutation({
    mutationFn: addService,
  });
  const initialValues = {
    name: "",
    description: "",
    status: "",
  };

  const saveService = (values) => {
    addServiceMutation.mutate(values, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Service</Modal.Title>
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
        <ServiceForm initialValues={initialValues} onSubmit={saveService} />
      </Modal.Body>
    </Modal>
  );
};
