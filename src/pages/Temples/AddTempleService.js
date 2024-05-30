import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { TempleServiceForm } from "./TempleServiceForm";

const addTempleService = (payload) => {
  return axiosInstance.post(`/temple-services`, payload);
};

export const AddTempleServiceModal = ({
  handleSuccess,
  handleClose,
  templeId,
}) => {
  const addTempleServiceMutation = useMutation({
    mutationFn: addTempleService,
  });
  const initialValues = {
    services: [],
    priests: [],
    bookingDate: "",
    temples: [],
  };

  const saveTempleService = (values) => {
    const { temples, services, priests, ...rest } = values;
    addTempleServiceMutation.mutate(
      { ...rest, templeId: +templeId },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Temple Service</Modal.Title>
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
        <TempleServiceForm
          initialValues={initialValues}
          onSubmit={saveTempleService}
        />
      </Modal.Body>
    </Modal>
  );
};
