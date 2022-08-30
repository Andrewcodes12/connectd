"""empty message

Revision ID: 30850f4046f1
Revises: 
Create Date: 2022-08-30 12:41:10.346543

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '30850f4046f1'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('first_name', sa.String(length=255), nullable=False),
    sa.Column('last_name', sa.String(length=255), nullable=False),
    sa.Column('city', sa.String(length=255), nullable=False),
    sa.Column('state', sa.String(length=255), nullable=False),
    sa.Column('zipcode', sa.String(length=10), nullable=False),
    sa.Column('user_image', sa.String(length=255), nullable=False),
    sa.Column('user_bio', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('events',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('event_description', sa.Text(), nullable=False),
    sa.Column('event_imgs', sa.Text(), nullable=False),
    sa.Column('event_date', sa.DateTime(), nullable=False),
    sa.Column('event_city', sa.String(length=255), nullable=False),
    sa.Column('event_state', sa.String(length=255), nullable=False),
    sa.Column('event_zipcode', sa.String(length=10), nullable=False),
    sa.Column('category', sa.String(length=255), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.Column('review_body', sa.Text(), nullable=False),
    sa.Column('review_rating', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('event_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['event_id'], ['events.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    op.drop_table('events')
    op.drop_table('users')
    # ### end Alembic commands ###