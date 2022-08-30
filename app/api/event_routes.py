from flask import Blueprint, jsonify, request, Flask
from flask_login import current_user, login_required
from app.models import db, User, Event, Review
from flask_sqlalchemy import SQLAlchemy
from app.forms import new_event_form

event_routes = Blueprint('events', __name__)


# Get all events
# ordered by newest first
@event_routes.route('/', methods=['GET'])
def get_events():
    """
    Get all events
    """
    events = Event.query.all()
    return jsonify([event.to_dict() for event in events])



# Get event by id
@event_routes.route('/<int:id>', methods=['GET'])
def get_event(id):
    """
    Get event by id
    """
    event = Event.query.get(id)
    return jsonify(event.to_dict())


# Create event
@event_routes.route('/', methods=['POST'])
def create_event():
    """
    Create event
    """
    form = new_event_form.EventForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        event = Event(
            title=form.data['title'],
            event_description=form.data['event_description'],
            category=form.data['category'],
            event_city=form.data['event_city'],
            event_state=form.data['event_state'],
            event_zipcode=form.data['event_zipcode'],
            event_date=form.data['event_date'],
            event_imgs=form.data['event_imgs'],
            user_id=form.data['user_id']
        )
        db.session.add(event)
        db.session.commit()
        return event.to_dict()

    return jsonify(form.errors)

# Update event
@event_routes.route('/<int:id>', methods=['PUT'])
def update_event(id):
    """
    Update event
    """
    form = new_event_form.EventForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        event = Event.query.get(id)
        event.title = form.data['title']
        event.event_description = form.data['event_description']
        event.category = form.data['category']
        event.event_city = form.data['event_city']
        event.event_state = form.data['event_state']
        event.event_zipcode = form.data['event_zipcode']
        event.event_date = form.data['event_date']
        event.event_imgs = form.data['event_imgs']

        db.session.commit()
        return event.to_dict()

    return jsonify(form.errors)

# Delete event
@event_routes.route('/<int:id>/delete', methods=['DELETE'])
def delete_event(id):
    """
    Delete event
    """
    event = Event.query.get(id)
    db.session.delete(event)
    db.session.commit()
    return event.to_dict()


# Search for events by clicking a category
@event_routes.route('/search/<string:category>', methods=['GET'])
def search_events(category):
    """
    Search for events by category
    """
    events = Event.query.filter_by(category=category)
    return jsonify([event.to_dict() for event in events])



# search for events by typing in a city
@event_routes.route('/search/city/<string:city>', methods=['GET'])
def search_events_city(city):
    """
    Search for events by city
    """
    events = Event.query.filter_by(event_city=city)
    return jsonify([event.to_dict() for event in events])


