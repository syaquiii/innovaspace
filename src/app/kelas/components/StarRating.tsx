import { Star, StarHalf } from "lucide-react";
import React from "react";

const StarRating = ({
  rating,
  className,
}: {
  rating: number;
  className: string;
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [];

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`full-${i}`} className="star full">
        <Star fill="#3484fb" className={`${className} text-normal-default`} />
      </span>
    );
  }

  // Add half star (if applicable)
  if (hasHalfStar) {
    stars.push(
      <span key="half" className="star half relative">
        <StarHalf
          fill="#3484fb"
          className={`${className} text-normal-default`}
        />
        <Star className={`${className} absolute top-0 text-normal-default`} />
      </span>
    );
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className={`${className} text-normal-default`}>
        <Star className={`${className} text-normal-default`} />
      </span>
    );
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
