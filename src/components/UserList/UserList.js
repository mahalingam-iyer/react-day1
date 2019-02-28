import React from 'react';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    componentDidMount() {
        fetch('https://my-json-server.typicode.com/mahalingam-iyer/demoapi/users')
            .then(response => response.json())
            .then(json => this.setState({ users: json }));
    }
    getUserList() {
        return (
            (this.state.users.length) ? (this.state.users.map((u,i) => {
                return (<tr key={i}>
                    <td>{u.username}</td>
                    <td>{u.password}</td>
                </tr>);
            })) : <tr><td colSpan={2}>No data</td></tr>
        );
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getUserList()}
                </tbody>
            </table>
        );
    }
}

export default UserList;