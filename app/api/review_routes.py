from flask import Blueprint, jsonify, request, Flask
from flask_login import current_user, login_required
from app.models import db, User, Event, Review
from app.forms import ReviewForm


review_routes = Blueprint('reviews', __name__)


# Get all reviews for an event
@review_routes.route('/<int:id>', methods=['GET'])
def get_reviews(id):
    """
    Get all reviews for an event
    """
    reviews = Review.query.filter_by(event_id=id)
    return jsonify([review.to_dict() for review in reviews])


# add a review to an event
@review_routes.route('/<int:id>', methods=['POST'])
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
