import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";

import { axiosInstance } from "../../axiosInstance";
import { DeleteIcon } from "../../components/DeleteIcon";
import { EditIcon } from "../../components/EditIcon";
import { Status } from "../../components/Status";
import { AddCommentModal } from "./AddComment";
import { EditCommentModal } from "./EditComment";
import { CustomPagination } from "../../components/CustomPagination";

const fetchComments = (pageIndex = 0, pageSize = 20, search) => {
  return axiosInstance
    .get(
      `/comments?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}`
    )
    .then((res) => res.data);
};

const deleteCertification = (id) => {
  return axiosInstance.delete(`/comments/${id}`);
};

export const Comments = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [search, setSearch] = useState("");

  const [commentId, setCommentId] = useState();
  const pageSize = 20;
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["comments", page, search],
    queryFn: () => fetchComments(page, pageSize, search),
    keepPreviousData: true,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCertification,
  });

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleAddCertificationSuccess = () => {
    setShowAddModal(false);
    refetch();
  };

  const handleUpdateCertificationSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: ["comment-details", commentId],
    });
    setShowEditModal(false);
    refetch();
  };

  const handleEditClick = (id) => () => {
    setCommentId(id);
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
          <p>Can not delete comment</p>
        </Alert>
      ) : null}
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row heading-add">
            <aside className="col-sm-10">
              <h2 className="mb-0 page-title">Comments</h2>
            </aside>
            {/* <form className="form-inline  mr-auto searchform">
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="form-control mr-sm-2 border-0"
                type="search"
                style={{ background: "white" }}
                placeholder="Search"
                aria-label="Search"
              />
            </form> */}
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
                        <th>Comment Text</th>
                        <th>Comment On</th>
                        <th>Comment By</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {isLoading ? (
                        <tr>
                          <td rowSpan="10" colSpan="5">
                            <div className="text-center py-5">
                              <Spinner animation="border" />
                            </div>
                          </td>
                        </tr>
                      ) : (
                        data.data.map((p) => (
                          <tr key={p.id}>
                            <td>{p.name}</td>
                            <td> {p.priestCreatedOn}</td>
                            <td> {p.commentedByName}</td>
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
        <AddCommentModal
          handleSuccess={handleAddCertificationSuccess}
          handleClose={() => setShowAddModal(false)}
        />
      ) : null}
      {showEditModal ? (
        <EditCommentModal
          handleSuccess={handleUpdateCertificationSuccess}
          handleClose={() => setShowEditModal(false)}
          id={commentId}
        />
      ) : null}
    </>
  );
};
