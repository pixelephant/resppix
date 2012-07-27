#encoding: utf-8
class ServicesController < ApplicationController

	caches_page :index

	def index
		@meta_desc = "Ismerje meg, milyen webes és grafikai munkában tudunk segíteni."
		@title = "Webes és grafikai szolgáltatásaink"

		render 'index'
	end
end
