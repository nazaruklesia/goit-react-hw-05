import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";

const SearchBar = ({ handleChandeQuery, query }) => {
    return (
        <Formik
            initialValues={{ query }}
            enableReinitialize
            onSubmit={(values, { setSubmitting }) => {
                handleChandeQuery(values.query.trim());
                setSubmitting(false);
            }}
        >
            {({ values, handleChange }) => (
                <Form className={s.form}>
                    <Field
                        name="query"
                        placeholder="Search..."
                        className={s.input}
                        value={values.query}
                        onChange={handleChange}
                    />
                    <button className={s.btn} type="submit">Search</button>
                </Form>
            )}
        </Formik>
    );
};

export default SearchBar;
