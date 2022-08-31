from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User
from app.forms import signup_form

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
# @login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


# load a users events
@user_routes.route('/<int:id>/events')
# @login_required
def user_events(id):
    user = User.query.get(id)
    return {'events': [event.to_dict() for event in user.events]}

# edit user profile
@user_routes.route('/<int:id>/edit', methods=['PUT'])
# @login_required
def edit_user(id):
    """
    Edit user profile
    """
    form = signup_form.SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        user = User.query.get(id)
        user.username = form.data['username']
        user.email = form.data['email']
        user.hashed_password = form.data['password']
        user.first_name = form.data['first_name']
        user.last_name = form.data['last_name']
        user.city = form.data['city']
        user.state = form.data['state']
        user.zipcode = form.data['zipcode']
        user.user_image = form.data['user_image']
        user.user_bio = form.data['user_bio']

        db.session.commit()
        return user.to_dict()
