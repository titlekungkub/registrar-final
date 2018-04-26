import React, { Component } from 'react';
import RegisterActivityItem from './RegisterActivityItem';
import './css/RegisterActivity.css';

class RegisterActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialActivities : [],
            activities : [],
            selectedActivities : []
        }
        this.filterList = this.filterList.bind(this);
    }
    filterList(event){
        let updatedList = this.state.initialActivities;
        updatedList = updatedList.filter(function(item){
            return item.ActivityName.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({activities: updatedList});
    }
    componentDidMount(){
        fetch('/activities/provideAvailableActivity', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
        })
        .then(res => res.json())
        .then(members => {
            this.setState({initialActivities: members});
            this.setState({activities: this.state.initialActivities});
        });
    }
    handleSubmit(){
        this.state.selectedActivities.map(item => {
            fetch('/activities/registerActivity', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
                body:"studentID="+this.props.studentID+"&activityID="+item.activityID+"&activityNo="+item.activityNo
            })
        })
    }
    render() {
        return (
            <div className='RegisterActivityPage'>
                <p className='H1'>กิจกรรมที่ต้องการลงทะเบียน</p>
                <table>
                    <tbody>
                        <tr>
                            <th className='AddTable3'>กิจกรรม</th>
                            <th className='AddTable2'>เวลาจัดกิจกรรม</th>
                            <th className='AddTable2'>สถานที่จัดกิจกรรม</th>
                        </tr>
                        {this.state.selectedActivities.map(activity => <tr>
                            <th>{activity.activityName}</th>
                            <th>{activity.activityTime}</th>
                            <th>{activity.location}</th>
                        </tr>)}
                    </tbody>
                </table>
                <p className='H1'>กิจกรรมหอพักนิสิต</p>
                <table>
                    <tbody>
                        <tr key={1}>
                            <th className='AddTable3'>กิจกรรม</th>
                            <th className='AddTable2'>รายละเอียดกิจกรรม</th>
                            <th className='AddTable2'>เวลาจัดกิจกรรม</th>
                            <th className='AddTable2'>สถานที่จัดกิจกรรม</th>
                            <th className='AddTable1'>จำนวนที่รับ</th>
                            <th></th>
                        </tr>
                        {this.state.activities.map(activity => <RegisterActivityItem
                        add={(activityID,activityNo,activityName,activityTime,location) => this.setState({selectedActivities: [...this.state.selectedActivities,{activityID,activityNo,activityName,activityTime,location}]})}
                        remove={activityID => this.setState({selectedActivities: this.state.selectedActivities.filter(item => item.activityID != activityID)})}
                        item={activity} />)}
                    </tbody>
                </table>
                <button className = 'AddCourseButton' onClick={() => this.handleSubmit()}>Submit</button>
            </div>
        );
    }
}

export default RegisterActivity;
