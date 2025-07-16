import ReviewsClient from "./ReviewsClient";
import { fetchReviews } from "@/app/utils/fetchReviews";

export default async function ReviewsWrapper() {
  const reviews = await fetchReviews();
  return <ReviewsClient reviews={reviews} />;
}
