import React from 'react'
import Page1 from './Page1'

 
export default function HomePage() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">MovieMania</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="./Page1">Page 1</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="./Page2">Page 2</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="./Page3">Page 3</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <div className="container">
        </div>
    </div>
  )
}
