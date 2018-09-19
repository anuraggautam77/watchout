
import React, { Component } from 'react';
import '../style/css/adminlogin.scss';
import RegistrationForm from '../components/admin/register';


class AdminReg extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    render() {
        return (
                 <RegistrationForm/> 
                );
    }
}

export default AdminReg;
