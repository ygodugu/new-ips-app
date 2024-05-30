import { useMutation } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../axiosInstance";
import { CommentForm } from "./CommentForm";

const addComment = (payload) => {
  return axiosInstance.post(`/comments`, payload);
};

export const AddCommentModal = ({ handleSuccess, handleClose }) => {
  const addCommentMutation = useMutation({
    mutationFn: addComment,
  });
  const initialValues = {
    name: "",
    description: "",
    status: "",
  };

  const saveComment = ({ priest, ...rest }) => {
    const priestId = priest[0].id;
    addCommentMutation.mutate(
      { ...rest, priestId },
      {
        onSuccess: handleSuccess,
      }
    );
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Header closeButton={false}>
        <Modal.Title>New Comment</Modal.Title>
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
        <CommentForm initialValues={initialValues} onSubmit={saveComment} />
      </Modal.Body>
    </Modal>
  );
};
