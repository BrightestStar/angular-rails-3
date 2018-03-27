class Post < ApplicationRecord
  has_many :comments, dependent: :destroy

  def as_json(options = {})
    super(options.merge(include: :comments))
  end
end
