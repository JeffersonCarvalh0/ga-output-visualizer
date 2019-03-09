import React, { useState } from 'react'
import { render } from 'react-dom'

import { CardPanel, Input, Table } from 'react-materialize'

const TimetableRow = props => {
  const cells = props.labels.map(e => <td> {e} </td>)

  return <tr>{cells}</tr>
}

const Timetable = props => {
  if (props.labels && props.periodNum) {
    const periodNum = parseInt(props.periodNum)
    const labels = props.labels.split(' ')
    const days = Math.trunc(labels.length / periodNum)
    const heads = []
    const rows = []

    heads.push(<th />)
    for (let i = 0; i < days; ++i) heads.push(<th> Day {i + 1} </th>)

    for (let i = 0; i < periodNum; ++i) {
      const currentRow = [<span> Period {i + 1} </span>]
      for (let j = i; j < labels.length; j += periodNum) currentRow.push(labels[j])
      rows.push(<TimetableRow labels={currentRow} />)
    }

    return (
      <div className="section">
        <h4> Timetable </h4>
        <div className="divider" />
        <CardPanel className="z-depth-5">
          <Table centered hoverable>
            <thead>
              <tr>{heads}</tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </CardPanel>
      </div>
    )
  }

  return null
}

const App = props => {
  const [labels, setLabels] = useState('')
  const [periodNum, setperiodNum] = useState(0)

  return (
    <>
      <nav>
        <div className="nav-wrapper indigo">
          <span className="brand-logo center"> Output visualizer </span>
        </div>
      </nav>

      <div className="container">
        <div className="section">
          <Input name="labels" onChange={e => setLabels(e.target.value)} label="Tuple labels" />
          <Input name="periodNum" type="number" onChange={e => setPeriodNum(e.target.value)} label="Periods per day" />
        </div>

        <Timetable labels={labels} periodNum={periodNum} />
      </div>
    </>
  )
}

render(<App />, document.getElementById('root'))
