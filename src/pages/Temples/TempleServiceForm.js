import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { object, string } from "yup";
import { axiosInstance } from "../../axiosInstance";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

let templeServiceSchema = object({
  servicesId: string().required("Select Service"),
});

export const TempleServiceForm = ({ onSubmit, initialValues }) => {
  const [services, setServices] = useState([]);
  const [priests, setPriests] = useState([]);
  const [temples, setTemples] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/services/name")
      .then((res) =>
        res.data.map((p) => ({
          id: p.id,
          label: `${p.name} ($${p.defaultPrice})`,
        }))
      )
      .then((data) => {
        setServices(data);
        if (initialValues.servicesId) {
          formik.setFieldValue(
            "services",
            data.filter((x) => x.id === initialValues.servicesId)
          );
        }
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/priests/designation")
      .then((res) =>
        res.data.map((p) => ({
          id: p.id,
          label: p?.user?.userName,
        }))
      )
      .then((data) => {
        setPriests(data);
        if (initialValues.priestId) {
          formik.setFieldValue(
            "priests",
            data.filter((x) => x.id === initialValues.priestId)
          );
        }
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/temples/name")
      .then((res) =>
        res.data.map((p) => ({
          id: p.id,
          label: p.name,
        }))
      )
      .then((data) => {
        setTemples(data);
        if (initialValues.templeId) {
          formik.setFieldValue(
            "temples",
            data.filter((x) => x.id === initialValues.templeId)
          );
        }
      });
  }, []);

  const handleSubmit = (values, { validateForm }) => {
    validateForm(values).then((res) => {
      onSubmit(values);
    });
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: templeServiceSchema,
    validateOnBlur: true,
    validateOnChange: false,
  });
  console.log(formik.errors);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        {/* <aside className="col-md-6">
          <div className="form-group">
            <label htmlFor="cityId">Temple</label>
            <Typeahead
              selected={formik.values.temples}
              id="templeId"
              options={temples}
              onChange={(value) => {
                if (value?.length > 0) {
                  formik.setFieldValue("templeId", value[0].id);
                  formik.setFieldValue("temples", value);
                } else {
                  formik.setFieldValue("templeId", "");
                  formik.setFieldValue("temples", []);
                }
              }}
              placeholder="Choose a temple..."
            />
          </div>
        </aside> */}
        <aside className="col-md-6">
          <div className="form-group">
            <label htmlFor="cityId">Service</label>
            <Typeahead
              selected={formik.values.services}
              id="servicesId"
              options={services}
              onChange={(value) => {
                if (value?.length > 0) {
                  formik.setFieldValue("servicesId", value[0].id);
                  formik.setFieldValue("services", value);
                } else {
                  formik.setFieldValue("servicesId", "");
                  formik.setFieldValue("services", []);
                }
              }}
              placeholder="Choose a service..."
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
