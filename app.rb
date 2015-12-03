require 'sinatra'

get '/' do
	erb ('views/index.html')
end