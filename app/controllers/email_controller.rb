class EmailController < ApplicationController
  def index
    @email = Email.all
  end
  def show
    @email= Email.find(params[:id])
    respond_to do |format|
       format.html
       format.js   ## cela va rendre create.js.erb
     end
  end

  def destroy
    @email= Email.find(params[:id])
    @email= Email.destroy(params[:id])
    respond_to do |format|
      format.html { redirect_to root_url }
      format.json
    end
  end
end
