import React from "react";
import moment from "moment";

const Results = props => (

    <div>
        <table className="table search-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Firstname </th>
                    <th>Surname</th>
                    <th>Email</th>

                    <th>Room ID</th>
                    <th>check in date</th>
                    <th>check out date</th>
                    <th>Total DaysIN</th>
                </tr>
            </thead>

            <tbody>
                {
                    props.results.map(booking => <TableRow booking={booking} />
                    )

                }
            </tbody>
        </table>
    </div>
);
const TableRow = (props) => {
    return (
        <tr>
            <td>{props.booking.title}</td>
            <td>{props.booking.firstName}</td>
            <td>{props.booking.surname}</td>
            <td>{props.booking.email}</td>

            <td>{props.booking.roomId}</td>
            <td>{props.booking.checkInDate}</td>
            <td>{props.booking.checkOutDate}</td>
            <td>{moment(props.booking.checkOutDate).diff(props.booking.checkInDate, 'days')}</td>
        </tr>
    )
}

export default Results