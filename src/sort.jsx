export default function Sort({setSortType}){
    return(
        <div>
            <nav className="navbar bg-body-tertiary">
            <form className="container-fluid justify-content-start">
                <a class="navbar-brand">Sort : </a>
                <button className="btn btn-sm btn-outline-secondary me-2" type="button" onClick={() => setSortType("time")}>Time</button>
                <button className="btn btn-sm btn-outline-secondary me-2" type="button" onClick={() => setSortType("priority")}>Priority</button>
                <button className="btn btn-sm btn-outline-secondary me-2" type="button" onClick={() => setSortType("score")}>Score</button>
            </form>
            </nav>
        </div>
    )
}