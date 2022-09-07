import datetime
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField, IntegerField, DateField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError



class EventForm(FlaskForm):
    title = StringField('Event Title', validators=[DataRequired()])
    event_description = TextAreaField('Description', validators=[DataRequired()])
    category = SelectField('Category', choices=[('', 'Select Category'), ('VideoGames', 'Video Games'), ('Sports', 'Sports'), ('Clubbing', 'Clubbing'), ('Boating', 'Boating'), ('Board Games', 'Board Games'), ('Study Groups', 'Study Groups'), ('Other', 'Other')], validators=[DataRequired()])
    event_city = StringField('City', validators=[DataRequired()])
    event_state = StringField('State', validators=[DataRequired()])
    event_zipcode = IntegerField('Zipcode', validators=[DataRequired()])
    event_date = DateField('Date', validators=[DataRequired()])
    event_imgs = StringField('Event Images', validators=[DataRequired()])
    user_id = IntegerField('User ID', validators=[DataRequired()])


    def validate_start_time(self, start_time):
        if start_time.data < datetime.datetime.now():
            raise ValidationError('Start time must be in the future.')

    def validate_end_time(self, end_time):
        if end_time.data < datetime.datetime.now():
            raise ValidationError('End time must be in the future.')
