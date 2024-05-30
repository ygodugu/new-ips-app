import { useMutation, useQuery } from "@tanstack/react-query"
import Modal from 'react-bootstrap/Modal'
import { axiosInstance } from "../../axiosInstance"
import { GroceryForm } from "./GroceryForm"

const updateGrocery = (payload) => {
    return axiosInstance.put(`/groceries/${payload.id}`, payload)
}

const getGroceryDetails = (id) => {
    return axiosInstance.get(`/groceries/${id}`).then(res => res.data)
}

export const EditGroceryModal = ({ handleSuccess, handleClose, id }) => {

    const {
        data: groceryDetails,
        error
    } = useQuery({
        queryKey: ['grocery-details', id],
        queryFn: () => getGroceryDetails(id),
    })


    const updateQualificationMutation = useMutation({
        mutationFn: updateGrocery
    })


    const handleUpdateGrocery = (values) => {
        updateQualificationMutation.mutate({ ...values, id }, {
            onSuccess: handleSuccess
        })
    }

    return (
        <>
            {groceryDetails && <Modal show={true} onHide={handleClose} size="lg">
                <Modal.Header closeButton={false}>
                    <Modal.Title>Edit Pooja Grocery</Modal.Title>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <GroceryForm initialValues={groceryDetails} onSubmit={handleUpdateGrocery} />
                </Modal.Body>
            </Modal>}
        </>
    );
}