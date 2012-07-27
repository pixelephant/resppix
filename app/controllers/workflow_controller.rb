#encoding: utf-8
class WorkflowController < ApplicationController

	caches_page :index
	
	def index
		@meta_desc = "Munkafolyamatunk a tervezéstől az átadásig."
		@title = "Munkafolyamatunk: tervezéstől az átadásig"

		render 'index'
	end
end
