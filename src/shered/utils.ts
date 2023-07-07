 const time = new Date();
 const month = time.getMonth();
 const date = time.getDate();
 const day = time.getDay();

export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const calculateDate = days[day] + ', ' + date+ ' ' + months[month]

export type ICoord = {
    lat: number,
    lon: number,
}