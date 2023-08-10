import { nanoid } from 'nanoid'
import Calendar from 'react-calendar'
import './form.css'
import { useState } from 'react'
import { formatDate } from '../../../utils/functions'
import { guests, hours } from '../../../utils/constants'

const Form = () => {
  const [date, setDate] = useState(new Date())
  const [people, setPeople] = useState('')
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectHour, setSelectHour] = useState('')
  const [book, setBook] = useState(false)

  function disableHours(value) {
    if (date.getHours() >= value[0] && value[1] === 0) {
      return true
    }
    if (date.getHours() >= value[0] && date.getMinutes() >= value[1] === 0) {
      return true
    }

    return false
  }
  function onChangeHour(event) {
    const value = event.target.value
    setSelectHour(value)
  }

  function onChangePeople(event) {
    const value = event.target.value
    setPeople(value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!people || !date || !selectHour) {
      return
    }

    setBook(true)
    setPeople('')
    setSelectHour('')
    setDate(new Date())
    setTimeout(() => {
      setBook(false)
    }, 3000)
  }
  return (
    <form onSubmit={handleSubmit} className="form-reservation" id="home">
      <div className="form-title">
        <div className="decor">
          <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
            <path
              fill="none"
              stroke="#9C7C57"
              strokeMiterlimit="10"
              d="M40.881 8.576L20.562.591.244 8.576"
            ></path>
            <path
              fill="none"
              stroke="#9C7C57"
              strokeMiterlimit="10"
              d="M40.881.591L20.562 8.576.243.591"
            ></path>
          </svg>
        </div>
        <h2>Book</h2>
        <div className="decor">
          <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
            <path
              fill="none"
              stroke="#9C7C57"
              strokeMiterlimit="10"
              d="M40.881 8.576L20.562.591.244 8.576"
            ></path>
            <path
              fill="none"
              stroke="#9C7C57"
              strokeMiterlimit="10"
              d="M40.881.591L20.562 8.576.243.591"
            ></path>
          </svg>
        </div>
      </div>

      {/* SELECT PEOPLE */}
      <select
        name="people"
        id="reservation"
        className="select-people"
        value={people}
        onChange={onChangePeople}
        disabled={showCalendar}
      >
        <option value="">Guest(s)</option>

        {guests.map(({ id, value }) => {
          return (
            <option key={id} value={value}>
              {value == 1 ? `${value} Person` : `${value} People`}
            </option>
          )
        })}
      </select>
      {/* DATE INPUT */}
      <div className="form-date">
        <input
          type="text"
          name="reservation"
          id="date"
          className="input-date"
          placeholder={formatDate(date)}
          value={formatDate(date)}
          onChange={(e) => setDate(formatDate(e.target.value))}
          onClick={() => setShowCalendar(!showCalendar)}
        />
        {/* CALENDAR */}
        <div
          className={`calendar-container ${
            showCalendar ? 'show-calendar-container' : ''
          }`}
        >
          <Calendar
            onChange={setDate}
            value={date}
            locale="en-GB"
            minDate={new Date()}
            onClickDay={() => setShowCalendar(false)}
          />
        </div>
      </div>
      {/* SELECT HOURS */}
      <select
        name="hours"
        id="reservation"
        className="select-hours"
        value={selectHour}
        onChange={onChangeHour}
        disabled={showCalendar}
      >
        <option value="">Choose an hour</option>
        {hours.map(({ id, name, value }) => {
          return (
            <option
              key={id}
              value={value}
              disabled={date.getHours() >= value[0] ? true : false}
            >
              {name}
            </option>
          )
        })}
      </select>
      {/* SUBMIT BUTTON */}
      <div
        className={`form-btn flex ${
          !date || !people || !selectHour ? 'form-btn-disabled' : ''
        }`}
      >
        <button type="submit" className="btn-book" disabled={book}>
          book now
        </button>
      </div>
      {book && <p className="form-confirmed">reservation confirmed</p>}
    </form>
  )
}
export default Form
