from app.models import db, Review
from faker import Faker

# Adds a demo user, you can add other users here if you want
def seed_reviews():
    fake = Faker()
    for _ in range(10):
        review = Review(
            created_at = fake.date_time_between(start_date="-30d", end_date="+30d"),
            updated_at = fake.date_time_between(start_date="-30d", end_date="+30d"),
            review_body = fake.text(),
            review_rating = fake.random_int(min=1, max=5),
            user_id = fake.random_int(min=1, max=13),
            event_id = fake.random_int(min=1, max=13)
        )
        db.session.add(review)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
