app.component('review-form', {
    template: `
        <form class="review-form" @submit.prevent="onSubmit">
            <h3>Leave a review</h3>
            <label for="name">Name:</label>
            <input id="name" v-model="name">

            <label for="review">Review:</label>
            <textarea id="review" v-model="review"></textarea>

            <label for="rating">rating:</label>
            <select id="rating" v-model="rating">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>

            <input class="button" type="submit" value="Submit">
        </form>
    `,

    data() {
        return {
            name: '',
            review: '',
            rating: null,
        };
    },

    methods: {
        onSubmit() {
            if (! this.name || ! this.review || ! this.rating ) {
                alert('Review is incomplete! Please fill all the fields');
                return;
            }
            
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
            };

            this.$emit('review-submitted', productReview);
            this.name = '';
            this.review = '';
            this.rating = null;
        }
    }
});