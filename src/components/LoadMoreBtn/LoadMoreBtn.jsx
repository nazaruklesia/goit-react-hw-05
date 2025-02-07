import s from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ onClick, disabled }) => {
    return <button onClick={onClick} disabled={disabled} className={s.button}>
        Load more
    </button>
}

export default LoadMoreBtn;