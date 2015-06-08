var newUser = new UserModel();

$(document).ready(function() {

$.get ("http://tiny-pizza-server.herokuapp.com/collections/robd/5575ef34a73f360300000146",
		changeModel,
		"json"
		);

function changeModel(data) {
	newUser.set(data)
}

var App = Backbone.Router.extend({
	routes: {
		'': 'profile',
		"profile": "profile",
		'edit': 'edit'
	},
	profile: function() {
		$('.page').hide();
		$('#profile').show();
	},
	edit: function() {
		$('.page').hide();
		$('#edit').show();
	}
});

var app = new App();
Backbone.history.start();

updateUser(newUser);
newUser.on("change", updateUser);

function updateUser(UserModel) {
	$(".profile-usertitle-name").html(UserModel.get("name"));
	$(".dropdown .dropdown-toggle").html(UserModel.get("name"));
	$(".profile-usertitle-job").html(UserModel.get("role"));
	$(".profile-usertitle-email").html(UserModel.get("email"));
	var myObj =	{
		name: UserModel.get("name"),
		email: UserModel.get("email"),
		role: UserModel.get("role")
	};
		
	$.ajax({
	url: 'http://tiny-pizza-server.herokuapp.com/collections/robd/5575ef34a73f360300000146',
	type: 'PUT',
	data: myObj,
	});


}

$(".form-horizontal").on("submit", function(e) {
	e.preventDefault();
	newUser.set({
		name: $("#name").val(),
		email: $("#inputEmail3").val(),
		role: $("#role").val()
	});

});


});