from app.models import db, Rsvp

def seed_rsvps():
    rsvp1=Rsvp(user_id=1, event_id=1, rsvp=True)
    rsvp2=Rsvp(user_id=1, event_id=3, rsvp=True)
    rsvp3=Rsvp(user_id=2, event_id=3, rsvp=True)
    rsvp4=Rsvp(user_id=2, event_id=1, rsvp=True)
    rsvp5=Rsvp(user_id=3, event_id=2, rsvp=True)
    rsvp6=Rsvp(user_id=3, event_id=1, rsvp=True)
    rsvp7=Rsvp(user_id=4, event_id=3, rsvp=True)
    rsvp8=Rsvp(user_id=4, event_id=1, rsvp=True)
    rsvp9=Rsvp(user_id=5, event_id=7, rsvp=True)
    rsvp10=Rsvp(user_id=5, event_id=6, rsvp=True)
    rsvp11=Rsvp(user_id=4, event_id=2, rsvp=True)
    rsvp12=Rsvp(user_id=4, event_id=8, rsvp=True)
    rsvp13=Rsvp(user_id=2, event_id=7, rsvp=True)
    rsvp14=Rsvp(user_id=1, event_id=9, rsvp=True)
    rsvp15=Rsvp(user_id=2, event_id=10, rsvp=True)


    db.session.add(rsvp1)
    db.session.add(rsvp2)
    db.session.add(rsvp3)
    db.session.add(rsvp4)
    db.session.add(rsvp5)
    db.session.add(rsvp6)
    db.session.add(rsvp7)
    db.session.add(rsvp8)
    db.session.add(rsvp9)
    db.session.add(rsvp10)
    db.session.add(rsvp11)
    db.session.add(rsvp12)
    db.session.add(rsvp13)
    db.session.add(rsvp14)
    db.session.add(rsvp15)

    db.session.commit()


def undo_rsvps():
    db.session.execute('TRUNCATE rsvps RESTART IDENTITY CASCADE;')
    db.session.commit()
