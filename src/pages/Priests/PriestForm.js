import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { object, string } from "yup";
import { axiosInstance } from "../../axiosInstance";
import { Typeahead } from "react-bootstrap-typeahead";

let priestSchema = object({
  //   name: string().required("Name is required"),
  userId: string().required("Select User"),
  //   cityId: string().required("Select City"),
  //   website: string().nullable().matches(urlRegex, "Invalid website"),
  //   facebookUrl: string().nullable().matches(urlRegex, "Invalid facebook url"),
  //   twitterUrl: string().nullable().matches(urlRegex, "Invalid twitter url"),
});
export const PriestForm = ({ initialValues, handleSubmit }) => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: priestSchema,
    validateOnBlur: true,
    validateOnChange: false,
  });

  console.log(formik.values);


  const [priestUsers, setPriestUsers] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/users/email?userType=PRIEST")
      .then((res) =>
        res.data.map((u) => ({
          id: u.id,
          label: [u.firstName, u.middleName, u.lastName]
            .filter((x) => x)
            .join(" "),
        }))
      )
      .then((data) => {
        setPriestUsers(data);
        if (initialValues.userId) {
          formik.setFieldValue(
            "user",
            data.filter((x) => x.id == initialValues.userId)
          );
        }
      });
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="cityId">Priest User *</label>
            <Typeahead
              selected={formik.values.user}
              id="userId"
              options={priestUsers}
              onChange={(value) => {
                if (value?.length > 0) {
                  formik.setFieldValue("userId", value[0].id);
                  formik.setFieldValue("user", value);
                } else {
                  formik.setFieldValue("userId", "");
                  formik.setFieldValue("user", []);
                }
              }}
              placeholder="Choose a user..."
            />
            <div className="invalid-feedback">{formik.errors.userId}</div>
          </div>
        </aside>

        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="designation">Designation</label>
            <input
              type="text"
              id="designation"
              value={formik.values.designation}
              onChange={formik.handleChange}
              className="form-control form-control-lg"
              placeholder="Enter Designation"
            />
            <div className="invalid-feedback">{formik.errors.designation}</div>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="yearsOfExperience">Years of Exp</label>
            <input
              type="number"
              id="yearsOfExperience"
              value={formik.values.yearsOfExperience}
              onChange={formik.handleChange}
              className="form-control form-control-lg"
              placeholder="Enter Years of Exp"
            />
            <div className="invalid-feedback">
              {formik.errors.yearsOfExperience}
            </div>
          </div>
        </aside>
        <aside className="col-md-12">
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              value={formik.values.bio}
              className="form-control form-control-lg"
              placeholder="Enter Bio"
              onChange={formik.handleChange}
            ></textarea>
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
