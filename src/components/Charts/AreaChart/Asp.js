import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { useStore } from "../../../Context/store";

const ASPChart = ({ data, stroke, stopColor }) => {
  const {state} = useStore();

  return (
    <ResponsiveContainer height="100%" width="80%">
      <AreaChart
        width={400}
        height={40}
        data={state.data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#9a575a" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#9a575a" stopOpacity={0} />
          </linearGradient>
        </defs>

        <Tooltip />
        <Area
          type="monotone"
          dataKey="asp"
          stroke="#9a575a"
          fillOpacity={1}
          fill="url(#colorUv2)"
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default ASPChart;
