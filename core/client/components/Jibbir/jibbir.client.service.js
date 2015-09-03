angular.module("app")
.service('jibbirService', function ($http, $q) {
	var username;
	this.saveChat = function(chat) {
		console.log(username);
		chat.user = username;
		$http({
			method: 'POST',
			url: "/api/penises",
			data: chat
		}).then (function(response){
			console.log(response);
		});
	};
	this.setUsername = function(string){
		username = string;
	}
	// this.getUsername = function(){
	// 	return username
	// }
});