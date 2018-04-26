import React, { Component } from 'react';
import './css/PayResult.css';

class PayResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : []
        }
    }
    componentDidMount(){
        fetch('/courses/providePayHistory', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body:"studentID="+this.props.studentID
        })
        .then(res => res.json())
        .then(members => {
            this.setState({
                items: members
            })
        })
    }
    render() {
        return (
            <div className='PayResultPage'>
                <p className='H1'>ประวัติการชำระค่าธรรมเนียมการศึกษา</p>
                <table>
                    <tbody>
                        <tr>
                            <th className='AddTable2'>Semester</th>
                            <th className='AddTable2'>DateTime</th>
                            <th className='AddTable2'>Amount</th>
                            <th className='AddTable2'>พิมพ์ใบเสร็จ</th>
                        </tr>
                        {this.state.items.map(item =>
                        <tr>
                            <th>{item.semester}</th>
                            <th>{item.transactionDate}</th>
                            <th>{item.price}</th>
                            <th><button>Click</button></th>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PayResult;
