export interface Discussion {
    id: string;               // _id.toString()
    author: {
      id: string;
      fname: string;
      avatar?: string;
    };
    content: string;
    img?: string;
    url?: string;
    likeCount: number;
    commentCount: number;
    createdAt: string;        // formatted
  }
  