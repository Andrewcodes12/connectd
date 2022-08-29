from .db import db


class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    event_description = db.Column(db.Text(), nullable=False)
    event_imgs = db.Column(db.Text(), nullable=False)
    event_date = db.Column(db.DateTime(), nullable=False)
    event_time = db.Column(db.Time(), nullable=False)
    event_city = db.Column(db.String(255), nullable=False)
    event_state = db.Column(db.String(255), nullable=False)
    event_zipcode = db.Column(db.String(10), nullable=False)
    category = db.Column(db.String(255), nullable=False)
    #many to one relationship with user
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    # relationship with reviews
    reviews = db.relationship('Review', backref='event', lazy=True)


    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'event_description': self.event_description,
            'event_imgs': self.event_imgs,
            'event_date': self.event_date,
            'event_time': self.event_time,
            'event_city': self.event_city,
            'event_state': self.event_state,
            'event_zipcode': self.event_zipcode,
            'category': self.category,
            'user_id': self.user_id,
        }
