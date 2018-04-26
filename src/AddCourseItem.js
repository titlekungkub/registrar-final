import React, { Component } from 'react';

class AddCourseItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status : 0,
            numberOfStudent : null,
            capacity : null,
            isWarn : false,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        fetch('/courses/checkRegisteredStudent', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body:"courseID="+this.props.item.courseID+"&sectionNumber="+this.props.item.sectionNumber+"&semester="+this.props.item.semester
        })
        .then(res => res.json())
        .then(members => {
            this.setState({numberOfStudent: members[0].registeredStudent})
        })

        fetch('/courses/checkCourseCap', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body:"courseID="+this.props.item.courseID+"&sectionNumber="+this.props.item.sectionNumber+"&semester="+this.props.item.semester
        })
        .then(res => res.json())
        .then(members => {
            // {console.log(this.props)}
            if(members[0] != undefined){
                this.setState({capacity: members[0].capacity});
            }
        })
    }
    warning(){
        if(this.state.isWarn == true){
            return <th>The course is full</th>
        }else{
            return <th></th>
        }
    }
    handleClick(){
        if(this.state.status == 0){
            var isAvailable = null;
            fetch('/courses/checkRegisteredStudent', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
                body:"courseID="+this.props.item.courseID+"&sectionNumber="+this.props.item.sectionNumber+"&semester="+this.props.item.semester
            })
            .then(res => res.json())
            .then(members => {
                // กำหนดค่าให้ isAvailable
                if(members[0].registeredStudent < this.state.capacity){
                    isAvailable = true;
                }else{
                    isAvailable = false;
                }

                // เช็คว่า course ที่จะลงอยู่ในสถานะไหน ลงได้ไหม
                if(isAvailable == true){
                    this.props.add(this.props.item.courseID,this.props.item.courseName,this.props.item.credit,this.props.item.sectionNumber,this.props.item.midtermDate,this.props.item.finalDate,this.props.item.semester)
                    this.setState({status: 1});
                    this.setState({isWarn : false});
                }else{
                    this.setState({isWarn : true});
                }
            })
        }else{
            this.props.remove(this.props.item.courseID,this.props.item.sectionNumber)
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
    render() {
        return (
            <tr>
                <th>{this.props.item.courseID}</th>
                <th>{this.props.item.courseName}</th>
                <th>{this.props.item.credit}</th>
                <th>{this.props.item.sectionNumber}</th>
                <th>{this.state.numberOfStudent + "/" + this.state.capacity}</th>
                <th>{this.props.item.midtermDate}</th>
                <th>{this.props.item.finalDate}</th>
                {this.renderButton()}
                {this.warning()}
            </tr>
        );
    }
}

export default AddCourseItem;