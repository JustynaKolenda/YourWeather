 const time = new Date();
 const month = time.getMonth();
 const date = time.getDate();
 const day = time.getDay();

export const API_KEY ='ecd0eb155f6df491dfbd4cbeca31f647';

export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const calculateDate = days[day] + ', ' + date+ ' ' + months[month]

export type ICoord = {
    lat: number,
    lon: number,
}