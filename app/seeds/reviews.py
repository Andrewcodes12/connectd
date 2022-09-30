from app.models import db, Review
from faker import Faker

# Adds a demo user, you can add other users here if you want

def seed_reviews():
    review1 = Review(
        user_id=1,
        review_body='this was so fun',
        created_at='2022-10-02',
        updated_at='2022-10-02',
        review_rating=5,
        event_id=1
    )

    review2 = Review(
        user_id=2,
        review_body='Had such a great time',
        created_at='2022-11-02',
        updated_at='2022-11-02',
        review_rating=4,
        event_id=2
    )

    review3 = Review(
        user_id=4,
        review_body='You can delete this review',
        created_at='2022-12-02',
        updated_at='2022-12-02',
        review_rating=1,
        event_id=3
    )

    review4 = Review(
        user_id=3,
        review_body='This was a great event',
        created_at='2022-10-12',
        updated_at='2022-10-12',
        review_rating=5,
        event_id=1
    )

    review5 = Review(
        user_id=1,
        review_body='I had a great time',
        created_at='2022-11-12',
        updated_at='2022-11-12',
        review_rating=1,
        event_id=2
    )

    review6 = Review(
        user_id=2,
        review_body='ehh it was alright',
        created_at='2023-12-12',
        updated_at='2023-12-12',
        review_rating=3,
        event_id=3
    )

    review7 = Review(
        user_id=4,
        review_body='You can delete this review',
        created_at='2022-10-15',
        updated_at='2022-10-15',
        review_rating=1,
        event_id=10
    )

    review8 = Review(
        user_id=3,
        review_body='This was a great event',
        created_at='2022-11-15',
        updated_at='2022-11-15',
        review_rating=5,
        event_id=9
    )

    review9 = Review(
        user_id=5,
        review_body='I had a great time',
        created_at='2022-12-15',
        updated_at='2022-12-15',
        review_rating=1,
        event_id=8
    )

    review10 = Review(
        user_id=2,
        review_body='ehh it was alright',
        created_at='2023-01-15',
        updated_at='2023-01-15',
        review_rating=3,
        event_id=7
    )

    review11 = Review(
        user_id=4,
        review_body='You can delete this review',
        created_at='2022-10-15',
        updated_at='2022-10-15',
        review_rating=1,
        event_id=6
    )


    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.add(review11)

    db.session.commit()




# def seed_reviews():
#     fake = Faker()
#     for _ in range(10):
#         review = Review(
#             created_at = fake.date_time_between(start_date="-30d", end_date="+30d"),
#             updated_at = fake.date_time_between(start_date="-30d", end_date="+30d"),
#             review_body = fake.text(),
#             review_rating = fake.random_int(min=1, max=5),
#             user_id = fake.random_int(min=1, max=13),
#             event_id = fake.random_int(min=1, max=13)
#         )
#         db.session.add(review)
#     db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
