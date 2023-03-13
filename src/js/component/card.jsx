import React from "react";

const Card = ({title, img, content, url,}) => {
    return (
        <div className="card bg-secondary text-dark p-2 h-100">
            <div class="card-header">
                <h5 className="card-title rounded bg-dark d-flex justify-content-center text-light">{title}</h5>
            </div>
            <img src={img} className="img-fluid m-1" alt="imagen-de-la-card"></img>
            <div className="card-body">
                <p className="card-text fs-4 ">{content}</p>
                <a href={url} className="btn btn-dark">Visita a {title}</a>
            </div>
        </div>
    )
}

export default Card