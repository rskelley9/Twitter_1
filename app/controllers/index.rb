get '/' do
  erb :index
end

get '/:handle' do
  @user = TwitterUser.generate(params[:handle])
  @tweets = @user.tweets
  
  if better_stale?(@user)
    if request.xhr?
     erb :tweets, layout: false
     @user.fetch_tweets
  else
    @user.tweets
    erb :tweets
  end
 end
erb :tweets
end

post "/twitter/user" do
@handle = params[:handle]
redirect "/#{@handle}"
end
