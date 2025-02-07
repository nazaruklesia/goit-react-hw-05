import { Field, Form, Formik } from "formik"
import s from "./SearchBar.module.css"


const SearchBar = ({ handleChandeQuery, query }) => {

    const onSubmit = values => {
        handleChandeQuery(values.query)
    }

    const initialValues = {
        query,

    };
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} >
                <Form className={s.form}>
                    <Field name='query' placeholder="Search..." />
                    <button className={s.btn} type="submit">Search</button>
                </Form>
            </Formik>
        </div>
    )
}
export default SearchBar;