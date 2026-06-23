import type { Comments, CreatorStats, VideoStats } from "../features/dashboard/types";

export const fetchStats = ():Promise<CreatorStats[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() < 0.5) {
        reject(new Error("There was an error while fetching stats!"))
      } else {
        resolve([
          {label: "view", value: "1.2M"},
          {label: "subs", value: "45K"},
          {label: "revenue", value: "$3, 400"},
        ])
      }
    }, 1500);
  })
} 

export const fetchVideos = (): Promise<VideoStats[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Vibe Coding Explained", views: 100, publishedAt:"" },
        { id: 2, title: "React 19 Features", views: 85, publishedAt:""},
      ])
    }, 1500);
  })
}

export const fetchComments = (): Promise<Comments[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, author: "Nasir Uddin", text: "Great video!", createdAt:"" },
        { id: 2, author: "John Doe", text: "Excellent video!", createdAt:"" }
      ])
    }, 1500);
  })
} 