require 'sinatra'

get '/' do
	erb ('views/index')
end