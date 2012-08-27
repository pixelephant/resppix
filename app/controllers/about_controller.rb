#encoding: utf-8
class AboutController < ApplicationController

	caches_page :index

	def index
		@meta_desc = "A Pixelephant egy kicsi, de lelkes online kreatív ügynökség. Ismerjen meg minket!"
		@title = "Rólunk"

		render 'index'
	end
end
