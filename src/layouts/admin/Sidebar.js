import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (


 <aside class="left-sidebar">
 <div class="scroll-sidebar">
     
     <div class="user-profile">
         <div class="user-pro-body">
             <div><img src="../assets/images/users/2.jpg" alt="user-img" class="img-circle" /></div>
             <div class="dropdown">
                 <Link to="javascript:void(0)" class="dropdown-toggle u-dropdown link hide-menu" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Steave Gection <span class="caret"></span></Link>
                 <div class="dropdown-menu animated flipInY">
                     
                     <Link to="javascript:void(0)" class="dropdown-item"><i class="ti-user"></i> My Profile</Link>
                     
                     <Link to="javascript:void(0)" class="dropdown-item"><i class="ti-wallet"></i> My Balance</Link>
                    
                     <Link to="javascript:void(0)" class="dropdown-item"><i class="ti-email"></i> Inbox</Link>
                     
                     <div class="dropdown-divider"></div>
                    
                     <Link to="javascript:void(0)" class="dropdown-item"><i class="ti-settings"></i> Account Setting</Link>
                    
                     <div class="dropdown-divider"></div>
                    
                     <Link to="pages-login.html" class="dropdown-item"><i class="fas fa-power-off"></i> Logout</Link>
                   
                 </div>
             </div>
         </div>
     </div>
     <nav class="sidebar-nav">
         <ul id="sidebarnav">
             <li class="nav-small-cap">--- PERSONAL</li>
             <li> <Link class="has-arrow waves-effect waves-dark" to="javascript:void(0)" aria-expanded="false"><i class="icon-speedometer"></i><span class="hide-menu">Dashboard <span class="badge badge-pill badge-cyan ml-auto">4</span></span></Link>
                 <ul aria-expanded="false" class="collapse">
                     <li><Link to="index.html">Minimal </Link></li>
                     <li><Link to="index2.html">Analytical</Link></li>
                     <li><Link to="index3.html">Demographical</Link></li>
                     <li><Link to="index4.html">Modern</Link></li>
                 </ul>
             </li>
             <li> <Link class="has-arrow waves-effect waves-dark" to="javascript:void(0)" aria-expanded="false"><i class="ti-layout-grid2"></i><span class="hide-menu">Apps</span></Link>
                 <ul aria-expanded="false" class="collapse">
                     <li><Link to="app-calendar.html">Calendar</Link></li>
                     <li><Link to="app-chat.html">Chat app</Link></li>
                     <li><Link to="app-ticket.html">Support Ticket</Link></li>
                     <li><Link to="app-contact.html">Contact / Employee</Link></li>
                     <li><Link to="app-contact2.html">Contact Grid</Link></li>
                     <li><Link to="app-contact-detail.html">Contact Detail</Link></li>
                 </ul>
             </li>
             <li> <Link class="has-arrow waves-effect waves-dark" to="javascript:void(0)" aria-expanded="false"><i class="ti-email"></i><span class="hide-menu">Inbox</span></Link>
                 <ul aria-expanded="false" class="collapse">
                     <li><Link to="app-email.html">Mailbox</Link></li>
                     <li><Link to="app-email-detail.html">Mailbox Detail</Link></li>
                     <li><Link to="app-compose.html">Compose Mail</Link></li>
                 </ul>
             </li>
             <li> <Link class="has-arrow waves-effect waves-dark" to="javascript:void(0)" aria-expanded="false"><i class="ti-palette"></i><span class="hide-menu">Ui Elements <span class="badge badge-pill badge-primary text-white ml-auto">25</span></span></Link>
                 <ul aria-expanded="false" class="collapse">
                     <li><Link to="ui-cards.html">Cards</Link></li>
                     <li><Link to="ui-user-card.html">User Cards</Link></li>
                     <li><Link to="ui-buttons.html">Buttons</Link></li>
                     <li><Link to="ui-modals.html">Modals</Link></li>
                     <li><Link to="ui-tab.html">Tab</Link></li>
                     <li><Link to="ui-tooltip-popover.html">Tooltip &amp; Popover</Link></li>
                     <li><Link to="ui-tooltip-stylish.html">Tooltip stylish</Link></li>
                     <li><Link to="ui-sweetalert.html">Sweet Alert</Link></li>
                     <li><Link to="ui-notification.html">Notification</Link></li>
                     <li><Link to="ui-progressbar.html">Progressbar</Link></li>
                     <li><Link to="ui-nestable.html">Nestable</Link></li>
                     <li><Link to="ui-range-slider.html">Range slider</Link></li>
                     <li><Link to="ui-timeline.html">Timeline</Link></li>
                     <li><Link to="ui-typography.html">Typography</Link></li>
                     <li><Link to="ui-horizontal-timeline.html">Horizontal Timeline</Link></li>
                     <li><Link to="ui-session-timeout.html">Session Timeout</Link></li>
                     <li><Link to="ui-session-ideal-timeout.html">Session Ideal Timeout</Link></li>
                     <li><Link to="ui-bootstrap.html">Bootstrap Ui</Link></li>
                     <li><Link to="ui-breadcrumb.html">Breadcrumb</Link></li>
                     <li><Link to="ui-bootstrap-switch.html">Bootstrap Switch</Link></li>
                     <li><Link to="ui-list-media.html">List Media</Link></li>
                     <li><Link to="ui-ribbons.html">Ribbons</Link></li>
                     <li><Link to="ui-grid.html">Grid</Link></li>
                     <li><Link to="ui-carousel.html">Carousel</Link></li>
                     <li><Link to="ui-date-paginator.html">Date-paginator</Link></li>
                     <li><Link to="ui-dragable-portlet.html">Dragable Portlet</Link></li>
                     <li><Link to="ui-spinner.html">Spinner</Link></li>
                     <li><Link to="ui-scrollspy.html">Scrollspy</Link></li>
                     <li><Link to="ui-toasts.html">Toasts</Link></li>
                 </ul>
             </li>
             <li class="nav-small-cap">--- FORMS, TABLE &amp; WIDGETS</li>
             <li> <Link class="has-arrow waves-effect waves-dark" to="javascript:void(0)" aria-expanded="false"><i class="ti-layout-media-right-alt"></i><span class="hide-menu">Forms</span></Link>
                 <ul aria-expanded="false" class="collapse">
                     <li><Link to="form-basic.html">Basic Forms</Link></li>
                     <li><Link to="form-layout.html">Form Layouts</Link></li>
                     <li><Link to="form-addons.html">Form Addons</Link></li>
                     <li><Link to="form-material.html">Form Material</Link></li>
                     <li><Link to="form-float-input.html">Floating Lable</Link></li>
                     <li><Link to="form-pickers.html">Form Pickers</Link></li>
                     <li><Link to="form-upload.html">File Upload</Link></li>
                     <li><Link to="form-mask.html">Form Mask</Link></li>
                     <li><Link to="form-validation.html">Form Validation</Link></li>
                     <li><Link to="form-bootstrap-validation.html">Form Bootstrap Validation</Link></li>
                     <li><Link to="form-dropzone.html">File Dropzone</Link></li>
                     <li><Link to="form-icheck.html">Icheck control</Link></li>
                     <li><Link to="form-img-cropper.html">Image Cropper</Link></li>
                     <li><Link to="form-bootstrapwysihtml5.html">HTML5 Editor</Link></li>
                     <li><Link to="form-typehead.html">Form Typehead</Link></li>
                     <li><Link to="form-wizard.html">Form Wizard</Link></li>
                     <li><Link to="form-xeditable.html">Xeditable Editor</Link></li>
                     <li><Link to="form-summernote.html">Summernote Editor</Link></li>
                     <li><Link to="form-tinymce.html">Tinymce Editor</Link></li>
                 </ul>
             </li>
             <li> <Link class="has-arrow waves-effect waves-dark" to="javascript:void(0)" aria-expanded="false"><i class="ti-layout-accordion-merged"></i><span class="hide-menu">Tables</span></Link>
                 <ul aria-expanded="false" class="collapse">
                     <li><Link to="table-basic.html">Basic Tables</Link></li>
                     <li><Link to="table-layout.html">Table Layouts</Link></li>
                     <li><Link to="table-data-table.html">Data Tables</Link></li>
                     <li><Link to="table-footable.html">Footable</Link></li>
                     <li><Link to="table-jsgrid.html">Js Grid Table</Link></li>
                     <li><Link to="table-responsive.html">Responsive Table</Link></li>
                     <li><Link to="table-bootstrap.html">Bootstrap Tables</Link></li>
                     <li><Link to="table-editable-table.html">Editable Table</Link></li>
                 </ul>
             </li>
             <li> <Link class="has-arrow waves-effect waves-dark" to="javascript:void(0)" aria-expanded="false"><i class="ti-settings"></i><span class="hide-menu">Widgets</span></Link>
                 <ul aria-expanded="false" class="collapse">
                     <li><Link to="widget-data.html">Data Widgets</Link></li>
                     <li><Link to="widget-apps.html">Apps Widgets</Link></li>
                     <li><Link to="widget-charts.html">Charts Widgets</Link></li>
                 </ul>
             </li>
             <li class="nav-small-cap">--- EXTRA COMPONENTS</li>
             <li> <Link class="has-arrow waves-effect waves-dark" to="javascript:void(0)" aria-expanded="false"><i class="ti-gallery"></i><span class="hide-menu">Page Layout</span></Link>
                 <ul aria-expanded="false" class="collapse">
                     <li><Link to="layout-single-column.html">1 Column</Link></li>
                     <li><Link to="layout-fix-header.html">Fix header</Link></li>
                     <li><Link to="layout-fix-sidebar.html">Fix sidebar</Link></li>
                     <li><Link to="layout-fix-header-sidebar.html">Fixe header &amp; Sidebar</Link></li>
                     <li><Link to="layout-boxed.html">Boxed Layout</Link></li>
                     <li><Link to="layout-logo-center.html">Logo in Center</Link></li>
                 </ul>
             </li>
             <li> <Link class="has-arrow waves-effect waves-dark" to="javascript:void(0)" aria-expanded="false"><i class="ti-files"></i><span class="hide-menu">Sample Pages <span class="badge badge-pill badge-info">25</span></span></Link>
                 <ul aria-expanded="false" class="collapse">
                     <li><Link to="starter-kit.html">Starter Kit</Link></li>
                     <li><Link to="pages-blank.html">Blank page</Link></li>
                     <li><Link to="javascript:void(0)" class="has-arrow">Authentication <span class="badge badge-pill badge-success pull-right">6</span></Link>
                         <ul aria-expanded="false" class="collapse">
                             <li><Link to="pages-login.html">Login 1</Link></li>
                             <li><Link to="pages-login-2.html">Login 2</Link></li>
                             <li><Link to="pages-register.html">Register</Link></li>
                             <li><Link to="pages-register2.html">Register 2</Link></li>
                             <li><Link to="pages-register3.html">Register 3</Link></li>
                             <li><Link to="pages-lockscreen.html">Lockscreen</Link></li>
                             <li><Link to="pages-recover-password.html">Recover password</Link></li>
                         </ul>
                     </li>
                     <li><Link to="pages-profile.html">Profile page</Link></li>
                     <li><Link to="pages-animation.html">Animation</Link></li>
                     <li><Link to="pages-fix-innersidebar.html">Sticky Left sidebar</Link></li>
                     <li><Link to="pages-fix-inner-right-sidebar.html">Sticky Right sidebar</Link></li>
                     <li><Link to="pages-invoice.html">Invoice</Link></li>
                     <li><Link to="pages-treeview.html">Treeview</Link></li>
                     <li><Link to="pages-utility-classes.html">Helper Classes</Link></li>
                     <li><Link to="pages-search-result.html">Search result</Link></li>
                     <li><Link to="pages-scroll.html">Scrollbar</Link></li>
                     <li><Link to="pages-pricing.html">Pricing</Link></li>
                     <li><Link to="pages-lightbox-popup.html">Lighbox popup</Link></li>
                     <li><Link to="pages-gallery.html">Gallery</Link></li>
                     <li><Link to="pages-faq.html">Faqs</Link></li>
                     <li><Link to="javascript:void(0)" class="has-arrow">Error Pages</Link>
                         <ul aria-expanded="false" class="collapse">
                             <li><Link to="pages-error-400.html">400</Link></li>
                             <li><Link to="pages-error-403.html">403</Link></li>
                             <li><Link to="pages-error-404.html">404</Link></li>
                             <li><Link to="pages-error-500.html">500</Link></li>
                             <li><Link to="pages-error-503.html">503</Link></li>
                         </ul>
                     </li>
                 </ul>
             </li>
             <li> <Link class="has-arrow waves-effect waves-dark" to="javascript:void(0)" aria-expanded="false"><i class="ti-pie-chart"></i><span class="hide-menu">Charts</span></Link>
                 <ul aria-expanded="false" class="collapse">
                     <li><Link to="chart-morris.html">Morris Chart</Link></li>
                     <li><Link to="chart-chartist.html">Chartis Chart</Link></li>
                     <li><Link to="chart-echart.html">Echarts</Link></li>
                     <li><Link to="chart-flot.html">Flot Chart</Link></li>
                     <li><Link to="chart-knob.html">Knob Chart</Link></li>
                     <li><Link to="chart-chart-js.html">Chartjs</Link></li>
                     <li><Link to="chart-sparkline.html">Sparkline Chart</Link></li>
                     <li><Link to="chart-extra-chart.html">Extra chart</Link></li>
                     <li><Link to="chart-peity.html">Peity Charts</Link></li>
                 </ul>
             </li>
             <li> <Link class="has-arrow waves-effect waves-dark" to="javascript:void(0)" aria-expanded="false"><i class="ti-light-bulb"></i><span class="hide-menu">Icons</span></Link>
                 <ul aria-expanded="false" class="collapse">
                     <li><Link to="icon-material.html">Material Icons</Link></li>
                     <li><Link to="icon-fontawesome.html">Fontawesome Icons</Link></li>
                     <li><Link to="icon-themify.html">Themify Icons</Link></li>
                     <li><Link to="icon-weather.html">Weather Icons</Link></li>
                     <li><Link to="icon-simple-lineicon.html">Simple Line icons</Link></li>
                     <li><Link to="icon-flag.html">Flag Icons</Link></li>
                 </ul>
             </li>
             <li> <Link class="has-arrow waves-effect waves-dark" to="javascript:void(0)" aria-expanded="false"><i class="ti-location-pin"></i><span class="hide-menu">Maps</span></Link>
                 <ul aria-expanded="false" class="collapse">
                     <li><Link to="map-google.html">Google Maps</Link></li>
                     <li><Link to="map-vector.html">Vector Maps</Link></li>
                 </ul>
             </li>
             <li> <Link class="has-arrow waves-effect waves-dark" to="javascript:void(0)" aria-expanded="false"><i class="ti-align-left"></i><span class="hide-menu">Multi level dd</span></Link>
                 <ul aria-expanded="false" class="collapse">
                     <li><Link to="javascript:void(0)">item 1.1</Link></li>
                     <li><Link to="javascript:void(0)">item 1.2</Link></li>
                     <li> <Link class="has-arrow" to="javascript:void(0)" aria-expanded="false">Menu 1.3</Link>
                         <ul aria-expanded="false" class="collapse">
                             <li><Link to="javascript:void(0)">item 1.3.1</Link></li>
                             <li><Link to="javascript:void(0)">item 1.3.2</Link></li>
                             <li><Link to="javascript:void(0)">item 1.3.3</Link></li>
                             <li><Link to="javascript:void(0)">item 1.3.4</Link></li>
                         </ul>
                     </li>
                     <li><Link to="javascript:void(0)">item 1.4</Link></li>
                 </ul>
             </li>
             <li class="nav-small-cap">--- SUPPORT</li>
             <li>
                 <Link class="waves-effect waves-dark" to="../documentation/documentation.html" aria-expanded="false">
                     <i class="far fa-circle text-danger"></i>
                     <span class="hide-menu">Documentation</span>
                 </Link>
             </li>
             <li>
                 <Link class="waves-effect waves-dark" to="pages-login.html" aria-expanded="false">
                     <i class="far fa-circle text-success"></i>
                     <span class="hide-menu">Log Out</span>
                 </Link>
             </li>
             <li>
                 <Link class="waves-effect waves-dark" to="pages-faq.html" aria-expanded="false">
                     <i class="far fa-circle text-info"></i>
                     <span class="hide-menu">FAQs</span>
                 </Link>
             </li>
         </ul>
     </nav>
 </div>
</aside>

);
}

export default Sidebar;
