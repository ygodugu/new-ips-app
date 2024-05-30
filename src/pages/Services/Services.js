import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";
import { DeleteIcon } from "../../components/DeleteIcon";
import { EditIcon } from "../../components/EditIcon";
import { Status } from "../../components/Status";
import { AddServiceModal } from "./AddService";
import { EditServiceModal } from "./EditService";
import Spinner from "react-bootstrap/Spinner";

const fetchServices = (pageIndex = 0, pageSize = 20) => {
  return axiosInstance
    .get(`/services?pageIndex=${pageIndex}&pageSize=${pageSize}`)
    .then((res) => res.data);
};

const deleteService = (id) => {
  return axiosInstance.delete(`/services/${id}`);
};

export const Services = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showError, setShowError] = useState(false);

  const [serviceId, setServiceId] = useState();
  const pageSize = 20;
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["services", page],
    queryFn: () => fetchServices(page),
    keepPreviousData: true,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteService,
  });

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleAddCertificationSuccess = () => {
    setShowAddModal(false);
    refetch();
  };

  const handleUpdateCertificationSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["service-details", serviceId] });

    setShowEditModal(false);
    refetch();
  };

  const handleEditClick = (id) => () => {
    setServiceId(id);
    setShowEditModal(true);
  };

  const handleDelete = (id) => () => {
    deleteMutation.mutate(id, {
      onSuccess: refetch,
      onError(error) {
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 3000);
      },
    });
  };

  return (
    <>
      {showError ? (
        <Alert variant="danger" onClose={() => showError(false)}>
          <Alert.Heading>Server Error!</Alert.Heading>
          <p>Can not delete service</p>
        </Alert>
      ) : null}
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row heading-add">
            <aside className="col-sm-10">
              <h2 className="mb-0 page-title">Services</h2>
            </aside>
            <aside className="col-sm-2 add-sec">
              <button className="bttn" onClick={handleAddClick}>
                Add
              </button>
            </aside>
          </div>
          <div className="row my-2">
            <div className="col-md-12">
              <div className="card shadow">
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Short Description</th>
                        <th>Min Price</th>
                        <th>Max Price</th>
                        <th>Default Price</th>
                        <th>Handle Slug</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {isLoading ? (
                        <tr>
                          <td rowSpan="10" colSpan="9">
                            <div className="text-center py-5">
                              <Spinner animation="border" />
                            </div>
                          </td>
                        </tr>
                      ) : (
                        data.data.map((p) => (
                          <tr key={p.id}>
                            <td>{p.name}</td>
                            <td> {p.longDescription}</td>
                            <td> {p.shortDescription}</td>
                            <td> {p.minPrice}</td>
                            <td> {p.maxPrice}</td>
                            <td> {p.defaultPrice}</td>
                            <td> {p.handleSlug}</td>
                            <td>
                              <Status code={p.status} />
                            </td>
                            <td className="actions">
                              <EditIcon onClick={handleEditClick(p.id)} />
                              <DeleteIcon onClick={handleDelete(p.id)} />
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                  {!isLoading ? (
                    <CustomPagination
                      page={page}
                      pageSize={pageSize}
                      data={data}
                      setPage={setPage}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAddModal ? (
        <AddServiceModal
          handleSuccess={handleAddCertificationSuccess}
          handleClose={() => setShowAddModal(false)}
        />
      ) : null}
      {showEditModal ? (
        <EditServiceModal
          handleSuccess={handleUpdateCertificationSuccess}
          handleClose={() => setShowEditModal(false)}
          id={serviceId}
        />
      ) : null}
    </>
  );
};
