#encoding: utf-8
class ServicesController < ApplicationController

	caches_page :index

	def index
		@meta_desc = "Letisztult és funkcionális weboldalak, könnyen kezelhető webáruházak és webalkalmazások, online marketing és időtálló arculatok."
		@title = "Honlap és webáruház, branding, online marketing"

		render 'index'
	end
end
