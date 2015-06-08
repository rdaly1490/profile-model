var newUser = new UserModel();

$(document).ready(function() {

var user = new UserModel();
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

// var newUser = new UserModel();

updateUser(newUser);

newUser.on("change", updateUser);

function updateUser(UserModel) {
	console.log("initial user")
	$(".profile-usertitle-name").html(UserModel.get("name"));
	$(".dropdown .dropdown-toggle").html(UserModel.get("name"));
	$(".profile-usertitle-job").html(UserModel.get("role"));
	$(".profile-usertitle-email").html(UserModel.get("email"));
}

$(".form-horizontal").on("submit", function(e) {
	e.preventDefault();
	console.log("Submit");
	newUser.set({
		name: $("#name").val(),
		email: $("#inputEmail3").val(),
		role: $("#role").val()
	});
});



});