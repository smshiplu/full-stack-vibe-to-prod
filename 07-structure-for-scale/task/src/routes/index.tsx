import { createFileRoute } from "@tanstack/react-router";

// import CreatorDashboard from "../features/dashboard/CreatorDashboard";
import CreatorDashboardWithSuspense from "../features/dashboard/CreatorDashboardWithSuspense";


export const Route = createFileRoute("/")({
    component: CreatorDashboardWithSuspense,
});

<CreatorDashboardWithSuspense/>
