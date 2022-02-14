import Navbar from "./nav"
import Image from 'next/image'
import coffepic from '../public/cp.jpg'
const gallery = () => {
    return (
        <>
            <Navbar />
            <section className="main my-5 pt-5">
                <div className="text-center">
                    <h1 className="display-4">Gallery</h1>
                    <hr className="w-25 mx-auto" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="toast" data-animation="true" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <Image src="..." className="rounded me-2" alt="..."/>
                                    <strong className="me-auto">Bootstrap</strong>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                            <div className="toast-body">
                                Hello, world! This is a toast message.
                            </div>
                        </div>

                        <div className="toast" data-animation="true" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <Image src="..." className="rounded me-2" alt="..."/>
                                    <strong className="me-auto">Bootstrap</strong>
                                    <small>9 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                            <div className="toast-body">
                                Hello, world
                            </div>
                        </div>

                        <div className="toast" data-animation="true" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <Image src="..." className="rounded me-2" alt="..."/>
                                    <strong className="me-auto">Bootstrap</strong>
                                    <small>7 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                            <div className="toast-body">
                                This is a toast message.
                            </div>
                        </div>

                    </div>
                </div>


                <div className="container">
                    <div className="row gy-2 my-5">
                        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                            <figure>
                                <Image src={coffepic} alt="gly img" className="img-fluid"/>
                            </figure>

                        </div>
                        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                            <figure>
                                <Image src={coffepic} alt="gly img" className="img-fluid"/>
                            </figure>

                        </div>
                        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                            <figure>
                                <Image src={coffepic} alt="gly img" className="img-fluid"/>
                            </figure>

                        </div>
                        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                            <figure>
                                <Image src={coffepic} alt="gly img" className="img-fluid"/>
                            </figure>

                        </div>
                        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                            <figure>
                                <Image src={coffepic} alt="gly img" className="img-fluid"/>
                            </figure>

                        </div>
                        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                            <figure>
                                <Image src={coffepic} alt="gly img" className="img-fluid"/>
                            </figure>

                        </div>
                        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                            <figure>
                                <Image src={coffepic} alt="gly img" className="img-fluid"/>
                            </figure>

                        </div>
                        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                            <figure>
                                <Image src={coffepic} alt="gly img" className="img-fluid"/>
                            </figure>

                        </div>
                        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                            <figure>
                                <Image src={coffepic} alt="gly img" className="img-fluid"/>
                            </figure>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default gallery

