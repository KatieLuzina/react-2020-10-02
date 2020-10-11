import React, { useMemo } from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

const Restaurant = ({ restaurant }) => {
  const { menu, reviews } = restaurant;

  const averageRating = useMemo(() => {
    const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

  return (
    <div>
      <Rate rating={averageRating} />
      <div>
        <Menu menu={menu} />
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};

export default Restaurant;
