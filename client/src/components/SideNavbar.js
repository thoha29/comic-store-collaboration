import React from 'react'

const SideNavbar = () => {
    return (
        <>
            {/* sidebar */}
            <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion' id='accordionSidebar'>
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">COMIC STORE</div>
                </a>

                <hr className="sidebar-divider my-0"></hr>
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>
                <hr className="sidebar-divider"></hr>
                <div className="sidebar-heading">
                    Transactions
                </div>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Transactions</span></a>
                </li>

                <hr className="sidebar-divider"></hr>
                <div className="sidebar-heading">
                    Masters
                </div>


                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Comics</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Genres</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Custommers</span></a>
                </li>
                <hr className="sidebar-divider"></hr>
                <div className="sidebar-heading">
                    Settings
                </div>

                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Settings</span></a>
                </li>
            </ul>
        </>
    )
}

export default SideNavbar