import datetime
import os
from sqlite3 import Date

from flask import Blueprint, jsonify, request, Flask
from flask_login import current_user, login_required
from app.models import db, User, Event, Review
from flask_sqlalchemy import SQLAlchemy


event_routes = Blueprint('events', __name__)


# Get all events
@event_routes.route('/', methods=['GET'])
def get_events():
    events = Event.query.all()
    return jsonify([event.to_dict() for event in events])
