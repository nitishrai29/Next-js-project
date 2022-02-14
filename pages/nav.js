import Link from 'next/link'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">NextJS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/">
                                <a className="nav-link active" aria-current="page" >Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/gallery">
                                <a className="nav-link">Gallery</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">
                                <a className="nav-link" >contact</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/users">
                                <a className="nav-link" >users</a>
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar