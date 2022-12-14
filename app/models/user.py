from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(255), nullable=False)
    state = db.Column(db.String(255), nullable=False)
    zipcode = db.Column(db.String(10), nullable=False)
    user_image = db.Column(db.String(255),  default='https://i.imgur.com/6hEbAJv.jpeg')
    user_bio = db.Column(db.String(255), nullable=False, default='Here to meet like minded people and create memories.')

    # one to many relatiopnship with events
    events = db.relationship('Event', backref='user', lazy=True)

    # relationship to rsvp table
    rsvps = db.relationship('Rsvp', backref='user', lazy=True)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'city': self.city,
            'state': self.state,
            'zipcode': self.zipcode,
            'user_image': self.user_image,
            'user_bio': self.user_bio,
        }
