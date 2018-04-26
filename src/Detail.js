import React, { Component } from 'react';
import './css/Detail.css';
import test from './images/test.jpg';

class Detail extends Component{
  constructor(props) {
    super(props);
  }
  handleError(){
    if(this.props.studentID == undefined){
      return(
      <div className='DetailPage'>
        <p className='H1'><span className='H2'>เกิดข้อผิดพลาด</span> ท่านไม่ได้อยู่ในระบบในขณะนี้</p>
        <p className='H1'>กรุณาเข้าสู่ระบบก่อนเริ่มการใช้งาน</p>
      </div>);
    }else{
      return(
      <div className='DetailPage'>
        <p className='H1'>ขณะนี้ท่านได้เข้าสู่ระบบลงทะเบียนเรียนแล้ว กรุณาเลือกบริการที่ต้องการจากรายการด้านซ้ายมือ</p>
        <p className='H2'>นิสิตจะออกจากระบบโดยอัตโนมัติ เมื่อหยุดการติดต่อนานเกิน 10 นาที</p>
        <p className='H1'>นิสิตต้องกด ออกจากระบบ ทุกครั้งที่เสร็จสิ้นการใช้งานเพื่อมิให้ผู้อื่นเข้าใช้งาน ในชื่อของท่านได้</p>
      </div>);
    }
  }
  render(){
    return(
      <div>
        {this.handleError()}
      </div>
    );
  }
}
export default Detail;