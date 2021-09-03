import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const LineType = (props) => {
    return (
        <LineChart width={400} height={250} data={props.data}
                   margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    );
}

export default LineType;