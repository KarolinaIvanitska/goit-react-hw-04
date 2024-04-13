import css from "./SearchBar.module.css";
import { Formik, Form, Field } from "formik";

const SearchBar = ({ setQuery }) => {
  const handleSubmit = (data, options) => {
    console.log(data);
    setQuery(data.query);
    options.resetForm();
  };
  const initialValues = { query: "" };
  return (
    <>
      <header>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={css.form}>
            <Field
              className={css.field}
              type="text"
              name="query"
              placeholder="Search..."
            />
            <button className={css.btn} type="submit">
              Search
            </button>
          </Form>
        </Formik>
      </header>
    </>
  );
};

export default SearchBar;
