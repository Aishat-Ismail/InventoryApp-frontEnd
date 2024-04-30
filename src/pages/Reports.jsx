import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,Rectangle,  Legend, ResponsiveContainer } from 'recharts';



const aisha = [
    {
      name: 'Jan',
      sales: 50000,
      purchase: 55000,
  
    },
    {
      name: 'Feb',
      sales: 48000,
      purchase: 58000,
  
    },
    {
        name: 'Mar',
        sales: 53000,
        purchase: 45000,
  
    },
    {
        name: 'Apr',
        sales: 44000,
        purchase: 37000,
    },
    {
        name: 'May',
        sales: 45000,
        purchase: 43000,
    },
    {
        name: 'Jun',
        sales: 42000,
        purchase: 29000,
    },
    {
        name: 'Jul',
        sales: 50000,
        purchase: 55000,
    },
    {
        name: 'Aug',
        sales: 42000,
        purchase: 45000,
    },
    {
        name: 'Sep',
        sales: 43000,
        purchase: 45000,
    },

  
  ];



const Reports =()=>{


    // Input date string
const dateString = "2024-04-30T19:02:47.634Z";

// Creating a new Date object with the input date string
const date = new Date(dateString);

// Formatting the date into a readable format
const readableDate = date.toLocaleString();

console.log(readableDate);




    return(

        <>
        <div style={{width: "800px", height: "400px"}}>


      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={aisha}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          outerRadius={20}
          barGap={"8"}
          barSize={"10"}
        
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="purchase" fill="#1570EF"  activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="sales" fill="#51CC5D" activeBar={<Rectangle fill="gold" stroke="purple" />} />
         
        </BarChart>
      </ResponsiveContainer>
        </div>
        </>
    )
}
export default Reports