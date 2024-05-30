import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { PriestForm } from "./PriestForm";

const addPriest = (payload) => {
  return axiosInstance.post(`/priests`, payload);
};

export const AddPriesteModal = ({ handleSuccess, handleClose }) => {
  const addPriestMutation = useMutation({
    mutationFn: addPriest,
  });
  const initialValues = {
    name: "",
    description: "",
    status: "",
  };

  const savePriest = (values) => {
    console.log(values);
    addPriestMutation.mutate(values, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Priest</Modal.Title>
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
        <PriestForm initialValues={initialValues} handleSubmit={savePriest} />
      </Modal.Body>
    </Modal>
  );
};
