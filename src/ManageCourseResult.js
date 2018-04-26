import React, { Component } from 'react';

class ManageCourseResult extends Component {
    constructor(props){
        super(props);
        this.state = {
            courses : [],
            totalCredit : 0
        }
    }
    componentDidMount(){
        fetch('/courses/provideRegisteredCourse', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body:"studentID="+this.props.studentID
        })
        .then(res => res.json())
        .then(items => {
            this.setState({courses: items})
        })

        fetch('/courses/calculateTotalRegisteredCredit', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body:"studentID="+this.props.studentID
        })
        .then(res => res.json())
        .then(items => {
            this.setState({totalCredit: items[0].totalCredit})
        })

    }
    render() {
        return (
            <div className='RegisterCourseResultPage'>
                <p className='H1'>รายวิชาของนิสิต</p>
                <table>
                    <tbody>
                        <tr key={1}>
                            <th className='RegisterTable'>CourseID</th>
                            <th className='CourseNameStyle'>CourseName</th>
                            <th className='RegisterTable'>Credit</th>
                            <th className='RegisterTable'>Section</th>
                            <th className='RegisterTable'>RegisterTime</th>
                        </tr>
                        {this.state.courses.map((course,index) =>
                        <tr key={index+1}>
                            <th>{course.courseID}</th>
                            <th>{course.courseName}</th>
                            <th>{course.credit}</th>
                            <th>{course.sectionNumber}</th>
                            <th>{course.registerTime}</th>
                        </tr>
                        )}
                    </tbody>
                </table>
                <p className='H1'>Your total credit is {this.state.totalCredit}.</p>
            </div>
        );
    }
}

export default ManageCourseResult;