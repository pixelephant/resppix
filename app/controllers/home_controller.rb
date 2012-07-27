#encoding: utf-8
class HomeController < ApplicationController

	caches_page :index

	def index
		@meta_desc = "Pixelephant Media: weboldal készítés, arculattervezés, webalkalmazások, webmarketing."
		@title = "Rajongunk a webért!"

		render 'index'
	end
end
