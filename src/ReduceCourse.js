import React, { Component } from 'react';
import ReduceCourseItem from './ReduceCourseItem';
import './css/ReduceCourse.css';

class ReduceCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registeredCourses : [],
            status : 0,
            selectedCourses : []
        }
        this.handleClick = this.handleClick.bind(this)
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
            this.setState({registeredCourses: items})
        })
    }
    handleClick(){
        this.state.selectedCourses.map(course =>
            fetch('/courses/reduceRegisteredCourse', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
                body:"studentID="+this.props.studentID+"&courseID="+course.courseID+"&sectionNumber="+course.sectionNumber+"&semester="+course.semester
            })
        )
    }
    render() {
        return (
            <div>
                <p className='H1'>รายการวิชาที่ต้องการลด</p>
                <table>
                    <tbody>
                        <tr>
                            <th className='ReduceTable1'>CourseID</th>
                            <th className='ReduceTable2'>CourseName</th>
                            <th className='ReduceTable3'>Credit</th>
                            <th className='ReduceTable3'>Section</th>
                            <th className='ReduceTable1'>MidtermDate</th>
                            <th className='ReduceTable1'>FinalDate</th>
                        </tr>
                        {this.state.selectedCourses.map(course => <tr>
                            <th>{course.courseID}</th>
                            <th>{course.courseName}</th>
                            <th>{course.credit}</th>
                            <th>{course.sectionNumber}</th>
                            <th>{course.midtermDate}</th>
                            <th>{course.finalDate}</th>
                        </tr>)}
                    </tbody>
                </table>
                <p className='H1'>ลดรายวิชา</p>
                <table>
                    <tbody>
                        <tr key={1}>
                            <th className='ReduceTable1'>CourseID</th>
                            <th className='ReduceTable2'>CourseName</th>
                            <th className='ReduceTable3'>Credit</th>
                            <th className='ReduceTable3'>Section</th>
                            <th className='ReduceTable1'>MidtermDate</th>
                            <th className='ReduceTable1'>FinalDate</th>
                            <th></th>
                        </tr>
                        {this.state.registeredCourses.map(course => <ReduceCourseItem
                        add={(courseID,courseName,credit,sectionNumber,midtermDate,finalDate,semester) => this.setState({selectedCourses: [...this.state.selectedCourses,{courseID,courseName,credit,sectionNumber,midtermDate,finalDate,semester}]})}
                        remove={(courseID,sectionNumber) => this.setState({selectedCourses: this.state.selectedCourses.filter(item => (item.courseID != courseID) || (item.sectionNumber != sectionNumber) )})}
                        item={course} />)}
                    </tbody>
                </table>
                <button className='ReduceCourseButton'onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}

export default ReduceCourse;
