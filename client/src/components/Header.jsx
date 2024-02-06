function Header({ currentPage, handlePageChange, loggedIn }) {
    return (
        <header className="fixed-top">
            <h1>Launch Pad</h1>
            <ul className="nav nav-tabs justify-content-center py-2">
                <li className="nav-item">
                    <a onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                        Home</a>
                </li>
                <li className="nav-item">
                    {loggedIn ?
                        <a className={currentPage === 'Signout' ? 'nav-link active' : 'nav-link'}>
                            Signout</a>
                        :
                        <a className={currentPage === 'Signout' ? 'nav-link active' : 'nav-link'}>
                            Login</a>}
                </li>
            </ul>
        </header>
    )
}
export default Header;