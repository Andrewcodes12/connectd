from flask import Blueprint, jsonify, request, Flask
from flask_login import current_user, login_required
from app.models import db, User, Rsvp,Event
from flask_sqlalchemy import SQLAlchemy

rsvp_routes = Blueprint('rsvps', __name__)

# get all rsvps
@rsvp_routes.route('/', methods=['GET'])
# @login_required
def get_all_rsvps():
    """
    Get all rsvps
    """
    rsvps = Rsvp.query.all()
    return jsonify([rsvp.to_dict() for rsvp in rsvps])


# Get all rsvps on an event
# ordered by newest first
@rsvp_routes.route('/<int:id>', methods=['GET'])
# @login_required
def get_rsvps(id):
    """
    Get all rsvps on an event
    """
    rsvps = Rsvp.query.filter_by(event_id=id)
    return jsonify([rsvp.to_dict() for rsvp in rsvps])


# create rsvp on an event
@rsvp_routes.route('/<int:id>', methods=['POST'])
@login_required
def create_rsvp(id):
    """
    Create rsvp on an event
    """
    rsvp = Rsvp(
        user_id=current_user.id,
        # user_id=1,
        event_id=id,
        rsvp= True
    )
    db.session.add(rsvp)
    db.session.commit()
    return rsvp.to_dict()


# delete rsvp on an event
@rsvp_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_rsvp(id):
    """
    Delete rsvp on an event
    """
    # rsvp = Rsvp.query.get(id)
    # db.session.delete(rsvp)
    # db.session.commit()

    rsvp = Rsvp.query.filter_by(event_id=id).first()
    db.session.delete(rsvp)
    db.session.commit()
    return rsvp.to_dict()


# update rsvp on an event
@rsvp_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_rsvp(id):
    """
    Update rsvp on an event
    """
    rsvp = Rsvp.query.get(id)
    rsvp.user_id = request.json['user_id']
    rsvp.event_id = request.json['event_id']
    db.session.commit()
    return rsvp.to_dict()
