import { fetchComments, fetchStats, fetchVideos } from "../api";
import type { Comments, CreatorStats, VideoStats } from "../features/dashboard/types";

let statsPromise: Promise<CreatorStats[]>
let videosPromise: Promise<VideoStats[]>;
let commentsPromise: Promise<Comments[]>;

export const createDashboardResources = () => {
  statsPromise = fetchStats();
  videosPromise = fetchVideos();
  commentsPromise = fetchComments();
}

export const getDashboardResources = () => {
  return {
    statsPromise,
    videosPromise,
    commentsPromise
  }
} 