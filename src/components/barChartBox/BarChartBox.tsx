import "./barChartBox.scss";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';



type Props = {
    title : string;
    chartData : object[];
    dataKey : string;
    color : string;
}

const BarChartBox = (props : Props) => {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip 
                contentStyle={{background:"#2a3447", borderRadius:"5px"}}
                label={{display:"none"}}
                cursor={{fill:"none"}}
            />   
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
