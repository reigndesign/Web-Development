import { useRef, useState } from "react";
import AvatarInput from "./components/AvatarInput";
import Navbar from "./components/Navbar"
import EventForms from "./components/EventForms"
import TextInput from "./components/TextInput";
import infoIcon from "./assets/img/icon-info.svg";
import ticket from "./assets/img/pattern-ticket.svg";
import './index.css'


function HomePage() {

  return (
    <>
    <Navbar />
    <EventForms />
    
      <div className="body">
      
      </div>
    </>
    
  )
}

export default HomePage