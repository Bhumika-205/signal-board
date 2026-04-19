import { useState, useEffect } from "react";
import { items } from "./data";

export default function Card({ search, status, source, sortType}) {

    const [select, setSelect] = useState();

        useEffect(() => {
            const handleKey = (e) => {
                if (e.key === "Escape") setSelect(null);
            };
            window.addEventListener("keydown", handleKey);
            return () => window.removeEventListener("keydown", handleKey);
        }, []);

    const filtered = items
    .filter((item) => {
        const matchSearch =
            item.title.toLowerCase().includes((search || "").toLowerCase()) ||
            item.status.toLowerCase().includes((search || "").toLowerCase()) ||
            item.priority.toLowerCase().includes((search || "").toLowerCase());

        const matchStatus = status === "all" || item.status === status;
        const matchSource = source === "all" || item.source === source;

        return matchSearch && matchStatus && matchSource;
    })
    .sort((a, b) => {
        if (sortType === "score") return b.score - a.score;
        if (sortType === "time") return b.createdAt - a.createdAt;
        if (sortType === "priority") {
            const order = { critical: 4, high: 3, medium: 2, low: 1 };
            return order[b.priority] - order[a.priority];
        }
        return 0;
    });

    return(
        <div className="container mt-4">
                <div className="d-flex flex-wrap gap-3">
                    
                    {filtered.length === 0 && (
                        <div className="empty-state">
                            <p>No search found</p>
                            <small>Try adjusting the search or filters above.</small>
                        </div>
                    )}
                    {filtered.map((item) => (
                        <div key={item.id} className="card p-3 mb-3" style={{width: "22rem"}} onClick={() => setSelect(item)}>
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">Status: {item.status}</p>
                            <p className="card-text">Priority: {item.priority}</p>
                            <p className="card-text">Score: {item.score}</p>
                            <p>Created At: {new Date(item.createdAt).toLocaleString()}</p>
                        </div>
                    ))}
                </div>

                {select && (
                    <div className="modal d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content shadow-lg rounded-3">

                                <div className="modal-header">
                                <h5 className="modal-title">{select.title}</h5>
                                <button
                                    className="btn-close"
                                    onClick={() => setSelect(null)}
                                ></button>
                                </div>

                                <div className="modal-body">
                                <p><b>Status:</b> {select.status}</p>
                                <p><b>Priority:</b> {select.priority}</p>
                                <p><b>Score:</b> {select.score}</p>
                                <p><b>Source:</b> {select.source}</p>
                                <p><b>Owner:</b> {select.owner}</p>
                                <hr />
                                <p><b>Summary:</b></p>
                                <p>{select.summary}</p>
                                <p><strong>Tags:</strong></p>
                                    <div className="d-flex flex-wrap gap-2">
                                        {select.tags.map((tag, index) => (
                                        <span key={index} className="badge bg-secondary">
                                            {tag}
                                        </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="modal-footer">

                                    <button className="btn btn-success" onClick={() => alert("Marked as reviewed")}>
                                        Mark Reviewed
                                    </button>

                                    <button className="btn btn-warning"onClick={() => alert("Snoozed")}>
                                        Snooze
                                    </button>

                                    <button className="btn btn-danger" onClick={() => alert("Escalated")}>
                                        Escalate
                                    </button>

                                    <textarea rows="2" placeholder="Write a note..."></textarea>
                                    <button className="btn btn-secondary">Add Note</button>

                                </div>

                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}