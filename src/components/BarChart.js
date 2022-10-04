import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5 }}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} dataKey="count" />
        <Tooltip />
        <Bar dataKey="count" fill="#86B0F8" barSize="75px" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarChartComponent;
