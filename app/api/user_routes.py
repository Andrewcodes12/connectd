from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User, Rsvp, Event
from app.forms import edit_user_form

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
@login_required
def edit_user(id):
    form = edit_user_form.EditUserForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        user = User.query.get(id)
        user.username = form.data['username']
        user.email = form.data['email']
        user.first_name = form.data['first_name']
        user.last_name = form.data['last_name']
        user.city = form.data['city']
        user.state = form.data['state']
        user.zipcode = form.data['zipcode']
        user.user_bio = form.data['user_bio']
        user.user_image = form.data['user_image']
        db.session.commit()
        return user.to_dict()
    return jsonify(form.errors)



@user_routes.route('/<int:id>/profile')
def user_profile(id):

    user = User.query.get(id)
    rsvps = Rsvp.query.filter(Rsvp.user_id == id).all()
    eventsAttending = [Event.query.get(rsvp.event_id) for rsvp in rsvps]
    eventsHosting = Event.query.filter(Event.user_id == id).all()
    return {'eventsAttending': [event.to_dict() for event in eventsAttending], 'eventsHosting': [event.to_dict() for event in eventsHosting]}
