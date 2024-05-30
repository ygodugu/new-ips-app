import { useMutation, useQuery } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { ServiceForm } from "./ServiceForm";

const updateService = (payload) => {
  return axiosInstance.put(`/services/${payload.id}`, payload);
};

const getServiceDetails = (id) => {
  return axiosInstance.get(`/services/${id}`).then((res) => res.data);
};

export const EditServiceModal = ({ handleSuccess, handleClose, id }) => {
  const { data: serviceDetails } = useQuery({
    queryKey: ["service-details", id],
    queryFn: () => getServiceDetails(id),
  });

  const updateServiceMutation = useMutation({
    mutationFn: updateService,
  });

  const handleUpdateService = (values) => {
    updateServiceMutation.mutate(
      { ...values, id },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <>
      {serviceDetails && (
        <Modal show={true} onHide={handleClose} size="lg">
          <Modal.Header closeButton={false}>
            <Modal.Title>Edit Service</Modal.Title>
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
            <ServiceForm
              initialValues={serviceDetails}
              onSubmit={handleUpdateService}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
