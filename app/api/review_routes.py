from flask import Blueprint, jsonify, request, Flask
from flask_login import current_user, login_required
from app.models import db, User, Event, Review
from app.forms import ReviewForm


review_routes = Blueprint('reviews', __name__)

# Get all reviews
@review_routes.route('/', methods=['GET'])
def get_all_reviews():
    reviews = Review.query.all()
    return jsonify([review.to_dict() for review in reviews])



# Get all reviews for an event
@review_routes.route('/<int:id>', methods=['GET'])
def get_reviews(id):
    """
    Get all reviews for an event
    """
    reviews = Review.query.filter_by(event_id=id)
    return jsonify([review.to_dict() for review in reviews])


# add a review to an event
@review_routes.route('/new', methods=['POST'])
def create_review(id):
    """
    Add a review to an event
    """
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review = Review(
            created_at = form.data['created_at'],
            updated_at = form.data['updated_at'],
            review_body=form.data['review_body'],
            review_rating=form.data['review_rating'],
            user_id=form.data['user_id'],
            event_id=id
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()

    return jsonify(form.errors)


# Update a review on a event
@review_routes.route('/edit/<int:id>', methods=['PUT'])
def update_review(id):
    """
    Update a review on a event
    """
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review = Review.query.get(id)
        review.created_at = form.data['created_at']
        review.updated_at = form.data['updated_at']
        review.review_body = form.data['review_body']
        review.review_rating = form.data['review_rating']
        review.user_id = form.data['user_id']
        db.session.commit()
        return review.to_dict()

    return jsonify(form.errors)


# Delete a review on a event
@review_routes.route('/<int:id>', methods=['DELETE'])
def delete_review(id):
    """
    Delete a review on a event
    """
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return review.to_dict()



# sort reviews on event by rating
@review_routes.route('/<int:id>/sort/rating', methods=['GET'])
def sort_reviews_rating(id):
    """
    Sort reviews on event by rating
    """
    reviews = Review.query.filter_by(event_id=id).order_by(Review.review_rating.desc())
    return jsonify([review.to_dict() for review in reviews])


# sort reviews on event by date
@review_routes.route('/<int:id>/sort/date', methods=['GET'])
def sort_reviews_date(id):
    """
    Sort reviews on event by date
    """
    reviews = Review.query.filter_by(event_id=id).order_by(Review.created_at.desc())
    return jsonify([review.to_dict() for review in reviews])
