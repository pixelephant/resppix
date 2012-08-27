#encoding: utf-8
class HomeController < ApplicationController

	caches_page :index

	def index
		@meta_desc = "A Pixelephant Media egy kicsi, de lelkes, fiatalokból álló online kreatív ügynökség Budapesti főhadiszállással. Rajongunk a webért!"
		@title = "Honlap készítés és arculattervezés"

		render 'index'
	end
end
