class GachasController < ApplicationController
  def index
    @gachas = Gacha.all
  end
end
