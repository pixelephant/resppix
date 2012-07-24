#encoding: utf-8
class UserMailer < ActionMailer::Base
  default :from => "contactform@pixelephant.hu"

  def contact_email(name,phone,email,brief)
  	@name = name
  	@phone = @phone
  	@email = email
  	@brief = brief
    mail(:to => "balazs.antal@pixelephant.hu", :subject => "Kontakt")
  end

  def inquery_email(name,phone,email,brief,budget)
  	@name = name
  	@phone = @phone
  	@email = email
  	@brief = brief
  	@budget = budget
    mail(:to => "balazs.antal@pixelephant.hu", :subject => "Árajánlat")
  end

end
