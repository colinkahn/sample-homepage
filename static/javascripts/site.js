var site = (function() {
	var self = {},
		$e = {},
		$active_modal

	function show_overlay(name) {
		$active_modal = $e.modals[name]

		$e.body.css({overflow:'hidden'})

		$e.page.transition({opacity:.05})

		$e.modal_overlay
			.show()
			.transition({opacity:1}, function() {
				$active_modal.transition({top: '0px'})
			})
	}

	function hide_overlay() {
		$active_modal.transition({top: '-700px'}, function() {
			$e.modal_overlay
				.transition({opacity:0}, function() {
					$(this).hide()
				})
			$e.body.css({overflow:'visible'})
		})

		$e.page.transition({opacity:1})
	}

	self.init = function() {
		$e.body = $('body')
		$e.page = $('.page')
		$e.signup_btn = $('.login-actions .signup')
		$e.modal_overlay = $('.modal-overlay')
		$e.close_modal = $('.close-modal')
		$e.facebook_signin = $('.facebook.social-signin-btn')
		$e.google_signin = $('.google.social-signin-btn')
		$e.modals = {
			signup:$('.modal.signup')
		}

		if (!$.support.transition)  {
        	$.fn.transition = $.fn.animate;
        	$e.modal_overlay.css({background:'#fff'})
    	}

		$e.signup_btn.click(function() {
			show_overlay('signup')
		})

		$e.close_modal.click(function() {
			hide_overlay()
		})

		$e.facebook_signin
			.add($e.google_signin)
			.css({position:'relative'})
			.hover(function() {
				$(this).transitionStop()
				$(this).transition({top:'-5px'})
			}, function() {
				$(this).transitionStop()
				$(this).transition({top:'0'})
			})
	}

	return self;
})();

$(function() {
	site.init()
})