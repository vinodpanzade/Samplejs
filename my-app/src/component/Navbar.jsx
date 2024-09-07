import React from 'react'

function Navbar() {
  return (
    <div style={{marginTop:'20px'}}>
      <nav className="navbar navbar-expand-lg " style={{backgroundColor:'#ef5279', borderRadius:'10px',marginLeft:'10px',marginRight:'10px',position:'sticky',top:'0'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"  style={{marginLeft:'20px'}} ><b>Navbar</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent" style={{marginLeft:'300px'}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{gap:'50px'}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Clients</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Testimonials</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Contacts</a>
        </li>
        
       
      </ul>
      <form className="d-flex">
        
      <button type="button" className=" rounded-5 btn btn-primary rounded" style={{marginRight:'10px',color:'black'}}><b>Callnow</b></button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
