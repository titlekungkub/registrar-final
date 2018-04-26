import React, { Component } from 'react';

class RegisterActivityItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status : 0,
            numberOfStudent : null,
            isWarn : false,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        fetch('/activities/provideActivityRegisteredStudent', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body:"activityID="+this.props.item.activityID+"&activityNo="+this.props.item.activityNo
        })
        .then(res => res.json())
        .then(members => {
            this.setState({numberOfStudent: members[0].currentStudent});
        });
    }
    handleClick(){
        if(this.state.status == 0){
            var isAvailable = null;
            fetch('/activities/provideActivityRegisteredStudent', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
                body:"activityID="+this.props.item.activityID+"&activityNo="+this.props.item.activityNo
            })
            .then(res => res.json())
            .then(members => {
                if(members[0].currentStudent < this.props.item.capacity){
                    isAvailable = true;
                }else{
                    isAvailable = false;
                }
                if(isAvailable == true){
                    this.props.add(this.props.item.activityID,this.props.item.activityNo,this.props.item.activityName,this.props.item.activityTime,this.props.item.location)
                    this.setState({status: 1});
                    this.setState({isWarn : false});
                }else{
                    this.setState({isWarn : true});
                }
            })
        }else{
            this.props.remove(this.props.item.activityID)
            this.setState({status: 0});
        }
    }
    renderButton(){
        if(this.state.status == 0){
            if(this.state.numberOfStudent < this.state.capacity){
                return <th><button className='RegisterButton' onClick={this.handleClick} type="submit">+</button></th>
            }else{
                return <th><button className='RegisterButton' onClick={this.handleClick} type="submit">+</button></th>
            }
        }else{
            return <th><button className='RegisterButton' onClick={this.handleClick} type="submit">-</button></th>
        }
    }
    warning(){
        if(this.state.isWarn == true){
            return <th>The activity is full</th>
        }else{
            return <th></th>
        }
    }
    render() {
        return (
            <tr>
                <th>{this.props.item.activityName}</th>
                <th>{this.props.item.description}</th>
                <th>{this.props.item.activityTime}</th>
                <th>{this.props.item.location}</th>
                <th>{this.state.numberOfStudent + "/" + this.props.item.capacity}</th>
                {this.renderButton()}
                {this.warning()}
            </tr>
        );
    }
}

export default RegisterActivityItem;