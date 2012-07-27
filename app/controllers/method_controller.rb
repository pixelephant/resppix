#encoding: utf-8
class MethodController < ApplicationController

	caches_page :index
	
	def index
		@meta_desc = "Nézze meg, hogyan készülnek műhelyünkben webes és grafikai alkotásaink."
		@title = "Mobil fókuszú reszponzív szemléletünkről"

		render 'index'
	end
end
