import { tokenContext } from "./../context/tokenContext";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { store } from "../App";

interface IPostData {
  id: string;
  preview: string;
  title: string;
  text: string;
  score: number;
  commentsCount: number;
  created: Date;
  authorId: string;
  author: string;
  authorIcon: string;
}

interface IPostsData {
  after?: string;
  before?: string;
  children?: IPostData[];
}

export function usePostsData() {
  const [data, setData] = useState<IPostsData>({});
  // const token = useContext(tokenContext);
  const token = store.getState().token;

  useEffect(() => {
    if (token) {
      axios
        .get(
          "https://oauth.reddit.com/r/popular/best.json?show=all&raw_json=1&limit=15&sr_detail=true",
          {
            headers: { Authorization: `bearer ${token}` },
          }
        )
        // .then(console.log)
        .then((response) => {
          const result = response.data?.data;
          if (result) {
            setData({
              after: result.after,
              before: result.before,
              children: result.children.map((child: any) => {
                const childData = child.data;
                const srDetail = childData.sr_detail;
                return {
                  id: childData.id,
                  preview: childData.preview?.images[0]?.source?.url,
                  title: childData.title,
                  text: childData.selftext_html,
                  score: childData.score,
                  commentsCount: childData.num_comments,
                  created: new Date(parseInt(childData.created_utc) * 1000),
                  authorId: srDetail.name,
                  author: srDetail.display_name,
                  authorIcon: srDetail.icon_img,
                };
              }),
            });
          } else {
            setData({});
          }
        })
        .catch((err) => console.log(err.response.data));
    }
  }, [token]);

  return [data];
}
