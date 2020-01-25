const calculateAverageRating = (ratings) => {
    if (ratings.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let rating of ratings) {
        sum += rating;
    }
    const result = sum / ratings.length;
    return result;
  }

  export { calculateAverageRating };
  