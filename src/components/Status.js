export const Status = (props) => {
    if (props.code === 0) {
        return (
            <span className="badge badge-pill badge-danger">InActive</span>
        )
    }
    if (props.code === 1) {
        return (
            <span className="badge badge-pill badge-success">Active</span>
        )
    }

    if (props.code === 2) {
        return (
            <span className="badge badge-pill badge-warning">Hold</span>
        )
    }
}