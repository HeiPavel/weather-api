export const round = (prop) => {
    if (prop > -0.5 && prop < 0) return 0;
    return parseFloat(prop).toFixed();
  }

export const windDirection = (deg) => {
    deg = parseFloat(deg);
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'];
    const index = parseFloat((deg/22.5).toFixed());
    return directions[index];
  }

export const getCurrentDate = () => {
    const date = new Date();
    return {
      day: date.getDate(),
      month: new Intl.DateTimeFormat('en-US', {month: 'short'}).format(date),
      weekday: new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    }
  }
  