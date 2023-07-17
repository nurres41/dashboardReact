import "./chartBox.scss";
import { Link } from "react-router-dom";
import { LineChart, Line,ResponsiveContainer } from 'recharts';

const ChartBox = () => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src="/user.svg" alt="" />
          <span>Total Users</span>
        </div>
        <h1>11.412</h1>
        <Link to="/">View All</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percent">45%</span>
          <span className="duration">This Month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
