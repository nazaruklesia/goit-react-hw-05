import s from "./SearchBar.module.css"


const SearchBar = () => {
    return (
        <div> 


            {/* onSubmit={handleSabmit} */}
            <form  className={s.form} >
                <input className={s.input}
                    // onChange={handleChange}
                    // value={query}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie..."
                />
                
                <button className={s.btn} type="submit">Search</button>
            </form>
        </div>
    )
}
export default SearchBar;