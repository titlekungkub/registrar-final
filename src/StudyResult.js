import React, { Component } from 'react';
import './css/PayStatus.css';

class StudyResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentProfile : [],
            courses : [],
            selectedSemester : '2015/1'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        fetch('/courses/provideStudentStudyResult', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body:"studentID="+this.props.studentID+"&semester="+this.state.selectedSemester
        })
        .then(res => res.json())
        .then(items => {
            this.setState({
                courses : items
            })
        })
    }
    handleChange(event) {
        this.setState({selectedSemester: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch('/courses/provideStudentStudyResult', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body:"studentID="+this.props.studentID+"&semester="+this.state.selectedSemester
        })
        .then(res => res.json())
        .then(items => {
            this.setState({
                courses : items
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
    handleError(){
        if(this.state.studentProfile == undefined){
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
              <div className="payStatus">
                <h1>ผลการศึกษา</h1>
                <form className="formStatus">
                    <select onChange={this.handleChange} className="selectOption">
                        <option value="2018/2">2018/2</option>
                        <option value="2018/1">2018/1</option>
                        <option value="2017/2">2017/2</option>
                        <option value="2017/1">2017/1</option>
                        <option value="2016/2">2016/2</option>
                        <option value="2016/1">2016/1</option>
                        <option value="2015/2">2015/2</option>
                        <option value="2015/1">2015/1</option>
                    </select>
                    <button className='ActivityHistoryButton' onClick={this.handleSubmit} type="submit">Submit</button>
                </form>
                <table>
                    <tbody>
                        <tr key={1} className="trHead">
                            <th className="r3">CourseID</th>
                            <th className="r3">CourseName</th>
                            <th className="r3">Grade</th>
                        </tr>
                        {this.state.courses.map((course,index) =>
                        <tr key={index+1}>
                            <th className="r2">{course.courseID}</th>
                            <th className="r2">{course.courseName}</th>
                            <th className="r2">{course.grade}</th>
                        </tr>
                        )}
                    </tbody>
                </table>
                </div>
            </div>);
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

export default StudyResult;
