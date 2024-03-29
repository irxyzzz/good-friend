package com.goodfriend.action;

import java.util.List;
import java.util.Map;

import com.goodfriend.model.Mail;
import com.goodfriend.model.Message;
import com.goodfriend.model.Placard;
import com.goodfriend.model.User;
import com.goodfriend.service.ILatestMsgService;
import com.goodfriend.service.IMailService;
import com.goodfriend.service.IPlacardService;
import com.opensymphony.xwork2.ActionContext;

/**
 * Latest Message Action Class Get the current user's friends latest message of
 * all, including the gossip, the statement, the blog.
 * 
 * @CreateTime 2010.05.24
 * @LastModifiedtime 2010.05.24
 */
public class LatestMessageAction {

    ILatestMsgService latestMsgService;
    IMailService mailService;
    IPlacardService placardService;
    
    List<Message> msgs;

    /**
     * Get the user's friends latest message by the AJAX.
     * 
     * @return the success flag;
     */
    public String getLatestMsg() {
	// Get the current user
	Map<String, Object> session = ActionContext.getContext().getSession();
	User currentUser = (User) session.get("currentUser");

	msgs = latestMsgService.getLastestMsg(currentUser.getIdUser());
	ActionContext.getContext().getSession().put("msg", msgs);
	
	List<Mail> latestMails = mailService.getAllMails(currentUser);
	ActionContext.getContext().getSession().put("mails", latestMails);
	
	List<Placard> latestPlacards = placardService.getLatestPlacards();
	ActionContext.getContext().getSession().put("placards", latestPlacards);
	
	User user = (User)session.get("user");
	ActionContext.getContext().getSession().put("user", user);
	
	return "success";
    }

    /**
     * @return the latestMsgService
     */
    public ILatestMsgService getLatestMsgService() {
	return latestMsgService;
    }

    /**
     * @param latestMsgService
     *            the latestMsgService to set
     */
    public void setLatestMsgService(ILatestMsgService latestMsgService) {
	this.latestMsgService = latestMsgService;
    }

    /**
     * @return the msgs
     */
    public List<Message> getMsgs() {
        return msgs;
    }

    /**
     * @param msgs the msgs to set
     */
    public void setMsgs(List<Message> msgs) {
        this.msgs = msgs;
    }

    /**
     * @return the mailService
     */
    public IMailService getMailService() {
        return mailService;
    }

    /**
     * @param mailService the mailService to set
     */
    public void setMailService(IMailService mailService) {
        this.mailService = mailService;
    }

    /**
     * @return the placardService
     */
    public IPlacardService getPlacardService() {
        return placardService;
    }

    /**
     * @param placardService the placardService to set
     */
    public void setPlacardService(IPlacardService placardService) {
        this.placardService = placardService;
    }
    
    

}
