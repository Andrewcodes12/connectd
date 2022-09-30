from app.models import db, User
from faker import Faker

# Adds a demo user, you can add other users here if you want
def seed_users():
    Demo = User(
        username='Gill Bates', email='demo@demo.com', hashed_password='password',
        first_name='Demo', last_name='User', city='Chicago', state='IL',
        zipcode='60007', user_image='https://i.imgur.com/33sp4nT.jpeg',
        user_bio='Gill Bates thinks you should really hire Andrew Fava. His love for programming stems from his love for solving problems. He is a full-stack developer who is proficient in Python, JavaScript, React, Redux, Flask, SQLAlchemy, PostgreSQL, and more.'
    )
    Dummy = User(
        username='Beff Jesoz', email='dummy@demo.com', hashed_password='password',
        first_name='Dummy', last_name='User', city='San Francisco', state='CA',
        zipcode='94016', user_image='https://i.imgur.com/Zkcpe3k.jpeg',
        user_bio='Beff Jesoz thinks you should hire Andrew Fava. Hes passionate, hardworking, and loves learning. He would be a great asset to your team!'
    )
    Test = User(
        username='Cark Muban', email='test@demo.com', hashed_password='password',
        first_name='Test', last_name='User', city='Miami', state='FL',
        zipcode='33140', user_image='https://i.imgur.com/FaAAo7Y.jpeg',
        user_bio='Cark Muban thinks you should strongly consider hiring Andrew Fava. His knack for problem solving and his passion for learning make him a great candidate for any team.'
    )

    Andrew = User(
        username='Andrew', email='andrew@demo.com', hashed_password='password',
        first_name='Andrew', last_name='Fava', city='Miami', state='FL',
        zipcode='33140', user_image='https://i.imgur.com/6hEbAJv.jpeg',
        user_bio='This is a demo account, feel free to edit any of the users information.'
    )
    HireMe = User(
        username='Hire Andrew Fava', email='a@demo.com', hashed_password='password',
        first_name='Hire', last_name='Andrew Fava', city='New York', state='NY',
        zipcode='10020', user_image='https://i.imgur.com/6hEbAJv.jpeg',
        user_bio="Andrew Fava's past expereince as an entrepreneur has provided me with the skills necessary to be a successful software engineer. Having worked for myself for the past 6 years, I have learned how to work independently and how to manage my time effectively."
    )



    # fake = Faker()
    # for _ in range(10):
    #     user = User(
    #         username=fake.user_name(),
    #         email=fake.email(),
    #         first_name=fake.first_name(),
    #         last_name=fake.last_name(),
    #         city=fake.city(),
    #         state=fake.state(),
    #         zipcode=fake.postcode(),
    #         user_image=fake.image_url(),
    #         user_bio=fake.text(),
    #         hashed_password = 'password'
    #     )
    #     db.session.add(user)

    db.session.add(Demo)
    db.session.add(Dummy)
    db.session.add(Test)
    db.session.add(Andrew)
    db.session.add(HireMe)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
