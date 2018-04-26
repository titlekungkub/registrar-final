import React, { Component } from 'react';
import ReduceCourse from './ReduceCourse';
import AddCourse from './AddCourse';
import './css/ManageCourse.css'

class ManageCourse extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='ManageCoursePage'>
                <ReduceCourse studentID={this.props.studentID} />
                <AddCourse studentID={this.props.studentID} />
            </div>
        );
    }
}

export default ManageCourse;
