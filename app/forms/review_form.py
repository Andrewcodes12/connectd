from email.policy import default
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SelectField, BooleanField, DateTimeField
from wtforms.fields.core import IntegerField, DateField
from wtforms.validators import DataRequired, Email, ValidationError
import datetime

class ReviewForm(FlaskForm):
    created_at = DateField('created_at', validators=[DataRequired()], default=datetime.datetime.now())
    updated_at = DateField('updated_at', validators=[DataRequired()], default=datetime.datetime.now())
    review_body = TextAreaField('review_body', validators=[DataRequired()])
    review_rating = IntegerField('review_rating', validators=[DataRequired()], default=0)
    user_id = IntegerField('user_id', validators=[DataRequired()])


    def validate_start_time(self, start_time):
        if start_time.data < datetime.datetime.now():
            raise ValidationError('Start time must be in the future.')

    def validate_end_time(self, end_time):
        if end_time.data < datetime.datetime.now():
            raise ValidationError('End time must be in the future.')
