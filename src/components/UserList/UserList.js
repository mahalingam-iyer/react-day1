import React from 'react';
import PropTypes from 'prop-types';

class UserList extends React.Component {
    getUserList() {
        return (
            (this.props.users.length) ? (this.props.users.map((u, i) => {
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

UserList.propTypes = {
   users: PropTypes.arrayOf(PropTypes.shape({
     username: PropTypes.string.isRequired,
     password: PropTypes.string.isRequired
   })).isRequired
}
export default UserList;