import { useFormik } from "formik";
import { object, string } from "yup";

let grocerySchema = object({
  name: string().required("Name is required"),
});

export const GroceryForm = ({ onSubmit, initialValues }) => {
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
    validationSchema: grocerySchema,
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
            <label htmlFor="quantityType">Quantity Type</label>
            <select
              id="quantityType"
              className="form-control select2"
              value={formik.values.quantityType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select Quantity Type</option>
              <option value="Grams">Gms</option>
              <option value="MilliLitres">ML</option>
              <option value="Count">Count</option>
            </select>
            <div className="invalid-feedback">{formik.errors.name}</div>
          </div>
        </aside>
        <aside className="col-md-6">
          <div className="form-group">
            <label htmlFor="quantity"> Quantity</label>
            <input
              type="number"
              id="quantity"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Quantity"
            />
            <div className="invalid-feedback">{formik.errors.quantity}</div>
          </div>
        </aside>
        <aside className="col-md-6">
          <div className="form-group">
            <label htmlFor="volume">Volume</label>
            <input
              type="text"
              id="volume"
              value={formik.values.volume}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Volume"
            />
            <div className="invalid-feedback">{formik.errors.volume}</div>
          </div>
        </aside>
        <aside className="col-md-6">
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Price"
            />
            <div className="invalid-feedback">{formik.errors.price}</div>
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
            <div className="invalid-feedback">{formik.errors.description}</div>
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
