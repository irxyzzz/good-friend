package com.goodfriend.service;

import java.util.List;

import com.goodfriend.model.Friends;
import com.goodfriend.model.User;

public interface IFriendService {

    public List<User> getFriends(User owner);

    public List<User> getFriends(User owner, String state);

    public void updateFriend(Friends friend);

    public void deleteFriend(Friends friend);

    public Friends getFriend(Integer id);

    public List<User> getFriendsByPage(User owner, int pageNow, int pageSize);

    public int getTotalPage(User owner, int pageSize);
	
	public List<User> searchFriendsByPage(User owner, String userName, int pageNow, int pageSize);
	
	public int getSearchedTotalPage(User owner, String userName, int pageSize);
	
	public void deleteFriend(User user, int friendID);
	
	public void refuseFriend(User user, int friendID);
	
	public void addFriendToRequest(User user, int friendID);
	 
	public void addFriend(User user, int friendID);
	
	public boolean isFriend(User user, int friendID);
}
