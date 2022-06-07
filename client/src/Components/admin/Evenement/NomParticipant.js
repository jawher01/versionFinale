import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import { useState } from "react";
const NomParticipant = (tab) => {
 
  var tabss=[]
  for (let i = 0; i < tab.tab.length; i++) {
     tabss.push(tab.tab[i]);
  }
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
    
      <Button variant='outlined' color='error' onClick={handleShow}>
        {tab.tab.length}
      </Button>
     
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>list participant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {tabss.map((tabs) => (
          <div style={{display:"flex"}}>
            <div style={{marginRight:"3%"}}>{tabs.nom}</div>
            <div>{tabs.prenom}</div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};



export default NomParticipant



