from .db import db


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)
    review_body = db.Column(db.Text, nullable=False)
    review_rating = db.Column(db.Integer, nullable=False)
    
    # one to many relationship with user
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    # one to many relationship with event
    event_id = db.Column(db.Integer, db.ForeignKey('events.id'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'review_body': self.review_body,
            'review_rating': self.review_rating,
            'user_id': self.user_id,
            'event_id': self.event_id,
        }

    def __repr__(self):
        return '<review %r>' % self.id
