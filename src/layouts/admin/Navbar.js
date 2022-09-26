import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="index.html">
                       <b>
                            <i className="wi wi-sunset"></i> 
                            <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                            <img src="../assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                        </b>
                        <span>
                         <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />  
                         <img src="../assets/images/logo-light-text.png" className="light-logo" alt="homepage" /></span> </Link>
                </div>
               
                <div className="navbar-collapse">
                   
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"> <Link className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark" to="javascript:void(0)"><i className="ti-menu"></i></Link> </li>
                        <li className="nav-item"> <Link className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark" to="javascript:void(0)"><i className="icon-menu"></i></Link> </li>
                        
                        <li className="nav-item">
                            <form className="app-search d-none d-md-block d-lg-block">
                                <input type="text" className="form-control" placeholder="Search & enter" />
                            </form>
                        </li>
                    </ul>
                   
                    <ul className="navbar-nav my-lg-0">
                        
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle waves-effect waves-dark" to="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="ti-email"></i>
                                <div className="notify"> <span className="heartbit"></span> <span className="point"></span> </div>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right mailbox animated bounceInDown">
                                <ul>
                                    <li>
                                        <div className="drop-title">Notifications</div>
                                    </li>
                                    <li>
                                        <div className="message-center">
                                            <Link to="javascript:void(0)">
                                                <div className="btn btn-danger btn-circle"><i className="fa fa-link"></i></div>
                                                <div className="mail-contnet">
                                                    <h5>Luanch Admin</h5> <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span> </div>
                                            </Link>
                                            <Link to="javascript:void(0)">
                                                <div className="btn btn-success btn-circle"><i className="ti-calendar"></i></div>
                                                <div className="mail-contnet">
                                                    <h5>Event today</h5> <span className="mail-desc">Just a reminder that you have event</span> <span className="time">9:10 AM</span> </div>
                                            </Link>
                                            <Link to="javascript:void(0)">
                                                <div className="btn btn-info btn-circle"><i className="ti-settings"></i></div>
                                                <div className="mail-contnet">
                                                    <h5>Settings</h5> <span className="mail-desc">You can customize this template as you want</span> <span className="time">9:08 AM</span> </div>
                                            </Link>
                                            <Link to="javascript:void(0)">
                                                <div className="btn btn-primary btn-circle"><i className="ti-user"></i></div>
                                                <div className="mail-contnet">
                                                    <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <Link className="nav-link text-center link" to="javascript:void(0);"> <strong>Check all notifications</strong> <i className="fa fa-angle-right"></i> </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle waves-effect waves-dark" to="" id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="icon-note"></i>
                                <div className="notify"> <span className="heartbit"></span> <span className="point"></span> </div>
                            </Link>
                            <div className="dropdown-menu mailbox dropdown-menu-right animated bounceInDown" aria-labelledby="2">
                                <ul>
                                    <li>
                                        <div className="drop-title">You have 4 new messages</div>
                                    </li>
                                    <li>
                                        <div className="message-center">
                                            <Link to="javascript:void(0)">
                                                <div className="user-img"> <img src="../assets/images/users/1.jpg" alt="user" className="img-circle" /> <span className="profile-status online pull-right"></span> </div>
                                                <div className="mail-contnet">
                                                    <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:30 AM</span> </div>
                                            </Link>
                                            <Link to="javascript:void(0)">
                                                <div className="user-img"> <img src="../assets/images/users/2.jpg" alt="user" className="img-circle" /> <span className="profile-status busy pull-right"></span> </div>
                                                <div className="mail-contnet">
                                                    <h5>Sonu Nigam</h5> <span className="mail-desc">I've sung a song! See you at</span> <span className="time">9:10 AM</span> </div>
                                            </Link>
                                            <Link to="javascript:void(0)">
                                                <div className="user-img"> <img src="../assets/images/users/3.jpg" alt="user" className="img-circle" /> <span className="profile-status away pull-right"></span> </div>
                                                <div className="mail-contnet">
                                                    <h5>Arijit Sinh</h5> <span className="mail-desc">I am a singer!</span> <span className="time">9:08 AM</span> </div>
                                            </Link>
                                            <Link to="javascript:void(0)">
                                                <div className="user-img"> <img src="../assets/images/users/4.jpg" alt="user" className="img-circle" /> <span className="profile-status offline pull-right"></span> </div>
                                                <div className="mail-contnet">
                                                    <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <Link className="nav-link text-center link" to="javascript:void(0);"> <strong>See all e-Mails</strong> <i className="fa fa-angle-right"></i> </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item dropdown mega-dropdown"> <Link className="nav-link dropdown-toggle waves-effect waves-dark" to="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti-layout-width-default"></i></Link>
                            <div className="dropdown-menu animated bounceInDown">
                                <ul className="mega-dropdown-menu row">
                                    <li className="col-lg-3 col-xlg-2 m-b-30">
                                        <h4 className="m-b-20">CAROUSEL</h4>
                                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner" role="listbox">
                                                <div className="carousel-item active">
                                                    <div className="container"> <img className="d-block img-fluid" src="../assets/images/big/img1.jpg" alt="First slide" /></div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="container"><img className="d-block img-fluid" src="../assets/images/big/img2.jpg" alt="Second slide" /></div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="container"><img className="d-block img-fluid" src="../assets/images/big/img3.jpg" alt="Third slide" /></div>
                                                </div>
                                            </div>
                                            <Link className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </Link>
                                            <Link className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </Link>
                                        </div>
                                    </li>
                                    <li className="col-lg-3 m-b-30">
                                        <h4 className="m-b-20">ACCORDION</h4>
                                        <div className="accordion" id="accordionExample">
                                            <div className="card m-b-0">
                                                <div className="card-header bg-white p-0" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Collapsible Group Item #1
                                                        </button>
                                                    </h5>
                                                </div>

                                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card m-b-0">
                                                <div className="card-header bg-white p-0" id="headingTwo">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                                            aria-controls="collapseTwo">
                                                            Collapsible Group Item #2
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card m-b-0">
                                                <div className="card-header bg-white p-0" id="headingThree">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                                            aria-controls="collapseThree">
                                                            Collapsible Group Item #3
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-3  m-b-30">
                                        <h4 className="m-b-20">CONTACT US</h4>
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="exampleInputname1" placeholder="Enter Name" /> </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Enter email" /> </div>
                                            <div className="form-group">
                                                <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Message"></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-info">Submit</button>
                                        </form>
                                    </li>
                                    <li className="col-lg-3 col-xlg-4 m-b-30">
                                        <h4 className="m-b-20">List style</h4>
                                        <ul className="list-style-none">
                                            <li><Link to="javascript:void(0)"><i className="fa fa-check text-success"></i> You can give link</Link></li>
                                            <li><Link to="javascript:void(0)"><i className="fa fa-check text-success"></i> Give link</Link></li>
                                            <li><Link to="javascript:void(0)"><i className="fa fa-check text-success"></i> Another Give link</Link></li>
                                            <li><Link to="javascript:void(0)"><i className="fa fa-check text-success"></i> Forth link</Link></li>
                                            <li><Link to="javascript:void(0)"><i className="fa fa-check text-success"></i> Another fifth link</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item right-side-toggle"> <Link className="nav-link  waves-effect waves-light" to="javascript:void(0)"><i className="ti-settings"></i></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;