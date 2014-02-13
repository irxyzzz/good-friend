<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib uri="/struts-tags" prefix="s"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><base href="<%=basePath%>">
<title>Add placard</title>
<style type="text/css">
<!--
@import url("admin/images/admin_base.css");
-->
</style>
</head>

<body>
<div class="globalBox">
  <div class="mainBox">
    <div class="header"></div>
    <div class="contentBox">
   	  <div class="leftNevigation"><label class="labelFont1">Nevigation</label>
    	  <ul class="nevigation_ul">
       	    <li class="nevigation_li"><a href="admin/homePlacard" class="nevigation_a">Home</a></li>
    	  <li class="nevigation_li"><a href="admin/Placard_list" class="nevigation_a">Public &nbsp;Information</a></li>
          <li class="nevigation_li"><a href="admin/User_list" class="nevigation_a">User &nbsp;Management</a></li>
          <li class="nevigation_li"><a href="admin/Admin_list" class="nevigation_a">Administrator &nbsp;Management</a></li>
          <li class="nevigation_li"><a href="admin/search.jsp" class="nevigation_a">Search</a></li>
          <li class="nevigation_li"><a href="admin/logout.action" class="nevigation_a">Logout</a></li>
          </ul>
    	</div>
   	  <div class="rightBox">
<label class="labelFont1">Update Public Information</label>
          <br>
        <s:form action="admin/Placard_update.action" method="post" >
        <table width="512">
            <tr>
              <td width="118" height="43">Title:</td>
              <td width="382"><label>
              <input name="placard.title" type="text" value="<s:property value="placard.title"/>"  maxlength="16" size="50"/>
              </label></td>
            </tr>
            <tr>
              <td height="204" valign="top">Content:</td>
              <td><label>
              <textarea name="placard.content" cols="50" rows="14"><s:property value="placard.content"/></textarea>
              </label></td>
            </tr>
        </table>
        <table width="460">
  <tr>
    <td width="66">&nbsp;</td>
    <td width="167"><label>
    		<input class="button1" type="submit" value="Submit" />
          </label></td>
    <td width="211"><label>
    		<input class="button1" type="reset"  value="Reset" />
          </label></td>
  </tr>
</table>
        </s:form>
        <p>&nbsp;
        </p>
      </div>
    </div>
   <div class="tail">Copyright(c) 2010.  All rights reserved.</div>
  </div>
</div>
</body>
</html>
