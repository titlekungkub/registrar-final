import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SideBar from './SideBar';
import RegisterCourse from './RegisterCourse';
import Login from './Login';
import AddCourse from './AddCourse';
import ManageCourse from './ManageCourse';
import logout from './images/logout.png';
import Detail from './Detail';
import RegisterCourseResult from './RegisterCourseResult';
import StudyResult from './StudyResult'
import ManageCourseResult from './ManageCourseResult';
import PayStatus from './PayStatus';
import PayResult from './PayResult';
import RegisterActivity from './RegisterActivity';
import RegisterActivityResult from './RegisterActivityResult';
import ActivityHistory from './ActivityHistory'
import './css/Home.css';

var state=0;
function openNav() {
  if (state==0){
    document.getElementById("HomeSideBar").style.width = "240px";
    state =1;
  }
  else {
    document.getElementById("HomeSideBar").style.width = "0px";
    state=0;
  }
}

class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    state=0;
    return (
      <div className="Home">
        <div className="HomeHeader">
        <h1 className='Re'></h1>
          <Link to='/'><img src={logout} className="HomeLogout"/></Link>
        </div>

        <div className="HomeSideBar" id="HomeSideBar">
        <Link to='/home'><button className='HomeSideBarButton' onClick={()=>openNav()}>หน้าแรก</button></Link><br/>
          <Link to='/home/RegisterCourse'><button className='HomeSideBarButton' onClick={()=>openNav()}>ลงทะเบียนเรียน</button></Link><br/>
          <Link to='/home/RegisterCourseResult'><button className='HomeSideBarButton' onClick={()=>openNav()}>ผลการแสดงความจำนง</button></Link><br/>
          <Link to='/home/ManageCourse'><button className='HomeSideBarButton' onClick={()=>openNav()}>เพิ่ม-ลดรายวิชา</button></Link><br/>
          <Link to='/home/ManageCourseResult'><button className='HomeSideBarButton' onClick={()=>openNav()}>ผลการลงทะเบียนเรียน</button></Link><br/>
          <Link to='/home/StudyResult'><button className='HomeSideBarButton' onClick={()=>openNav()}>ผลการศึกษา</button></Link><br/>
          <Link to='/home/PayStatus'><button className='HomeSideBarButton' onClick={()=>openNav()}>ยอดค้างชำระค่าเทอม</button></Link><br/>
          <Link to='/home/PayResult'><button className='HomeSideBarButton' onClick={()=>openNav()}>ผลการชำระค่าเทอม</button></Link><br/>
          <Link to='/home/RegisterActivity'><button className='HomeSideBarButton' onClick={()=>openNav()}>ลงทะเบียนกิจกรรมหอพัก</button></Link><br/>
          <Link to='/home/RegisterActivityResult'><button className='HomeSideBarButton' onClick={()=>openNav()}>ผลการลงทะเบียนกิจกรรมหอพัก</button></Link><br/>
          <Link to='/home/ActivityHistory'><button className='HomeSideBarButton' onClick={()=>openNav()}>ประวัติการเข้าร่วมกิจกรรมหอพัก</button></Link><br/>
        </div>

        <div className='HomeBody'>
          <span className="Toggle" id="Toggle" onClick={()=>openNav()}>&#9776;</span>
          <Route exact path="/home/" render={() => <Detail studentID={this.props.studentID} />}/>
          <Route exact path="/home/RegisterCourse" render={() => <RegisterCourse studentID={this.props.studentID}/>}/>
          <Route exact path="/home/RegisterCourseResult" render={() => <RegisterCourseResult studentID={this.props.studentID}/>}/>
          <Route exact path="/home/ManageCourse" render={() => <ManageCourse studentID={this.props.studentID} />}/>
          <Route exact path="/home/ManageCourseResult" render={() => <ManageCourseResult studentID={this.props.studentID} />}/>
          <Route exact path="/home/PayStatus" render={() => <PayStatus studentID={this.props.studentID} />}/>
          <Route exact path="/home/PayResult" render={() => <PayResult studentID={this.props.studentID} />}/>
          <Route exact path="/home/RegisterActivity" render={() => <RegisterActivity studentID={this.props.studentID} />}/>
          <Route exact path="/home/RegisterActivityResult" render={() => <RegisterActivityResult studentID={this.props.studentID} />}/>
          <Route exact path="/home/ActivityHistory" render={() => <ActivityHistory studentID={this.props.studentID} />}/>
          <Route exact path="/home/StudyResult" render={() => <StudyResult studentID={this.props.studentID} />}/>
        </div>
      </div>
    );
  }
}

export default Home;
