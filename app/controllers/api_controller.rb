class ApiController < ApplicationController
	# before_action :ensure_json_request
	skip_before_action :verify_authenticity_token

	# def ensure_json_request  
	# 	return if request.format == :json
	# 	render :nothing => true, :status => 406  
	# end

	def marquee
		# kills other processes
		exec("sudo pkill -f \"sudo python\"")
		# starts process
		exec("sudo python ~/rpi_ws281x/python/examples/marquee.py --message=\"#{marquee_input}\" --color=\"rainbow\" --speed=15 -r")


		respond_to do |format|
			msg = { :status => "ok", :message => "Success!", :html => "<b>...</b>" }
    		format.json  { render :json => msg } # don't do msg.to_json
		end
	end

	private
		def marquee_input
			params.require(:input)
		end
end
