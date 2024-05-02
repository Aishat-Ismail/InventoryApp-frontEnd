import { BarChart, Bar, Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip,Rectangle,  Legend, ResponsiveContainer } from 'recharts';



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

  const data = [
    {
      "name": "Jan",
      "ordered": 4000,
      "delivered": 2400,
  
    },
    {
      "name": "Feb",
      "ordered": 3000,
      "delivered": 1398,
     
    },
    {
      "name": "Mar",
      "ordered": 2000,
      "delivered": 9800,
    
    },
    {
      "name": "Apr",
      "ordered": 2780,
      "delivered": 3908,

    },
 

    
  ]
  



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
        <div style={{width: "800px", height: "400px", backgroundColor:"#fff", padding:"15px", borderRadius:"20px", margin:"20px 0px 0px 20px"}}>


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
          
        
          barCategoryGap={17} 
          
        
        >
          <CartesianGrid vertical={false} height='20' />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend iconType='circle' />
          <Bar dataKey="purchase" fill="#1570EF" radius={[20, 20, 0, 0]}  activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="sales" fill="#51CC5D" radius={[20, 20, 0, 0]}  activeBar={<Rectangle fill="gold" stroke="purple" />} />
         
        </BarChart>
      </ResponsiveContainer>
        </div>

        <br></br>
        <div style={{width: "500px", height: "300px", backgroundColor:"#fff", padding:"15px", borderRadius:"20px", margin:"20px 0px 0px 20px"}}>
          <AreaChart width={480} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorordered" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DF9B2D" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#C5A674" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colordelivered" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid vertical={false}  />
            <Tooltip />
            <Legend iconType='circle' />
            <Area type="monotone" dataKey="ordered" stroke="#DF9B2D" fillOpacity={1} fill="url(#colorordered)" />
            <Area type="monotone" dataKey="delivered" stroke="teal" fillOpacity={0}  />
          </AreaChart>
        </div>
        </>
    )
}
export default Reports