
import {  Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip,  Legend,  } from 'recharts';

const data = [
    {
      "name": "Jan",
      "revenue": 4000,
      "profit": 2400,
  
    },
    {
      "name": "Feb",
      "revenue": 3000,
      "profit": 1398,
     
    },
    {
      "name": "Mar",
      "revenue": 2000,
      "profit": 9800,
    
    },
    {
      "name": "Apr",
      "revenue": 2780,
      "profit": 3908,

    },
    {
        "name": "May",
        "revenue": 2780,
        "profit": 3908,
  
      },
      {
        "name": "Jun",
        "revenue": 2780,
        "profit": 3908,
  
      },
      {
        "name": "Jul",
        "revenue": 2780,
        "profit": 3908,
  
      },
      {
        "name": "Aug",
        "revenue": 2780,
        "profit": 3908,
  
      },
      {
        "name": "Sep",
        "revenue": 2780,
        "profit": 3908,
  
      },
      {
        "name": "Oct",
        "revenue": 2780,
        "profit": 3908,
  
      },
      {
        "name": "Nov",
        "revenue": 2780,
        "profit": 3908,
  
      },
      {
        "name": "Dec",
        "revenue": 2780,
        "profit": 3908,
  
      },
  
 

    
  ]

const Orders =()=>{

    return(

        <>
        <div>
        <br></br>
        <div style={{width: "95%", height: "500px", backgroundColor:"#fff", padding:"15px", borderRadius:"20px", margin:"20px 0px 0px 20px"}}>
          <AreaChart width={1200} height={470} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorrevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DF9B2D" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#C5A674" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorprofit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid vertical={false}  />
            <Tooltip />
            <Legend iconType='circle' />
            <Area type="monotone" dataKey="revenue" stroke="#DF9B2D" fillOpacity={1} fill="url(#colorrevenue)" />
            <Area type="monotone" dataKey="profit" stroke="teal" fillOpacity={0}  />
          </AreaChart>
        </div>
        </div>
        </>
    )
}
export default Orders