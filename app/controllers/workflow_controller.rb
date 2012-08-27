#encoding: utf-8
class WorkflowController < ApplicationController

	caches_page :index
	
	def index
		@meta_desc = "Munkafolyamatunk biztosítja, hogy bármilyen fejlesztés végig átlátható maradjon, a kreatív fázisokban se vesszenek el az üzleti célok."
		@title = "Munkafolyamatunk"

		render 'index'
	end
end
