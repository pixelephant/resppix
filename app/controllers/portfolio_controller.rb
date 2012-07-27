#encoding: utf-8
class PortfolioController < ApplicationController

	caches_page :index, :show

	def index
		@meta_desc = "Weboldalkészítési és arculattervezési portfóliónk."
		@title = "Weboldalkészítési és arculattervezési portfóliónk"

		render 'index'
	end

	def show
		@item = PORTFOLIO_ITEMS[params[:item]]
		@meta_desc = @item["desc"]
		@title = @item["title"]
		name = @item["name"]

		@next = PORTFOLIO_ORDER[PORTFOLIO_ORDER.index(params[:item])+1]
		@next = PORTFOLIO_ORDER.first if @next.nil?

		@prev = PORTFOLIO_ORDER[PORTFOLIO_ORDER.index(params[:item])-1]

		render "show_#{params[:item][0,1]}"
	end
end
