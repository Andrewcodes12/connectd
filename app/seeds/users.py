from app.models import db, User
from faker import Faker

# Adds a demo user, you can add other users here if you want
def seed_users():
    Demo = User(
        username='Demo', email='demo@demo.com', password='password',
        first_name='Demo', last_name='User', city='Miami', state='FL',
        zipcode='33140', user_image='https://i.imgur.com/6hEbAJv.jpeg',
        user_bio='This is a demo account, feel free to edit this bio or the profile picture.'
    )
    fake = Faker()
    for _ in range(10):
        user = User(
            username=fake.user_name(),
            email=fake.email(),
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            city=fake.city(),
            state=fake.state(),
            zipcode=fake.postcode(),
            user_image=fake.image_url(),
            user_bio=fake.text(),
            hashed_password = 'password'
        )
        db.session.add(user)
    db.session.add(Demo)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
