var ReviewsCollection = Backbone.Collection.extend({

  model: ReviewModel,

  addReview: function (name, text) {
    console.log(this)
    this.create({
      name: name,
      text: text
    }, { wait: true })
  }
});
