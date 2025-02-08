import s from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ onClick, disabled }) => {
    return <div className={s.loadMore}>
        <button onClick={onClick} disabled={disabled} >
            Load more
        </button>
    </div>
}

export default LoadMoreBtn;