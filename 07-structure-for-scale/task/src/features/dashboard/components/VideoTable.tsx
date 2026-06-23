import { use } from "react";
import { getDashboardResources } from "../../../resources/dashboardResources";

export default function VideoTable() {

  const {videosPromise} = getDashboardResources();
  const videos = use(videosPromise);

  if(videos.length < 1) {
    return <div className="p-6 text-center text-gray-500">No videos uploaded yet!</div>;
  }
  
  return (
    <div className="col-span-2 bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4">
        Recent Videos
      </h2>
      <ul className="divide-y divide-gray-100 ">
        {videos.map((video) => (
          <li key={video.id} className="p-4 hover:bg-gray-50 flex items-center justify-between">
            <span className="font-medium text-gray-900">
              {video.title}
            </span>
            <span className="text-sm bg-blue-100 text-blue-800 px-3 rounded-full font-semibold">
              {video.views.toLocaleString()} views
            </span>
          </li>
        ))}
      </ul>
  </div>
  )
}
