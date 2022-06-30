function Sibedabar() {

    return (<>

        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            <i className="fa fa-dashboard"></i>
                            &nbsp;&nbsp;

                            Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-users"></i>
                            &nbsp;&nbsp;

                            Data Wajib pajak
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-shopping-cart"></i>
                            &nbsp;&nbsp;

                            SPPD
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-list"></i>
                            &nbsp;&nbsp;
                            Customers
                        </a>
                    </li>
                  
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Saved reports</span>
                    <a className="link-secondary" href="#" aria-label="Add a new report">
                        <span data-feather="plus-circle" />
                    </a>
                </h6>
              
            </div>
        </nav>

    </>)

}

export default Sibedabar;