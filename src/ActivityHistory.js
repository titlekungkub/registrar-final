import React, { Component } from 'react';
import './css/ActivityHistory.css'

class ActivityHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activities : [],
            value : '2018'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        fetch('/activities/provideStudentActivities', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body:"studentID="+this.props.studentID+"&year="+this.state.value
        })
        .then(res => res.json())
        .then(items => {
            this.setState({
                activities : items
            })
        })
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch('/activities/provideStudentActivities', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body:"studentID="+this.props.studentID+"&year="+this.state.value
        })
        .then(res => res.json())
        .then(items => {
            this.setState({
                activities : items
            })
        })
    }
    render() {
        return (
            <div className='ActivityHistoryPage'>
                <p className='H1'>กิจกรรมที่นิสิตเคยเข้าร่วม</p>
                <form>
                    <select className='DropDown' onChange={this.handleChange}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                    </select>
                    <button className='ActivityHistoryButton' onClick={this.handleSubmit} type="submit">Submit</button>
                </form>
                <table>
                    <tbody>
                        <tr key={1}>
                            <th className='AddTable3'>กิจกรรม</th>
                            <th className='AddTable2'>เวลาจัดกิจกรรม</th>
                            <th className='AddTable2'>สถานที่จัดกิจกรรม</th>
                        </tr>
                        {this.state.activities.map((activity,index) =>
                        <tr key={index+1}>
                            <th>{activity.activityName}</th>
                            <th>{activity.activityTime}</th>
                            <th>{activity.location}</th>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ActivityHistory;
