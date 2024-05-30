import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { PriestForm } from "./PriestForm";

const updatePriest = (payload) => {
  return axiosInstance.put(`/priests/${payload.id}`, payload);
};

const getPriestDetails = (id) => {
  return axiosInstance.get(`/priests/${id}`).then((res) => res.data);
};

export const EditPriestModal = ({ handleSuccess, handleClose, id }) => {
  const { data: priestDetails, error } = useQuery({
    queryKey: ["priest-details", id],
    queryFn: () => getPriestDetails(id),
  });

  const updatePriestMutation = useMutation({
    mutationFn: updatePriest,
  });

  const handleUpdatePriest = (values) => {
    updatePriestMutation.mutate(
      { ...values, id },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <>
      {priestDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit Priest</Modal.Title>
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
            <PriestForm
              initialValues={{ ...priestDetails, user: [] }}
              handleSubmit={handleUpdatePriest}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
