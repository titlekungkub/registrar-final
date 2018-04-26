import React, { Component } from 'react';
import AddCourseItem from './AddCourseItem'
import './css/AddCourse.css'

class AddCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialCourses : [],
            courses : [],
            selectedCourses : []
        }
        this.filterList = this.filterList.bind(this);
    }
    filterList(event){
        let updatedList = this.state.initialCourses;
        updatedList = updatedList.filter(function(item){
            return (item.courseName.toLowerCase().search(event.target.value.toLowerCase()) !== -1) || (item.courseID.toLowerCase().search(event.target.value.toLowerCase()) !== -1);
        });
        this.setState({courses: updatedList});
    }
    componentDidMount(){
        fetch('/courses', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
        })
        .then(res => res.json())
        .then(members => {
            this.setState({initialCourses: members});
            this.setState({courses: this.state.initialCourses});
        });
    }
    handleSubmit(){
        this.state.selectedCourses.map(item => {
            fetch('/courses/checkEligibility', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
                body:"studentID="+this.props.studentID+"&courseID="+item.courseID
            })
            .then(res => res.json())
            .then(members => {
                if(members.length == 0){
                    fetch('/courses/addCourse', {
                        method: 'POST',
                        headers: new Headers({
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }),
                        body:"studentID="+this.props.studentID+"&courseID="+item.courseID+"&sectionNumber="+item.sectionNumber+"&semester="+item.semester
                    })
                }
            })
        });
    }
    render() {
        return (
            <div className='AddCourse'>
                <p className='H1'>รายการวิชาที่ต้องการเพิ่ม</p>
                <table>
                    <tbody>
                        <tr>
                            <th className='AddTable1'>CourseID</th>
                            <th className='AddTable2'>CourseName</th>
                            <th className='AddTable3'>Credit</th>
                            <th className='AddTable3'>Section</th>
                            <th className='AddTable1'>MidtermDate</th>
                            <th className='AddTable1'>FinalDate</th>
                            <th></th>
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
                <button className='AddCourseButton' onClick={() => this.handleSubmit()}>Submit</button>
                <p className='H1'>เพิ่มรายวิชา</p>
                <table>
                    <tbody>
                        <tr key={1}>
                            <th className='AddTable1'>CourseID</th>
                            <th className='AddTable2'>CourseName</th>
                            <th className='AddTable3'>Credit</th>
                            <th className='AddTable3'>Section</th>
                            <th className='AddTable3'>Capacity</th>
                            <th className='AddTable1'>MidtermDate</th>
                            <th className='AddTable1'>FinalDate</th>
                            <th></th>
                        </tr>
                        {this.state.courses.map(course => <AddCourseItem
                        add={(courseID,courseName,credit,sectionNumber,midtermDate,finalDate,semester) => this.setState({selectedCourses: [...this.state.selectedCourses,{courseID,courseName,credit,sectionNumber,midtermDate,finalDate,semester}]})}
                        remove={(courseID,sectionNumber) => this.setState({selectedCourses: this.state.selectedCourses.filter(item => (item.courseID != courseID) || (item.sectionNumber != sectionNumber) )})}
                        item={course} />)}
                        {/* {console.log(this.state.courses)} */}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AddCourse;
