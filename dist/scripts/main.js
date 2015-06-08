var newUser = new UserModel();

window.onload = function() {
		$.get ("http://tiny-pizza-server.herokuapp.com/collections/robd",
		setHtml,
		"json"
		);

	function setHtml(data) {
		console.log(data[1]);
		$(".profile-usertitle-name").html(data[1].name);
		$(".dropdown .dropdown-toggle").html(data[1].name);
		$(".profile-usertitle-job").html(data[1].role);
		$(".profile-usertitle-email").html(data[1].email);
	}
}

$(document).ready(function() {

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
	$.post
	("http://tiny-pizza-server.herokuapp.com/collections/robd",
	myObj,
	"json"
	);

}

$(".form-horizontal").on("submit", function(e) {
	e.preventDefault();
	newUser.set({
		name: $("#name").val(),
		email: $("#inputEmail3").val(),
		role: $("#role").val()
	});

});

// window.onload = function() {
// 				$.get ("http://tiny-pizza-server.herokuapp.com/collections/robd",
// 			setHtml,
// 			"json"
// 			);

// 	function setHtml(data) {
// 		console.log(data[1]);
// 		$(".profile-usertitle-name").html(data[1].name);
// 		$(".dropdown .dropdown-toggle").html(data[1].name);
// 		$(".profile-usertitle-job").html(data[1].role);
// 		$(".profile-usertitle-email").html(data[1].email);
// 	}
// }


});