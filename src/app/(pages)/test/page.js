// "use client"
// import SearchInput from '@/components/shared/common/SearchInput'
// import Button from '@/components/shared/ui/Button'
// import Input from '@/components/shared/ui/Input'
// import { ArrowDown01Icon, ArrowUpDownIcon, MoreVerticalCircle01Icon, PlusSignIcon, Search01Icon, Settings01Icon, SidebarLeft01Icon, SidebarLeftIcon } from 'hugeicons-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useState } from 'react'
// import { Accordion, Card, Col, Container, Dropdown, Form, Row } from 'react-bootstrap'
// import NoteCard from './components/NoteCard'
// import { set } from 'lodash'
// // import "@/styles/notes.style.css";
// // import "@/styles/action-bar.style.css";
// function Page() {
//     const [isSidebarClicked, setIsSidebarClicked] = useState(false);
//     const [isSidebarHovered, setIsSidebarHovered] = useState(false);
//     const [show, setShow] = useState(false);
//     const [open, setOpen] = useState(false);

//     const handleMouseToggle = () => {
//         setShow(!show);
//     }
//     const handleToggle = () => {
//         setOpen(!open);
//     }
//     const handleResize = () => {
//         addEventListener("resize", () => {
//             console.log(window.innerWidth);
//         })
//     }
//     const handleClick = () => {
//         setIsSidebarClicked(true)
//     }
//     return (
//         <>
//             {/* secondary sidebar */}
//             <div>
//                 <div className="secondary-sidebar-container position-absolute">
//                     {/* note open button */}
//                     <button onMouseEnter={handleMouseToggle} className={`${open ? '' : 'd-none'} sidebar-btn open position-fixed`}>
//                         test
//                     </button>
//                     <div className="p-3 p-md-4 mx-auto">
//                         <div onMouseLeave={open ? handleMouseToggle : ''} className={`col d-flex flex-column justify-content-between secondary-sidebar ${open || show ? 'collapse' : ''} `}>
//                             <div className="d-grid gap-3 sidebar-content-wrapper">
//                                 <div className="d-flex justify-content-between position-relative">
//                                     <h3>Notes</h3>
//                                     <div className="d-flex align-items-center">
//                                         <div className="icon text-primary">
//                                             <PlusSignIcon strokeWidth={2} />
//                                         </div>
//                                         <div className="icon">
//                                             <Settings01Icon strokeWidth={2} />
//                                         </div>
//                                         <div onClick={() => handleToggle()} className="icon">
//                                             <SidebarLeftIcon />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <SearchInput
//                                     withIconLeft={
//                                         <Search01Icon size={16} />
//                                     }
//                                 />
//                                 <Accordion alwaysOpen defaultActiveKey={["0", "1"]} className="selected-accordion designed-scrollbar">
//                                     <Accordion.Item eventKey="0">
//                                         <Accordion.Header>
//                                             <span className="text-secondary line-clamp-1">
//                                                 Accordion item 1
//                                             </span>
//                                             <ArrowDown01Icon size={16} />
//                                         </Accordion.Header>
//                                         <Accordion.Body>
//                                             <ul className="list-unstyled mb-0">
//                                                 <li>
//                                                     <Link href="#">Developing translator</Link>
//                                                 </li>
//                                                 <li>
//                                                     <Link className="active" href="#">
//                                                         Developing translator
//                                                     </Link>
//                                                 </li>
//                                                 <li>
//                                                     <Link href="#">Developing translator</Link>
//                                                 </li>
//                                             </ul>
//                                         </Accordion.Body>
//                                     </Accordion.Item>
//                                     <Accordion.Item eventKey="1">
//                                         <Accordion.Header>
//                                             <span className="text-secondary line-clamp-1">
//                                                 Accordion Item 2
//                                             </span>
//                                             <ArrowDown01Icon size={16} />
//                                         </Accordion.Header>
//                                         <Accordion.Body>
//                                             <ul className="list-unstyled mb-0">
//                                                 <li>
//                                                     <Link href="#">translator Developing </Link>
//                                                 </li>
//                                                 <li>
//                                                     <Link className="active" href="#">
//                                                         testing
//                                                     </Link>
//                                                 </li>
//                                                 <li>
//                                                     <Link href="#">translator</Link>
//                                                 </li>
//                                             </ul>
//                                         </Accordion.Body>
//                                     </Accordion.Item>
//                                 </Accordion>
//                                 <Button size="sm" variant="plain-primary" className="w-100 d-flex align-items-center justify-content-center gap-2">
//                                     <PlusSignIcon size={16} strokeWidth={2} />
//                                     <span>Add note</span>
//                                 </Button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="bg-overly position-fixed inset-0 z-2" />
//             </div>
//             {/* secondary sidebar */}
//             <Container fluid className="notes-section px-0">
//                 <Row className="grid-col-1 py-4 px-3 px-md-4 mx-auto">
//                     <Col onClick={() => handleToggle()} className={`control-column-with-secondary-sidebar designed-scrollbar py-0 pe-0 ${open ? '' : 'expand'}`}>
//                         <div className="action-bar z-2 pb-3 pe-2">
//                             <div className="d-flex justify-content-end gap-2">
//                                 <Button onClick={() => handleToggle()} variant="ghost" className={`position-relative rounded-circle p-1 py-0 me-auto z-3 ${open ? "" : "d-none"}`}>
//                                     <SidebarLeftIcon />
//                                 </Button>
//                                 <div className="d-flex align-items-center justify-content-end gap-2">
//                                     <Button size="xsm" variant="ghost">#software</Button>
//                                     <Button size="xsm" variant="ghost">Share</Button>
//                                     <Dropdown>
//                                         <Dropdown.Toggle size="xsm" variant="ghost" id="dropdown-basic">
//                                             <MoreVerticalCircle01Icon size={20} />
//                                         </Dropdown.Toggle>
//                                         <Dropdown.Menu>
//                                             <Dropdown.Item>
//                                                 <Form.Check
//                                                     type="checkbox"
//                                                     label="Oldest"
//                                                 >
//                                                 </Form.Check>
//                                             </Dropdown.Item>
//                                             <Dropdown.Item>
//                                                 <Form.Check
//                                                     type="checkbox"
//                                                     label="Most Popular"
//                                                 >
//                                                 </Form.Check>
//                                             </Dropdown.Item>
//                                             <Dropdown.Item>
//                                                 <Form.Check
//                                                     type="checkbox"
//                                                     label="Trending"
//                                                 >
//                                                 </Form.Check>
//                                             </Dropdown.Item>
//                                         </Dropdown.Menu>
//                                     </Dropdown>
//                                 </div>
//                             </div>
//                         </div>
//                         <p className="fs-14 text-grey">Home for your private and secure notes</p>
//                         <div className="notes-container pt-4 pe-2">
//                             <div>
//                                 <h2 className="fs-20">#software</h2>
//                                 <div className="notes-card-wrapper d-grid gap-12 pt-3">
//                                     <NoteCard />
//                                 </div>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     )
// }
// export default Page;