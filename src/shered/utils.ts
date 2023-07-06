 const time = new Date();
 const month = time.getMonth();
 const date = time.getDate();
 const day = time.getDay();
 const hour = time.getHours();
 
 const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
 const minutes = time.getMinutes();
 const ampm = hour >=12 ? 'pm' : 'am'

export const API_KEY ='ecd0eb155f6df491dfbd4cbeca31f647';

export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const calcutateTime = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes) +ampm
export const calculateDate = days[day] + ', ' + date+ ' ' + months[month]