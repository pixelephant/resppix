#encoding: utf-8
class AboutController < ApplicationController

	caches_page :index

	def index
		@meta_desc = "A Pixelephant csapatának tagjai bemutatkoznak önnek."
		@title = "Ismerje meg a Pixelephantot!"

		render 'index'
	end
end
