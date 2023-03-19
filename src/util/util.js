export const round = (prop) => {
    const floor = Math.floor(prop);
    return (floor <= prop - 0.5) ? Math.ceil(prop) : floor;
  }

export const windDirection = (deg) => {
    if (deg > 340 || deg <= 10) return 'N';
    const directions = ['NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    let sector = Math.ceil((deg)/10);
    const multiplier = Math.floor((sector - 1)/9);
    if (multiplier >= 1) sector -= multiplier;
    const index = sector > 1 ? Math.floor(sector/2) - 1 : Math.floor(sector/2);
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
  