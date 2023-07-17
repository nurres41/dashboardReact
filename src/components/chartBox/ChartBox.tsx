import "./chartBox.scss";
import { Link } from "react-router-dom";
import { LineChart, Line,ResponsiveContainer, Tooltip } from 'recharts';


type Props ={
  color : string;
  icon : string;
  title : string;
  dataKey : string;
  number : number | string;
  percentange : number;
  chartData : object[];
}

const ChartBox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{color:props.color}}>View All</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip 
                contentStyle={{background:"transparent",border:"none"}}
                labelStyle={{display:"none"}}
                position={{x:15,y:50}}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentange" style={{color:props.percentange < 0 ? "tomato" : "limegreen"}}>45%</span>
          <span className="duration">This Month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
