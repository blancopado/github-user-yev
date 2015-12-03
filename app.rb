require 'sinatra'

get '/' do
	erb ('views/index.erb')
end