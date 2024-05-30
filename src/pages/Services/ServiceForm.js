import { useFormik } from "formik";
import { object, string } from "yup";

let certificationSchema = object({
  name: string().required("Name is required"),
});

export const ServiceForm = ({ onSubmit, initialValues }) => {
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
    validationSchema: certificationSchema,
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
        <aside className="col-md-6">
          <div className="form-group">
            <label htmlFor="minPrice">Min Price</label>
            <input
              type="number"
              id="minPrice"
              value={formik.values.minPrice}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Min Price"
            />
          </div>
        </aside>
        <aside className="col-md-6">
          <div className="form-group">
            <label htmlFor="maxPrice">Max Price</label>
            <input
              type="number"
              id="maxPrice"
              value={formik.values.maxPrice}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Max Price"
            />
          </div>
        </aside>

        <aside className="col-md-6">
          <div className="form-group">
            <label htmlFor="defaultPrice">Default Price</label>
            <input
              type="number"
              id="defaultPrice"
              value={formik.values.defaultPrice}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Default Price"
            />
          </div>
        </aside>
        <aside className="col-md-6">
          <div className="form-group">
            <label htmlFor="handleSlug">Handle Slug</label>
            <input
              type="text"
              id="handleSlug"
              value={formik.values.handleSlug}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Handle Slug"
            />
          </div>
        </aside>

        <aside className="col-md-12">
          <div className="form-group">
            <label htmlFor="longDescription">Description</label>
            <textarea
              id="longDescription"
              value={formik.values.longDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Description"
            />
          </div>
        </aside>
        <aside className="col-md-12">
          <div className="form-group">
            <label htmlFor="shortDescription">Short Description</label>
            <textarea
              id="shortDescription"
              value={formik.values.shortDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Short Description"
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
