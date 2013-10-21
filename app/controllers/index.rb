get '/' do
  erb :index
end

get '/:handle' do
  @user = TwitterUser.generate(params[:handle])
  @tweets = @user.tweets
  if better_stale?(@user)
   @user.fetch_tweets
  else
    @user.tweets
  end
  erb :tweets
end
