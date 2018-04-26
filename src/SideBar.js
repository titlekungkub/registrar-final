import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/SideBar.css';

class SideBar extends Component{
  render() {
    return (
      <div className="Side1">
      <div className="Side">
        <ul className="Side-ul">
          <li>
            <Link to="/detail/RegisterCourse">ลงทะเบียนเรียน</Link>
          </li>
          <li>
            <Link to="/detail/ตารางเรียน">ตารางเรียน</Link>
          </li>
        </ul>
      </div>
      </div>
    );
  }

}

export default SideBar;
