import React, { Component } from 'react';
import './css/RegisterCourseItem.css';

class RegisterCourseItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        if(this.state.status == 0){
            this.props.add(this.props.item.courseID,this.props.item.sectionNumber,this.props.item.semester,this.props.item.courseName,this.props.item.credit,this.props.item.fname)
            this.setState({status: 1});
        }else{
            this.props.remove(this.props.item.courseID,this.props.item.sectionNumber,this.props.item.semester)
            this.setState({status: 0});
        }
    }
    renderButton(){
        if(this.state.status == 0){
            return <th><button className='RegisterButton' onClick={this.handleClick} type="submit">+</button></th>
        }else{
            return <th><button className='RegisterButton' onClick={this.handleClick} type="submit">-</button></th>
        }
    }
    render(){
        return(
                <tr>
                    <th>{this.props.item.courseID}</th>
                    <th>{this.props.item.courseName}</th>
                    <th>{this.props.item.credit}</th>
                    <th>{this.props.item.sectionNumber}</th>
                    <th>{this.props.item.fname}</th>
                    {this.renderButton()}
                </tr>
        );
    }
}

export default RegisterCourseItem;