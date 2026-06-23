import { useEffect, useState } from "react";
import type { Comments, CreatorStats, VideoStats } from "../types";

export default function useDashboardData() {
  const [stats, setStats] = useState<CreatorStats[]>([]);
  const [videos, setVideos] = useState<VideoStats[]>([]);
  const [comments, setComments] = useState<Comments[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
      let isMounted = true;

      const fetchData = async () => {
          try {
              await new Promise((resolve) => setTimeout(resolve, 1000));

              if (isMounted) {
                  setStats([
                    {label: "view", value: "1.2M"},
                    {label: "subs", value: "45K"},
                    {label: "revenue", value: "$3, 400"},
                  ]);
                  setVideos([
                      { id: 1, title: "Vibe Coding Explained", views: 100, publishedAt:"" },
                      { id: 2, title: "React 19 Features", views: 85, publishedAt:""},
                  ]);
                  setComments([
                    { id: 1, author: "Nasir Uddin", text: "Great video!", createdAt:"" },
                    { id: 2, author: "Nasir Uddin", text: "Excellent video!", createdAt:"" }
                  ]);
                  setIsLoading(false);
              }
          } catch (err) {
            setError(`Failed to fetch data ${err?.message}`);
            setIsLoading(false);
          }
      };
      fetchData();

      return () => {
        isMounted = false;
      };
  }, []);

  return {
    stats,
    videos,
    comments,
    isLoading,
    error
  }
}
