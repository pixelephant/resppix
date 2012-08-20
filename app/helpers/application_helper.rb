module ApplicationHelper

	def menu_active(controller)
		return current_page?(:controller => controller) ? ' class=active' : ''
	end

end
