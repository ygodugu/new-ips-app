import { useMutation, useQuery } from "@tanstack/react-query"
import Modal from 'react-bootstrap/Modal'
import { axiosInstance } from "../../axiosInstance"
import { TempleForm } from "./TempleForm"

const updateTemple = (payload) => {
    return axiosInstance.put(`/temples/${payload.id}`, payload)
}

const getTempleDetails = (id) => {
    return axiosInstance.get(`/temples/${id}`).then(res => res.data)
}


export const EditTempleModal = ({ handleSuccess, handleClose, id }) => {
    const {
        data: templeDetails,
        error
    } = useQuery({
        queryKey: ['temple-details', id],
        queryFn: () => getTempleDetails(id),
    })


    const updateTempleMutation = useMutation({
        mutationFn: updateTemple
    })


    const handleUpdateTemple = (values) => {
        updateTempleMutation.mutate({ ...values, id }, {
            onSuccess: handleSuccess
        })
    }

    return (
        <>
            {templeDetails && <Modal show={true} onHide={handleClose} size="lg">
                <Modal.Header closeButton={false}>
                    <Modal.Title>Edit Temple</Modal.Title>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <TempleForm initialValues={{...templeDetails, user: []}} onSubmit={handleUpdateTemple} />
                </Modal.Body>
            </Modal>}
        </>
    );
}