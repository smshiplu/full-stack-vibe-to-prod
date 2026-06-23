import { use } from "react";

import { getDashboardResources } from "../../../resources/dashboardResources";
import StatCard from "./StatCard";
export default function Stats() {
  const {statsPromise} = getDashboardResources();
  const stats = use(statsPromise);
  return (
    <div className="flex flex-wrap items-baseline justify-center md:justify-around gap-4">
      {stats.map(stat => (
          <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
          />
      ))}
  </div>
  )
}
