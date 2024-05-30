import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { object, string } from "yup";
import { axiosInstance } from "../../axiosInstance";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const urlRegex =
  /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

let templeSchema = object({
  name: string().required("Name is required"),
  userId: string().required("Select User"),
  cityId: string().required("Select City"),
  website: string().nullable().matches(urlRegex, "Invalid website"),
  facebookUrl: string().nullable().matches(urlRegex, "Invalid facebook url"),
  twitterUrl: string().nullable().matches(urlRegex, "Invalid twitter url"),
});

export const TempleForm = ({ onSubmit, initialValues }) => {
  const [cities, setCities] = useState([]);
  const [templeUsers, setTempleUsers] = useState([]);

  const handleSubmit = (values, { validateForm }) => {
    validateForm(values).then((res) => {
      onSubmit(values);
    });
  };

  useEffect(() => {
    axiosInstance
      .get("/cities/name")
      .then((res) =>
        res.data.map((p) => ({
          id: p.id,
          label: `${p.name?.trim()} (${p.state?.name} - ${
            p.state?.country?.name
          })`,
          state: {
            id: p.stateId,
            label: p.state?.name,
            country: {
              id: p.state?.countryId,
              label: p.state?.country?.name,
            },
          },
        }))
      )
      .then((data) => {
        setCities(data);
        if (initialValues.cityId) {
          formik.setFieldValue(
            "city",
            data.filter((x) => x.id === initialValues.cityId)
          );
          formik.setFieldValue("state", [
            data.find((x) => x.id === initialValues.cityId)?.state,
          ]);
        }
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/users/email?userType=TEMPLE")
      .then((res) =>
        res.data.map((u) => ({
          id: u.id,
          label: [u.firstName, u.middleName, u.lastName]
            .filter((x) => x)
            .join(" "),
        }))
      )
      .then((data) => {
        setTempleUsers(data);
        if (initialValues.userId) {
          formik.setFieldValue(
            "user",
            data.filter((x) => x.id == initialValues.userId)
          );
        }
      });
  }, []);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: templeSchema,
    validateOnBlur: true,
    validateOnChange: false,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="cityId">Temple User *</label>
            <Typeahead
              selected={formik.values.user}
              id="userId"
              options={templeUsers}
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
            <label htmlFor="name">Temple Name *</label>
            <input
              type="text"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="form-control form-control-lg"
              placeholder="Enter Temple Name"
            />
            <div className="invalid-feedback">{formik.errors.name}</div>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="boardName">Temple Board</label>
            <input
              type="text"
              id="boardName"
              value={formik.values.boardName}
              onChange={formik.handleChange}
              className="form-control form-control-lg"
              placeholder="Enter Temple Board"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="legalIdentificationNumber">
              Legal Identification Number
            </label>
            <input
              type="text"
              id="legalIdentificationNumber"
              value={formik.values.legalIdentificationNumber}
              onChange={formik.handleChange}
              className="form-control form-control-lg"
              placeholder="Enter Legal Identification Number"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="templeType">Temple Type</label>
            <select
              id="templeType"
              className="form-control select2"
              onChange={formik.handleChange}
              value={formik.values.templeType}
            >
              <option value="">Select Temple Type</option>
              <option value="ARYAN">Aryan</option>
              <option value="DRAVIDIAN">Dravidian</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="street">Address</label>
            <input
              type="text"
              id="street"
              value={formik.values.street}
              onChange={formik.handleChange}
              className="form-control form-control-lg"
              placeholder="Enter Address"
            />
            <div className="invalid-feedback">{formik.errors.street}</div>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="cityId">City *</label>
            <Typeahead
              selected={formik.values.city}
              id="cityId"
              options={cities}
              onChange={(value) => {
                if (value && value.length > 0) {
                  formik.setFieldValue("city", value);
                  formik.setFieldValue("state", [value[0].state]);
                  formik.setFieldValue("cityId", value[0].id);
                  formik.setFieldValue("stateId", value[0].state.id);
                  formik.setFieldValue(
                    "countryId",
                    value[0].state?.country?.id
                  );
                } else {
                  formik.setFieldValue("city", []);
                  formik.setFieldValue("state", []);
                  formik.setFieldValue("cityId", "");
                  formik.setFieldValue("stateId", "");
                  formik.setFieldValue("countryId", "");
                }
              }}
              placeholder="Choose a city..."
            />
            <div className="invalid-feedback">{formik.errors.cityId}</div>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="inputState">State</label>
            <Typeahead
              selected={formik.values.state}
              id="stateId"
              disabled
              options={formik.values.state}
              placeholder="Choose a state..."
            />
          </div>
        </aside>

        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="phone">Mobile</label>
            <input
              type="text"
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              className="form-control form-control-lg"
              placeholder="Enter Mobile"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="inputCurrentLocation">Current Location</label>
            <input
              type="text"
              id="inputCurrentLocation"
              className="form-control form-control-lg"
              placeholder="Enter Current Location"
            />
          </div>
        </aside>

        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="instagramHandle">Instagram Handle</label>
            <input
              type="text"
              id="instagramHandle"
              value={formik.values.instagramHandle}
              onChange={formik.handleChange}
              className="form-control form-control-lg"
              placeholder="Enter Instagram Handle"
            />
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="yearOfEstablishment">Year Of Establishment</label>
            <DatePicker
              selected={
                formik.values.yearOfEstablishment
                  ? new Date(formik.values.yearOfEstablishment)
                  : null
              }
              onChange={(e) => {
                formik.setFieldValue("yearOfEstablishment", e);
                formik.setFieldTouched("yearOfEstablishment");
              }}
              className="form-control"
            />
          </div>
        </aside>
        <aside className="col-md-12">
          <div className="form-group">
            <label htmlFor="descriptionOfHistory">Description or History</label>
            <textarea
              id="descriptionOfHistory"
              value={formik.values.descriptionOfHistory}
              className="form-control form-control-lg"
              placeholder="Enter Designation"
              onChange={formik.handleChange}
            ></textarea>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              value={formik.values.website}
              onChange={formik.handleChange}
              className="form-control form-control-lg"
              placeholder="Enter Website"
            />
            <div className="invalid-feedback">{formik.errors.website}</div>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="facebookUrl">Facebook URL</label>
            <input
              type="text"
              id="facebookUrl"
              value={formik.values.facebookUrl}
              className="form-control form-control-lg"
              placeholder="Enter Facebook URL"
            />
            <div className="invalid-feedback">{formik.errors.facebookUrl}</div>
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="form-group">
            <label htmlFor="twitterUrl">Twitter URL</label>
            <input
              type="text"
              id="twitterUrl"
              value={formik.values.twitterUrl}
              onChange={formik.handleChange}
              className="form-control form-control-lg"
              placeholder="Enter Twitter URL"
            />
            <div className="invalid-feedback">{formik.errors.twitterUrl}</div>
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
