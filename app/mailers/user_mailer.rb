#encoding: utf-8
class UserMailer < ActionMailer::Base
  default :from => "pixelephant@pixelephant.hu"

  def contact_email(name,phone,email,brief,env,additional)
  	@name = name
  	@phone = phone
  	@email = email
  	@brief = brief
    @env = env
    @additional = additional
    mail(:to => "pixelephant@pixelephant.hu", :subject => "Kontakt")
  end

  def inquery_email(name,phone,email,brief,budget,env,additional)
  	@name = name
  	@phone = phone
  	@email = email
  	@brief = brief
  	@budget = budget
    @env = env
    @additional = additional
    mail(:to => "pixelephant@pixelephant.hu", :subject => "Árajánlat")
  end

end
