import { useFormik } from "formik";
import { object, string, array } from "yup";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../axiosInstance";

let certificationSchema = object({
  name: string().required("Comment Text is required"),
  priest: array().min(1, "Select Priest").required("Select Priest"),
});

export const CommentForm = ({ onSubmit, initialValues }) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/priests/designation")
      .then((res) =>
        res.data.map((p) => ({
          id: p.id,
          label: `${p.user.firstName} ${p.user.middleName} ${p.user.lastName}`,
        }))
      )
      .then((data) => {
        setOptions(data);
        if (initialValues.priestId) {
          formik.setFieldValue(
            "priest",
            data.filter((x) => x.id === initialValues.priestId)
          );
        }
      });
  }, []);

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

  console.log(formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <aside className="col-md-6">
          <div className="form-group">
            <label htmlFor="name">Comment Text *</label>
            <input
              type="text"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control form-control-lg"
              placeholder="Enter Comment Text"
            />
            <div className="invalid-feedback">{formik.errors.name}</div>
          </div>
        </aside>

        <aside className="col-md-6">
          <div className="form-group">
            <label htmlFor="priestId">Comment On *</label>
            <Typeahead
              selected={formik.values.priest}
              id="priest"
              options={options}
              onChange={(value) => {
                formik.setFieldValue("priest", value);
              }}
              placeholder="Choose a priest..."
            />

            <div className="invalid-feedback">{formik.errors.priest}</div>
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
