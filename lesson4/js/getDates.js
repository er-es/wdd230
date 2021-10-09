


const options1= { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const date1= new Date(2012, 5);

const dateTimeFormat= new Intl.DateTimeFormat('en-UK', options1);
console.log(dateTimeFormat.format(date1));
   