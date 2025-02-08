import { MagnifyingGlass } from 'react-loader-spinner'
import s from "./Loader.module.css"

const Loader = () => {
    return (<div className={s.loader} >
        <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#2258d8c0"                              // змінити колір лупи
            color="#e8e40cf6"
        />
    </div>)

}

export default Loader;

