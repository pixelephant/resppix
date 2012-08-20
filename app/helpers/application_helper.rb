module ApplicationHelper

	def menu_active(controller)
		if current_page?(:controller => controller, :action => 'show')
			return ' class=active'
		elsif current_page?(:controller => controller)
			return ' class=active'
		end
	end

end
