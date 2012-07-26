class MethodController < ApplicationController

	caches_page :index
	
	def index
		render 'index'
	end
end
