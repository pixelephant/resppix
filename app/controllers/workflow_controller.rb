class WorkflowController < ApplicationController

	caches_page :index
	
	def index
		render 'index'
	end
end
