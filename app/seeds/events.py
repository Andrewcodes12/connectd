from app.models import db, Event, user
from faker import Faker

# Adds a demo user, you can add other users here if you want
def seed_events():
    event1 = Event(
        title= 'Tennis anyone?', event_description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod volutpat turpis, et congue eros gravida vitae. Sed vel nisl vitae magna interdum molestie at quis diam. Vestibulum sit amet tortor eget nunc luctus venenatis. Sed mattis sit amet sapien eu fringilla. Vivamus commodo eget neque ac imperdiet. Donec porttitor euismod nisl. Suspendisse ac lobortis orci, eget tempus nisl. Morbi tristique, diam eget egestas tempus, mi velit condimentum risus, quis commodo leo magna nec mi. Nullam porta odio ut lacus faucibus, sed facilisis est ullamcorper', event_imgs= 'https://images.unsplash.com/photo-1560012057-4372e14c5085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
        event_date='2022-10-23', event_city= 'Miami', event_state= 'FL', event_zipcode= '33140', category= 'Sports',
        user_id= 4
    )
    event2 = Event(
        title= 'tryna run a quick 3v3?', event_description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod volutpat turpis, et congue eros gravida vitae. Sed vel nisl vitae magna interdum molestie at quis diam. Vestibulum sit amet tortor eget nunc luctus venenatis. Sed mattis sit amet sapien eu fringilla. Vivamus commodo eget neque ac imperdiet. Donec porttitor euismod nisl. Suspendisse ac lobortis orci, eget tempus nisl. Morbi tristique, diam eget egestas tempus, mi velit condimentum risus, quis commodo leo magna nec mi. Nullam porta odio ut lacus faucibus, sed facilisis est ullamcorper.', event_imgs= 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80',
        event_date= '2022-10-11', event_city= 'New York', event_state= 'NY', event_zipcode= '10020', category= 'Sports',
        user_id= 1
    )
    event3 = Event(
        title= 'WarZone anyone? trying to get a dub.', event_description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod volutpat turpis, et congue eros gravida vitae. Sed vel nisl vitae magna interdum molestie at quis diam. Vestibulum sit amet tortor eget nunc luctus venenatis. Sed mattis sit amet sapien eu fringilla. Vivamus commodo eget neque ac imperdiet. Donec porttitor euismod nisl. Suspendisse ac lobortis orci, eget tempus nisl. Morbi tristique, diam eget egestas tempus, mi velit condimentum risus, quis commodo leo magna nec mi. Nullam porta odio ut lacus faucibus, sed facilisis est ullamcorper.', event_imgs= 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        event_date= '2022-09-15', event_city= 'San Francisco', event_state= 'CA', event_zipcode= '94016', category= 'VideoGames',
        user_id= 3
    )
    event4 = Event(
        title= 'Anyone to go clubbing? its my birthday', event_description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod volutpat turpis, et congue eros gravida vitae. Sed vel nisl vitae magna interdum molestie at quis diam. Vestibulum sit amet tortor eget nunc luctus venenatis. Sed mattis sit amet sapien eu fringilla. Vivamus commodo eget neque ac imperdiet. Donec porttitor euismod nisl. Suspendisse ac lobortis orci, eget tempus nisl. Morbi tristique, diam eget egestas tempus, mi velit condimentum risus, quis commodo leo magna nec mi. Nullam porta odio ut lacus faucibus, sed facilisis est ullamcorper.', event_imgs= 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        event_date= '2022-11-14', event_city= 'Chicago', event_state= 'IL', event_zipcode= '60007', category= 'Clubbing',
        user_id= 4
    )
    event5 = Event(
        title= 'Come enjoy the Miami weather with me', event_description= 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', event_imgs= 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1688&q=80',
        event_date= '2022-12-24', event_city= 'Miami', event_state= 'FL', event_zipcode= '33140', category= 'Boating',
        user_id= 2
    )
    event6 = Event(
        title= 'Wanna play Chess???', event_description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod volutpat turpis, et congue eros gravida vitae. Sed vel nisl vitae magna interdum molestie at quis diam. Vestibulum sit amet tortor eget nunc luctus venenatis. Sed mattis sit amet sapien eu fringilla. Vivamus commodo eget neque ac imperdiet. Donec porttitor euismod nisl. Suspendisse ac lobortis orci, eget tempus nisl. Morbi tristique, diam eget egestas tempus, mi velit condimentum risus, quis commodo leo magna nec mi. Nullam porta odio ut lacus faucibus, sed facilisis est ullamcorper.', event_imgs= 'https://images.unsplash.com/photo-1587888191477-e74ac6bc9c4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1514&q=80',
        event_date= '2022-11-09', event_city= 'Miami', event_state= 'FL', event_zipcode= '33140', category= 'BoardGames',
        user_id= 1
    )
    event7 = Event(
        title= 'I need a Math tutor!!!', event_description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod volutpat turpis, et congue eros gravida vitae. Sed vel nisl vitae magna interdum molestie at quis diam. Vestibulum sit amet tortor eget nunc luctus venenatis. Sed mattis sit amet sapien eu fringilla. Vivamus commodo eget neque ac imperdiet. Donec porttitor euismod nisl. Suspendisse ac lobortis orci, eget tempus nisl. Morbi tristique, diam eget egestas tempus, mi velit condimentum risus, quis commodo leo magna nec mi. Nullam porta odio ut lacus faucibus, sed facilisis est ullamcorper.', event_imgs= 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        event_date= '2023-01-25', event_city= 'Miami', event_state= 'FL', event_zipcode= '33140', category= 'StudyGroups',
        user_id= 4
    )
    event8 = Event(
        title= 'Mini season is here!', event_description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod volutpat turpis, et congue eros gravida vitae. Sed vel nisl vitae magna interdum molestie at quis diam. Vestibulum sit amet tortor eget nunc luctus venenatis. Sed mattis sit amet sapien eu fringilla. Vivamus commodo eget neque ac imperdiet. Donec porttitor euismod nisl. Suspendisse ac lobortis orci, eget tempus nisl. Morbi tristique, diam eget egestas tempus, mi velit condimentum risus, quis commodo leo magna nec mi. Nullam porta odio ut lacus faucibus, sed facilisis est ullamcorper.', event_imgs= 'https://images.unsplash.com/photo-1622865415968-4eec8ff1ee5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
        event_date= '2022-11-17', event_city= 'Atlanta', event_state= 'GA', event_zipcode= '30301', category= 'Boating',
        user_id= 5
    )
    event9 = Event(
        title= 'Can anyone provide a code review?', event_description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod volutpat turpis, et congue eros gravida vitae. Sed vel nisl vitae magna interdum molestie at quis diam. Vestibulum sit amet tortor eget nunc luctus venenatis. Sed mattis sit amet sapien eu fringilla. Vivamus commodo eget neque ac imperdiet. Donec porttitor euismod nisl. Suspendisse ac lobortis orci, eget tempus nisl. Morbi tristique, diam eget egestas tempus, mi velit condimentum risus, quis commodo leo magna nec mi. Nullam porta odio ut lacus faucibus, sed facilisis est ullamcorper.', event_imgs= 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        event_date= '2022-12-13', event_city= 'Miami', event_state= 'FL', event_zipcode= '33140', category= 'StudyGroups',
        user_id= 5
    )
    event10 = Event(
        title= 'Dare to pass Go?', event_description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod volutpat turpis, et congue eros gravida vitae. Sed vel nisl vitae magna interdum molestie at quis diam. Vestibulum sit amet tortor eget nunc luctus venenatis. Sed mattis sit amet sapien eu fringilla. Vivamus commodo eget neque ac imperdiet. Donec porttitor euismod nisl. Suspendisse ac lobortis orci, eget tempus nisl. Morbi tristique, diam eget egestas tempus, mi velit condimentum risus, quis commodo leo magna nec mi. Nullam porta odio ut lacus faucibus, sed facilisis est ullamcorper.', event_imgs= 'https://images.unsplash.com/photo-1611371805663-af65e62e9071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1496&q=80',
        event_date= '2022-10-31', event_city= 'New York', event_state= 'NY', event_zipcode= '10020', category= 'BoardGames',
        user_id= 4
    )
    event10 = Event(
        title= 'Madden anyone?', event_description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod volutpat turpis, et congue eros gravida vitae. Sed vel nisl vitae magna interdum molestie at quis diam. Vestibulum sit amet tortor eget nunc luctus venenatis. Sed mattis sit amet sapien eu fringilla. Vivamus commodo eget neque ac imperdiet. Donec porttitor euismod nisl. Suspendisse ac lobortis orci, eget tempus nisl. Morbi tristique, diam eget egestas tempus, mi velit condimentum risus, quis commodo leo magna nec mi. Nullam porta odio ut lacus faucibus, sed facilisis est ullamcorper.', event_imgs= 'https://images.unsplash.com/photo-1515295527612-cb8132ecb496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
        event_date= '2022-12-25', event_city= 'San Francisco', event_state= 'CA', event_zipcode= '94016', category= 'VideoGames',
        user_id= 5
    )
    event10 = Event(
        title= 'Its a celebration', event_description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod volutpat turpis, et congue eros gravida vitae. Sed vel nisl vitae magna interdum molestie at quis diam. Vestibulum sit amet tortor eget nunc luctus venenatis. Sed mattis sit amet sapien eu fringilla. Vivamus commodo eget neque ac imperdiet. Donec porttitor euismod nisl. Suspendisse ac lobortis orci, eget tempus nisl. Morbi tristique, diam eget egestas tempus, mi velit condimentum risus, quis commodo leo magna nec mi. Nullam porta odio ut lacus faucibus, sed facilisis est ullamcorper.', event_imgs= 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        event_date= '2022-12-30', event_city= 'Chicago', event_state= 'IL', event_zipcode= '60007', category= 'Clubbing',
        user_id= 2
    )

    # fake = Faker()
    # for _ in range(10):
    #     event = Event(
    #         title = 'This is another type of event',
    #         event_description = 'Other type of event',
    #         event_imgs = fake.image_url(),
    #         event_date = fake.date_time_between(start_date="-30d", end_date="+30d"),
    #         event_city = fake.city(),
    #         event_state = fake.state(),
    #         event_zipcode = fake.postcode(),
    #         category = 'Other',
    #         user_id = fake.random_int(min=1, max=13)
    #     )
    #     db.session.add(event)

    db.session.add(event1)
    db.session.add(event2)
    db.session.add(event3)
    db.session.add(event4)
    db.session.add(event5)
    db.session.add(event6)
    db.session.add(event7)
    db.session.add(event8)
    db.session.add(event9)
    db.session.add(event10)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_events():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
