import React, { useState } from 'react'
import { render } from 'react-dom'

import { CardPanel, Input, Table } from 'react-materialize'

const TimetableRow = props => {
  const cells = props.tuples.map(e => (
    <td> {e.grade === undefined ? e : `subject=${e.subject}, teacher=${e.teacher}`} </td>
  ))

  return <tr>{cells}</tr>
}

const Timetable = props => {
  if (props.input && props.periodNum && props.days) {
    const periodNum = parseInt(props.periodNum)
    const days = parseInt(props.days)
    const tuples = props.input.filter(tuple => tuple.grade === props.grade)
    const heads = []
    const rows = []

    heads.push(<th />)
    for (let i = 0; i < days; ++i) heads.push(<th> Day {i + 1} </th>)

    const arr = Array(days).fill("Free")
    console.log(...arr)
    for (let i = 0; i < periodNum; ++i) {
      const currentRow = [<span> <b> Period {i + 1} </b> </span>, ...arr]
      rows.push(currentRow.slice())
    }

    console.log(rows)

    for (let tuple of tuples)
      rows[tuple.period % (days + 1)][Math.trunc(tuple.period / (days + 1)) + 1] = tuple

    for (let i = 0; i < rows.length; ++i) rows[i] = <TimetableRow tuples={rows[i]} />

    return (
      <div className="section">
        <h4> Grade { props.grade } </h4>
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
  const [input, setInput] = useState({})
  const [periodNum, setPeriodNum] = useState(0)
  const [classesNum, setClassesNum] = useState(0)
  const [days, setDays] = useState(0)

  const generateTimetables = () => {
    const timeTables = [];
    for (let i = 0; i < classesNum; ++i)
      timeTables.push(<Timetable input={input} periodNum={periodNum} grade={i} days={days} key={i} />)
    return timeTables
  }

  return (
    <>
      <nav>
        <div className="nav-wrapper indigo">
          <span className="brand-logo center"> Output visualizer </span>
        </div>
      </nav>

      <div className="container">
        <div className="section">
          <Input name="input" onChange={e => setInput(JSON.parse(e.target.value))} label="Input" />
          <Input name="periodNum" type="number" onChange={e => setPeriodNum(e.target.value)} label="Periods per day" />
          <Input name="classesNum" type="number" onChange={e => setClassesNum(e.target.value)} label="Number of classes" />
          <Input name="days" type="number" onChange={e => setDays(e.target.value)} label="Number of school days per week" />
        </div>

        { generateTimetables() }
      </div>
    </>
  )
}

render(<App />, document.getElementById('root'))
