import React from 'react';
import { render } from 'react-dom';

import { CardPanel, Input, Table } from 'react-materialize';

function TimetableRow(props) {
    const cells = props.labels.map((e) => <td> { e } </td>);

    return (
        <tr>
            { cells }
        </tr>
    );
}

function Timetable(props) {
    if (props.labels && props.periodNum) {
        const periodNum = parseInt(props.periodNum);
        const labels = props.labels.split(' ');
        const days = Math.trunc(labels.length / periodNum);
        const heads = [];
        const rows = [];

        heads.push(<th></th>);
        for (let i = 0; i < days; ++i) heads.push(<th> Day {i + 1} </th>)

        console.log(labels);
        for (let i = 0; i < periodNum; ++i) {
            const currentRow = [<span> Period {i + 1} </span>];
            for (let j = i; j < labels.length; j += periodNum)
                currentRow.push(labels[j]);
            rows.push(<TimetableRow labels={currentRow} />)
        }

        return (
            <div className="section">
                <h4> Timetable </h4>
                <div className="divider"></div>
                <CardPanel className="z-depth-5">
                    <Table centered hoverable>
                        <thead>
                            <tr>
                                { heads }
                            </tr>
                        </thead>
                        <tbody>
                            { rows }
                        </tbody>
                    </Table>
                </CardPanel>
            </div>
        );
    }

    return null;
}

class App extends React.Component {
    state = {
        labels: "",
        periodNum: null,
    };

    handleInput = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <React.Fragment>
                <nav>
                    <div className="nav-wrapper indigo">
                        <span className="brand-logo center"> Output visualizer </span>
                    </div>
                </nav>

                <div className="container">
                    <div className="section">
                        <Input
                            name="labels"
                            onChange={this.handleInput}
                            label="Tuple labels"
                        />

                        <Input
                            name="periodNum"
                            type="number"
                            onChange={this.handleInput}
                            label="Periods per day"
                        />
                    </div>

                    <Timetable
                        labels={this.state.labels}
                        periodNum={this.state.periodNum}
                    />
                </div>
            </React.Fragment>
        );
    }
}

render(<App />, document.getElementById('root'));
