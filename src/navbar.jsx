export default function Navbar({setSearch, setStatus, setSource, resetFilters }){
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom px-4 navbar bg-body-tertiary fixed-top">
                <span className="navbar-brand fw-semibold"  style={{ cursor: "pointer" }} onClick={resetFilters}>Signal <span className="text-primary">Board</span></span>

                <div className="d-flex align-items-center gap-2 ms-auto">
                    <input className="navbar-input form-control form-control-sm" style={{width: "220px"}} placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
                    <select className="navbar-select form-select form-select-sm" style={{width: "140px"}} onChange={(e) => setStatus(e.target.value)}>
                        <option>All status</option>
                        <option>new</option>
                        <option>in-review</option>
                        <option>escalated</option>
                        <option>resolved</option>
                    </select>
                    <select className="navbar-select form-select form-select-sm" style={{width: "140px"}} onChange={(e) => setSource(e.target.value)}>
                        <option>All sources</option>
                        <option>ml-pipeline</option>
                        <option>auth-service</option>
                        <option>user-report</option>
                    </select>
                </div>
            </nav>
        </div>
    )
}