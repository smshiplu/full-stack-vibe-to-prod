
import DashboardHeader from "../../components/DashboardHeader";
import Sidebar from "../../components/DashboardSidebar";
import RecentComments from "../../features/dashboard/components/RecentComments";
import StatCard from "../../features/dashboard/components/StatCard";
import VideoTable from "../../features/dashboard/components/VideoTable";
import useDashboardData from "../../features/dashboard/hooks/useDashboardData";


export default function CreatorDashboard() {


    const { stats, videos, comments, isLoading, error  } = useDashboardData()


    if (isLoading) {
        return (
            <div className="p-10 text-center text-xl">Loading Dashboard...</div>
        );
    }

    if (error) {
        return <div className="text-red-500 p-10">{error}</div>;
    }

    return (
        <div className="flex bg-gray-100 text-gray-900 min-h-screen">
            {/* Sidebar Navigation */}
            
            <Sidebar />

            <div className="flex-1 p-8">
                {/* Header */}
                <DashboardHeader />

                {/* Stats Cards */}
                <div className="flex flex-wrap items-center justify-evenly gap-4">
                    {stats.map(stat => (
                        <StatCard
                            key={stat.label}
                            label={stat.label}
                            value={stat.value}
                        />
                    ))}
               </div>

                {/* Data Table & Comments - All mashed together */}
                <div className="grid grid-cols-3 gap-8">
                    <VideoTable videos={videos} />
                    <RecentComments comments={comments}/>
                </div>
            </div>
        </div>
    );
}