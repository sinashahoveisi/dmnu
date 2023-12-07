import type {ResturantInterface} from 'types/resturant';

const information: ResturantInterface = {
  name: 'کافه يــولــو',
  description: 'خوش آمدید به کافه یولو، جایی که لذت را با طعم‌ها به اشتراک می‌گذاریم!',
  phone: '0921212121',
  location: {
    latitude: 35.795504187541,
    longitude: 51.434454782983,
    address: 'خیابان شریعتی، دویست متر بالاتر از مترو قیطریه، نبش کوچه عاج، پلاک 1811، کافه يــولــو'
  },
  shiftsWork: [
    {
      day: 'شنبه',
      time: {
        start: '06:00',
        end: '23:59'
      }
    },
    {
      day: 'یک‌شنبه',
      time: {
        start: '06:00',
        end: '23:59'
      }
    },
    {
      day: 'دوشنبه',
      time: {
        start: '06:00',
        end: '23:59'
      }
    },
    {
      day: 'سه‌شنبه',
      time: {
        start: '06:00',
        end: '23:59'
      }
    },
    {
      day: 'چهارشنبه',
      time: {
        start: '06:00',
        end: '23:59'
      }
    },
    {
      day: 'پنج‌شنبه',
      time: {
        start: '06:00',
        end: '23:59'
      }
    }
  ]
};

Object.freeze(information);
export default information;
