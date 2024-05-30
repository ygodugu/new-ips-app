import { useFormik } from "formik";
import { object, string } from "yup";

let qualificationSchema = object({
  name: string().required("Name is required"),
});

export const QualificationForm = ({ onSubmit, initialValues }) => {
  const handleSubmit = (values, { validateForm }) => {
    validateForm(values).then((res) => {
      if (values.status) {
        onSubmit({ ...values, status: parseInt(values.status) });
      } else {
        onSubmit(values);
      }
    });
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: qualificationSchema,
    validateOnBlur: true,
    validateOnChange: false,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <aside className="col-md-6">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Name"
            />
            <div className="invalid-feedback">{formik.errors.name}</div>
          </div>
        </aside>

        <aside className="col-md-12">
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Description"
            />
          </div>
        </aside>
      </div>
      <div className="modal-footer d-flex justify-content-end">
        <button type="submit" className="btn mb-2 btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};
