import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { GroceryForm } from "./GroceryForm";

const addGrocery = (payload) => {
  return axiosInstance.post(`/groceries`, payload);
};

export const AddGroceryModal = ({ handleSuccess, handleClose }) => {
  const addGroceryMutation = useMutation({
    mutationFn: addGrocery,
  });
  const initialValues = {
    name: "",
    description: "",
    quantityType: "",
  };

  const saveGrocery = (values) => {
    addGroceryMutation.mutate(values, {
      onSuccess: handleSuccess,
    });
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Pooja Grocery</Modal.Title>
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
        <GroceryForm initialValues={initialValues} onSubmit={saveGrocery} />
      </Modal.Body>
    </Modal>
  );
};
