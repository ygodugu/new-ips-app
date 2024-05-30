import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { QualificationForm } from "./QualificationForm";

const AddQualification = (payload) => {
  return axiosInstance.post(`/qualifications`, payload);
};

export const AddQualificationModal = ({ handleSuccess, handleClose }) => {
  const addQualificationMutation = useMutation({
    mutationFn: AddQualification,
  });
  const initialValues = {
    name: "",
    description: "",
    status: "",
  };

  const saveQualification = (values) => {
    addQualificationMutation.mutate(values, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Educational Qualification</Modal.Title>
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
        <QualificationForm
          initialValues={initialValues}
          onSubmit={saveQualification}
        />
      </Modal.Body>
    </Modal>
  );
};
