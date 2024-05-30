import { useMutation, useQuery } from "@tanstack/react-query"
import Modal from 'react-bootstrap/Modal'
import { axiosInstance } from "../../axiosInstance"
import { CommentForm } from "./CommentForm"

const updateComment = (payload) => {
    return axiosInstance.put(`/comments/${payload.id}`, payload)
}

const getCommentDetails = (id) => {
    return axiosInstance.get(`/comments/${id}`).then(res => res.data)
}


export const EditCommentModal = ({ handleSuccess, handleClose, id }) => {

    const {
        data: commentDetails,
    } = useQuery({
        queryKey: ['comment-details', id],
        queryFn: () => getCommentDetails(id),
    })

    const updateCommentMutation = useMutation({
        mutationFn: updateComment
    })


    const handleUpdateComment = ({ priest, ...rest }) => {
        const priestId = priest[0].id
        updateCommentMutation.mutate({ ...rest, id, priestId }, {
            onSuccess: handleSuccess
        })
    }

    return (
        <>
            {commentDetails && <Modal show={true} onHide={handleClose} size="lg">
                <Modal.Header closeButton={false}>
                    <Modal.Title>Edit Comment</Modal.Title>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <CommentForm initialValues={commentDetails} onSubmit={handleUpdateComment} />
                </Modal.Body>
            </Modal>}
        </>
    );
}