import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const PieType = (props) => {
    return (
            <PieChart width={400} height={400}>
                <Pie data={props.data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={props.data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
    );
};

export default PieType;