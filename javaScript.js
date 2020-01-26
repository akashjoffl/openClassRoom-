class Show {
    constructor(title, numberOfSeasons) {
        this.title = title;
        this.numberOfSeasons = numberOfSeasons;
        this.ratings = [];    
        this.averageORating = 0;    
    }
    addRating(rating) {
        this.ratings.push(rating);    
        let sum = 0;
        for (let rating of this.ratings) {
            sum += ratings;
        }
        this.averageRating = sum / this.ratings.length;
    }
}

