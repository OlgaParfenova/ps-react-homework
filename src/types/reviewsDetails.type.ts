export type ReviewsDetails = {
  id: number;
  page: number;
  results: ReviewsResult[];
  total_pages: number;
  total_results: number;
};

export type ReviewsResult = {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

export type AuthorDetails = {
  name: string;
  username: string;
  avatar_path?: string;
  rating?: number;
};
