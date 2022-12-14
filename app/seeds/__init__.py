from flask.cli import AppGroup
from .users import seed_users, undo_users
from .events import seed_events, undo_events
from .reviews import seed_reviews, undo_reviews
from .rsvps import seed_rsvps, undo_rsvps

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_events()
    seed_reviews()
    seed_rsvps()



# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_events()
    undo_reviews()
    undo_rsvps()
