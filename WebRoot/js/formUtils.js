/**
 * 需要prototype.js库的支持
 * 
 * 许润华
 */

var Validate = new Object;

/**
 * 用户注册部分时，是否异步验证其注册用户名是否存在.
 * 
 * @type Boolean 默认为true,即是异步验证
 */
var ajaxNameValidate = true;
/**
 * 重发action请求，改变验证码
 * 
 * @param {}
 *            obj 验证码元素
 */
Validate.changeCode = function(obj) {
	// 获取当前的时间作为参数，无具体意义
	var time = new Date().getTime();
	// 每次请求需要一个不同的参数，否则可能会返回同样的验证码
	obj.src = "random.action?id=" + time;
}

/**
 * 检查元素长度
 * 
 * @param {}
 *            element 需要判断的元素
 * @param {}
 *            s 长度控制，最小长度
 * @param {}
 *            e 长度控制，最大长度
 * @param {}
 *            message 出错提示信息
 * @param {}
 *            showId
 * @return {Boolean} 表单为空时，返回false； 否则返回 true
 */
Validate.required = function(element, s, e, message, showId) {

	var args = arguments.length;
	var flag = false;
	var message;
	var showId;
	if (args == 5) {
		flag = true;
	} else {
		message = arguments[1];
		showId = arguments[2];
	}

	with (element) {
		if (value == null || value == "") {

			var oText = document.createTextNode(message);
			if ($(showId).firstChild != null) {
				var child = $(showId).firstChild;
				$(showId).removeChild(child);
			}
			$(showId).appendChild(oText);
			ajaxNameValidate = false;
			return false;

		} else {
			if (flag && value.length < s || value.length > e) {
				var oText = document.createTextNode("Length Scope" + s + "-" + e);
				if ($(showId).firstChild != null) {
					var child = $(showId).firstChild;
					$(showId).removeChild(child);
				}
				$(showId).appendChild(oText);
				ajaxNameValidate = false;
				return false;
			} else {
				if ($(showId).firstChild != null) {
					var child = $(showId).firstChild;
					$(showId).removeChild(child);
				}
				ajaxNameValidate = true;
				return true;
			}
		}
	}
}

/**
 * 检查Email地址是否正确
 * 
 * @param {}
 *            emailElement email输入控件
 */
Validate.email = function(emailElement, showId) {
	var regEmail = /^(?:\w+\.?)*\w+@(?:\w+\.?)*\w+$/;
	var flag = regEmail.test(emailElement.value);
	if (!flag) {
		var oText = document.createTextNode("Invalide Email Address");
		if ($(showId).firstChild != null) {
			var child = $(showId).firstChild;
			$(showId).removeChild(child);
		}
		$(showId).appendChild(oText);
		return false;
	} else {
		if ($(showId).firstChild != null) {
			var child = $(showId).firstChild;
			$(showId).removeChild(child);
		}
		return true;
	}
}

var FormUtil = new Object;

/**
 * 打开页面时让表单第一个非隐藏元素获得焦点
 */
FormUtil.focusOnFirst = function() {
	if (document.forms.length > 0) {
		for (var i = 0; i < document.forms[0].elements.length; i++) {
			var oFiled = document.forms[0].elements[i];
			if (oFiled.type != "hidden") {
				oFiled.focus();
				return;
			}
		}
	}
}
//var target = $("password");
//EventUtil.addEventHandler(target, "keyup", function(){
//	var oEvent = EventUtil.getEvent();
//	var key = oEvent.keyCode;
//	var oForm = document.getElementById("loginform");
//	// 回车键按下
//	if (key == 13) {
//		oForm.submit();
//	}
//});

/**
 * 根据用户选填的性别，更改默认头像
 */
FormUtil.changePhoto = function () {
	var gender = Form.Element.getValue("gender");
	if (gender == "male") {
		$("photo").src = "../pictures/default/default_male.png";
	}
	else {
		$("photo").src = "../pictures/default/default_female.png";
	}
}

/**
 * 异步验证用户名是否已经注册.
 * 
 * @type Class
 */
var myNameValidateAjax = {
	url : "isNameExist.action",
	params : "",
	validate : function(value) {
		if (ajaxNameValidate) {
			this.params = "valiName=" + value;
			var myAjax = new Ajax.Request(this.url, {
						method : 'get',
						parameters : this.params,
						onComplete : this.showResponse,
						asynchronous : true
					});
		}
		else {
			return false;
		}

	},
	showResponse : function(request) {
		$("userNameError").innerHTML = request.responseText;
	}
}

var myFileUploadAjax = {
	url : "fileUpload.action",
	params : "",
	upload : function () {
		this.params = Form.Element.serialize("uploadFile");
		var myAjax = new Ajax.Request(this.url, {
			method : 'post',
			contentType : 'multipart/form-data',
			parameters : this.params,
			onComplete : this.processResponse,
			asynchronous : true
		});
	},
	processResponse : function (request) {
		
	}
}