import { useState } from "react";

const Calendar = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [calendar, setCalendar] = useState([]);

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    if (year && month) {
      const totalDays = daysInMonth(year, month - 1);
      const firstDayOfWeek = new Date(year, month - 1, 1).getDay();
      const calendarArray = [];
      let dayCounter = 1;

      for (let i = 0; i < 6; i++) {
        const week = [];

        for (let j = 0; j < 7; j++) {
          if ((i === 0 && j < firstDayOfWeek) || dayCounter > totalDays) {
            week.push("");
          } else {
            week.push(dayCounter);
            dayCounter++;
          }
        }

        calendarArray.push(week);
      }

      setCalendar(calendarArray);
    } else {
      setCalendar([]);
    }
  };

  return (
    <div>
      <h2>Календарь</h2>
      <div>
        <label htmlFor="year">Год: </label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="month">Месяц (1-12): </label>
        <input
          type="number"
          id="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
      </div>
      <button onClick={generateCalendar}>Создать календарь</button>
      {calendar.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Пн</th>
              <th>Вт</th>
              <th>Ср</th>
              <th>Чт</th>
              <th>Пт</th>
              <th>Сб</th>
              <th>Вс</th>
            </tr>
          </thead>
          <tbody>
            {calendar.map((week, index) => (
              <tr key={index}>
                {week.map((day, dayIndex) => (
                  <td key={dayIndex}>{day}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Calendar;
