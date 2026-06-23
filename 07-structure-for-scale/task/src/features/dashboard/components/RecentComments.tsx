import { use } from "react";
import { getDashboardResources } from "../../../resources/dashboardResources";

export default function RecentComments() {

  const { commentsPromise } = getDashboardResources();
  const comments = use(commentsPromise);

  if(comments.length < 1 ) {
    return <div className="p-6 text-center text-gray-800">You don't have any comment posted!</div>
  }
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">
            Recent Comments
        </h2>
        {comments.map((c) => (
          <div
            key={c.id}
            className="border-b p-3 text-sm text-gray-600"
          >
          {c.text}
          </div>
        ))}
    </div>
  )
}
