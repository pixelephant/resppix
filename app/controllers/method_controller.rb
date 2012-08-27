#encoding: utf-8
class MethodController < ApplicationController

	caches_page :index
	
	def index
		@meta_desc = "A Pixelephant weboldalai minden eszközön nagyszerűen működnek, legyen az mobil, táblagép vagy bármi más!"
		@title = "Responsive web design mobil fókusszal"

		render 'index'
	end
end
