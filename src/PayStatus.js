import React, { Component } from 'react';
import './css/PayStatus.css';

class PayStatus extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentProfile : [],
            payStatus : [],
        }
    }
    componentDidMount(){
        fetch('/courses/provideStudentProfile', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body:"studentID="+this.props.studentID
        })
        .then(res => res.json())
        .then(members => {
            this.setState({
                studentProfile: members[0]
            })
        })

        fetch('/courses/payStatus', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body:"studentID="+this.props.studentID
        })
        .then(res => res.json())
        .then(members => {
            this.setState({
                payStatus: members[members.length - 1]
            })
        })
    }
    calculateEducationLevel(){
        if(this.state.studentProfile.undergradflag = '1'){
            return <span>ปริญาตรี</span>
        }else{
            return <span>ปริญาโท</span>
        }
    }
    calculateOutstanding(){
        if(this.state.payStatus.payStatus == '0'){
            return <span>{this.state.payStatus.price}</span>
        }else{
            return <span>0</span>
        }
    }
    calculatePay(){
        if(this.state.payStatus.payStatus == '1'){
            return <span>{this.state.payStatus.price + "at " + this.state.payStatus.transactionDate}</span>
        }else{
            return <span>0</span>
        }
    }
    // เนื่องจากมีตอนที่ payStatus กับ studentProfile ไม่พร้อม เลยต้องมาทำ handleError ก่อน
    handleError(){
        if(this.state.payStatus == undefined || this.state.studentProfile == undefined){
            return <div>Unarthorized Access!!</div>
        }else{
            return (
            <div className="Main">
                <div className = "profileContainer">
                      <div className="profileContainerIn">
                        <h1>โปรไฟล์นิสิต</h1>
                        <table className="profileContainerTable">
                            <tbody>
                              <tr>
                                <th className="r1">ชื่อ-สกุล</th>
                                <th className="r2">{this.state.studentProfile.fname +" "+this.state.studentProfile.lname}</th>
                              </tr>
                              <tr>
                                <th className="r1">ระดับ </th>
                                <th className="r2">{this.calculateEducationLevel()}</th>
                              </tr>
                              <tr>
                                <th className="r1">คณะ</th>
                                <th className="r2">{this.state.studentProfile.facultyName}</th>
                              </tr>
                              <tr>
                                <th className="r1">สาขา</th>
                                <th className="r2">{this.state.studentProfile.departmentName}</th>
                              </tr>
                            </tbody>
                        </table>
                      </div>

                </div>

                <div className = "payStatus">
                    <h1>รายละเอียดค่าเทอม</h1>
                    <table className="profileContainerTable">
                        <tbody>
                          <tr>
                            <th className="r1">ค่าเล่าเรียน</th>
                            <th className="r2">{this.state.payStatus.semester}</th>
                          </tr>
                          <tr>
                            <th className="r1">ทั้งหมด </th>
                            <th className="r2">{this.state.payStatus.price}</th>
                          </tr>
                          <tr>
                            <th className="r1">ค้างชำระ</th>
                            <th className="r2">{this.calculateOutstanding()}</th>
                          </tr>
                          <tr>
                            <th className="r1">ชำระแล้ว</th>
                            <th className="r2">{this.calculatePay()}</th>
                          </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          );
        }
    }
    render() {
        return (
            <div>
                {this.handleError()}
            </div>
        );
    }
}

export default PayStatus;
