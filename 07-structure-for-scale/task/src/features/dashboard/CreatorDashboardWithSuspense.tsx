import { Suspense } from "react";
import { CommentsSkeleton, StatsSkeleton, VideosSkeleton } from "../../components//Skeleton";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardSidebar from "../../components/DashboardSidebar";
import ErrorBoundary from "../../components/ErrorBoundary";
import RecentComments from "./components/RecentComments";
import Stats from "./components/Stats";
import VideoTable from "./components/VideoTable";


export default function CreatorDashboardWithSuspense() {
  return (
    <div className="flex bg-gray-100 text-gray-900 min-h-screen">
        {/* Sidebar Navigation */}
        <DashboardSidebar />

        <div className="flex-1 p-8">
          {/* Header */}
          <DashboardHeader />

          <ErrorBoundary>
            <Suspense fallback={<StatsSkeleton/>}>
              <Stats />
            </Suspense>
          </ErrorBoundary>
          
          <div className="grid grid-cols-3 gap-8">
            <Suspense fallback={<VideosSkeleton/>}>
              <VideoTable />
            </Suspense>

            <Suspense fallback={<CommentsSkeleton/>}>
              <RecentComments />
            </Suspense>
          </div>
        </div>
    </div>
  )
}
