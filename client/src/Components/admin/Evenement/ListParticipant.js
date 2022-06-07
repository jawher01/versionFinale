import React from 'react'
import List from "./NomParticipant"
const ListParticipant = (eve) => {
  var tab=[]
  for (let i = 0; i < eve.eve.participant.length; i++) {
     tab.push(eve.eve.participant[i]);
  }
  
 const ev=eve.eve.participant
  
  return (
    <div ><List tab={tab} />  </div>
  )
}

export default ListParticipant