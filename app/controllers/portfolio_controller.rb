#encoding: utf-8
class PortfolioController < ApplicationController

	caches_page :index, :show

	def index
		@meta_desc = "Weboldalkészítési és arculattervezési portfóliónk."
		@title = "Weboldalkészítési és arculattervezési portfóliónk"

		render 'index'
	end

	def show
		render 'show'
	end
end
