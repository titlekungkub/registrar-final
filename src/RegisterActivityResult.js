import React, { Component } from 'react';
import './css/RegisterActivityResult.css';

class RegisterActivityResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activities : [],
        }
    }
    componentDidMount(){
        fetch('/activities/registerActivityResult', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body:"studentID="+this.props.studentID
        })
        .then(res => res.json())
        .then(members => {
            this.setState({
                activities : members
            })
        });
    }
    render() {
        return (
            <div className='RegisterActivityResultPage'>
                <p className='H1'>กิจกรรมที่นิสิตลงทะเบียนเข้าร่วม</p>
                <table>
                    <tbody>
                        <tr key={1}>
                            <th className='AddTable3'>กิจกรรม</th>
                            <th className='AddTable2'>เวลาจัดกิจกรรม</th>
                            <th className='AddTable2'>สถานที่จัดกิจกรรม</th>
                            <th className='AddTable2'>เวลาที่ลงทะเบียน</th>
                        </tr>
                        {this.state.activities.map((activity,index) =>
                        <tr key={index+1}>
                            <th>{activity.activityName}</th>
                            <th>{activity.activityTime}</th>
                            <th>{activity.location}</th>
                            <th>{activity.registerDate}</th>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RegisterActivityResult;
