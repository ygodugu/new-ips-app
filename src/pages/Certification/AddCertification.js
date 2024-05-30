import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { CertificationForm } from "./CertificationForm";

const addCertification = (payload) => {
  return axiosInstance.post(`/certifications`, payload);
};

export const AddCertificationModal = ({ handleSuccess, handleClose }) => {
  const addCertificationMutation = useMutation({
    mutationFn: addCertification,
  });
  const initialValues = {
    name: "",
    description: "",
    status: "",
  };

  const saveCertification = (values) => {
    addCertificationMutation.mutate(values, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Certification</Modal.Title>
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
        <CertificationForm
          initialValues={initialValues}
          onSubmit={saveCertification}
        />
      </Modal.Body>
    </Modal>
  );
};
