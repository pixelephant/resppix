class AjaxController < ApplicationController
	def contact
	
    if UserMailer.contact_email(params[:name],params[:phone],params[:email],params[:brief]).deliver
    	json = {:error => 'none'}
    else
    	json = {:error => 'true'}
    end
    render :json => json
	end

	def inquery

		if UserMailer.inquery_email(params[:name],params[:phone],params[:email],params[:brief],params[:budget]).deliver
			json = {:error => 'none'}
    else
    	json = {:error => 'true'}
    end
    render :json => json
	end
end
