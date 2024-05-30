import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { CertificationForm } from "./CertificationForm";

const updateCertification = (payload) => {
  return axiosInstance.put(`/certifications/${payload.id}`, payload);
};

const getCertificationDetails = (id) => {
  return axiosInstance.get(`/certifications/${id}`).then((res) => res.data);
};

export const EditCertificationModal = ({ handleSuccess, handleClose, id }) => {
  const { data: certificationDetails } = useQuery({
    queryKey: ["certification-details", id],
    queryFn: () => getCertificationDetails(id),
  });

  const updateCertificationMutation = useMutation({
    mutationFn: updateCertification,
  });

  const handleUpdateCertification = (values) => {
    updateCertificationMutation.mutate(
      { ...values, id },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <>
      {certificationDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit Certification</Modal.Title>
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
              initialValues={certificationDetails}
              onSubmit={handleUpdateCertification}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
