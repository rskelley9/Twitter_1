get '/' do
  erb :index
end

get '/:handle' do
  @tweets = Twitter.user_timeline("#{params[:handle]}", count: 10)
  erb :tweets
end
