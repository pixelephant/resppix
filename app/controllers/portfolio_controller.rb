class PortfolioController < ApplicationController

	caches_page :index, :show

	def index
		render 'index'
	end

	def show
		render 'show'
	end
end
