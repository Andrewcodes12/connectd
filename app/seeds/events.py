from app.models import db, Event, user
from faker import Faker

# Adds a demo user, you can add other users here if you want
def seed_events():
    event1 = Event(
        title= ' Racquetball', event_description= 'Looking for 1 more to play a game of racquetball with', event_imgs= 'https://i.imgur.com/6hEbAJv.jpeg', event_date= '2020-01-01', event_city= 'Miami', event_state= 'FL', event_zipcode= '33140', category= 'Sports', user_id= 11
    )
    fake = Faker()
    for _ in range(10):
        event = Event(
            title = fake.text(),
            event_description = fake.text(),
            event_imgs = fake.image_url(),
            event_date = fake.date_time_between(start_date="-30d", end_date="+30d"),
            event_city = fake.city(),
            event_state = fake.state(),
            event_zipcode = fake.postcode(),
            category = fake.text(),
            user_id = fake.random_int(min=2, max=10)
        )
        db.session.add(event)
    db.session.add(event1)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_events():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
