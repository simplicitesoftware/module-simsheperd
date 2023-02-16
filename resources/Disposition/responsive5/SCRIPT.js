/* Specific client script */

(function($) {
	$(document).on("ui.loaded", function() {
		// customize UI here before home page	
		$ui.loadCSS("https://cdn.jsdelivr.net/npm/shepherd.js@8.3.1/dist/css/shepherd.css");
		$ui.loadScript("https://cdn.jsdelivr.net/npm/shepherd.js@8.3.1/dist/js/shepherd.min.js");
	});

	$(document).on("ui.ready", function() {
		// customize UI here	
		sheperdControler();
	});
	
	$(document).on("ui.beforeunload", function() {
		// window will be unloaded
	});
	
	$(document).on("ui.unload", function() {
		// window is unloaded
	});
})(jQuery);

function sheperdControler(){
	const tour = new Shepherd.Tour({
	  useModalOverlay: true,
	  defaultStepOptions: {
	    classes: 'shadow-md bg-purple-dark',
	    scrollTo: true
	  }
	});

	tour.addStep({
	  id: 'step-10',
	  text: 'Welcome to Simplicit√© !Ì†ΩÌ±ã <br/><br/> Let\'s take a 10 minutes tour of the platform !',
	  buttons: [ { text: 'Next', action: tour.next } ]
	});
	
	tour.addStep({
	  id: 'step-20',
	  text: 'First, read this quick intro to the Simplicit√© technology Ì†æÌ¥ì',
	  attachTo: { element: '#onboarding-intro', on: 'right' },
	  buttons: [ { text: 'Next', action: tour.next } ]
	});
	
	tour.addStep({
	  id: 'step-30',
	  text: 'As you just logged in for the first time, your platform is empty. Let\'s install an app from the app store Ì†ΩÌ∫Ä',
	  attachTo: { element: 'a[data-domain="StoDomain"]', on: 'right' },
	  advanceOn: { selector: 'a[data-domain="StoDomain"]', event: 'click' }
	});
	
	tour.addStep({
	  id: 'step-40',
	  text: 'All the apps showed in the App Store are publicly available on GitHub. Click here to install our main demonstration app Ì†ΩÌ∫Ä <br/><br/> Once the app downloaded (it will take a few seconds), the platform will ask you to "Clear the cache" to finish the install process. Just click the "Clear cache" blue button.<br/><br/>You will then get disconnected, after which you can reconnect and start the second part of this guide!',
	  attachTo: { 
		element: function a(){
			console.log("========================================")
			return $('btn[data-module="Demo"]');
		}, 
		on: 'bottom' 
	  }
	});

	tour.start();
}
