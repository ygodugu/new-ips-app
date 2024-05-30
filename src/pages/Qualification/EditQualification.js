import { useMutation, useQuery } from "@tanstack/react-query"
import Modal from 'react-bootstrap/Modal'
import { axiosInstance } from "../../axiosInstance"
import { QualificationForm } from "./QualificationForm"

const updateQualification = (payload) => {
    return axiosInstance.put(`/qualifications/${payload.id}`, payload)
}

const getQualificationDetails = (id) => {
    return axiosInstance.get(`/qualifications/${id}`).then(res => res.data)
}


export const EditQualificationModal = ({ handleSuccess, handleClose, id }) => {

    const {
        data: qualificationDetails,
        error
    } = useQuery({
        queryKey: ['qualification-details', id],
        queryFn: () => getQualificationDetails(id),
    })


    const updateQualificationMutation = useMutation({
        mutationFn: updateQualification
    })


    const handleUpdateQualification = (values) => {
        updateQualificationMutation.mutate({ ...values, id }, {
            onSuccess: handleSuccess
        })
    }

    return (
        <>
            {qualificationDetails && <Modal show={true} onHide={handleClose} size="lg">
                <Modal.Header closeButton={false}>
                    <Modal.Title>Edit Educational Qualification</Modal.Title>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <QualificationForm initialValues={qualificationDetails} onSubmit={handleUpdateQualification} />
                </Modal.Body>
            </Modal>}
        </>
    );
}