from app.models import db, Event, user
from faker import Faker

# Adds a demo user, you can add other users here if you want
def seed_events():
    event1 = Event(
        title= 'Tennis', event_description= 'Need 1 more to play a game of racquetball with', event_imgs= 'https://i.imgur.com/0sl51sM.jpeg',
        event_date='2022-09-29', event_city= 'Miami', event_state= 'FL', event_zipcode= '33140', category= 'Sports',
        user_id= 11
    )
    event2 = Event(
        title= 'Basketball', event_description= 'Trying to run a full court game', event_imgs= 'https://i.imgur.com/rlBxnZk.png',
        event_date= '2022-10-11', event_city= 'Miami', event_state= 'FL', event_zipcode= '33140', category= 'Sports',
        user_id= 1
    )
    event3 = Event(
        title= 'Call Of Duty', event_description= 'Anyone want to play warzone?', event_imgs= 'https://i.imgur.com/SgVryWc.jpeg',
        event_date= '2022-09-15', event_city= 'Miami', event_state= 'FL', event_zipcode= '33140', category= 'VideoGames',
        user_id= 3
    )
    event4 = Event(
        title= 'Anyone to go clubbing?', event_description= 'Looking for a group of people to enjoy the nighlife with', event_imgs= 'https://i.imgur.com/SFFYFUq.jpeg',
        event_date= '2022-11-14', event_city= 'Miami', event_state= 'FL', event_zipcode= '33140', category= 'Clubbing',
        user_id= 1
    )
    event5 = Event(
        title= 'Come enjoy the Miami weather with me', event_description= 'Join me on my 45ft boat', event_imgs= 'https://i.imgur.com/D8CoAEd.jpeg',
        event_date= '2022-12-24', event_city= 'Miami', event_state= 'FL', event_zipcode= '33140', category= 'Boating',
        user_id= 9
    )
    event6 = Event(
        title= 'Wanna play Chess?', event_description= 'Grandmaster looking for some competition, tired of noobs.', event_imgs= 'https://i.imgur.com/QWgltRG.jpeg',
        event_date= '2022-11-09', event_city= 'Miami', event_state= 'FL', event_zipcode= '33140', category= 'BoardGames',
        user_id= 7
    )
    event7 = Event(
        title= 'I need a Math tutor!!!', event_description= 'I have a big math test coming up and I need help, please help!!!', event_imgs= 'https://i.imgur.com/oqPFSTK.jpeg',
        event_date= '2022-09-17', event_city= 'Miami', event_state= 'FL', event_zipcode= '33140', category= 'StudyGroups',
        user_id= 10
    )

    fake = Faker()
    for _ in range(10):
        event = Event(
            title = 'This is another type of event',
            event_description = 'Other type of event',
            event_imgs = fake.image_url(),
            event_date = fake.date_time_between(start_date="-30d", end_date="+30d"),
            event_city = fake.city(),
            event_state = fake.state(),
            event_zipcode = fake.postcode(),
            category = 'Other',
            user_id = fake.random_int(min=1, max=13)
        )
        db.session.add(event)

    db.session.add(event1)
    db.session.add(event2)
    db.session.add(event3)
    db.session.add(event4)
    db.session.add(event5)
    db.session.add(event6)
    db.session.add(event7)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_events():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
