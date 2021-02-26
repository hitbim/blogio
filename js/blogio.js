$B.init({
	name: 'blogio',
	load: 'template_engine',
	device: true,
		// TO TEST ON LAB -> USER: real@real.com
	token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'+
	'eyJkZXYiOnRydWUsImFsaWFzIjoic2hfZ3ZQcUlkV1FoQUlJY21TRUliIiwi'+
	'ZGF0ZSI6IjIwMjEtMDItMjRUMDY6MDU6MjAuNjA1WiIsImlhdCI6MTYxNDE0NjcyMH0.'+
	'S6FWVZTzwAqnqyy1-3GL3BuE5cMGRLmHT_ww0MlsOWY',
		// TO TEST ON LAB -> USER: real@real.com
	pluginId: 'plugin-QnHwxKLHDdLBrZEo6038cfc7feffebQCJNdmeRdTMqMEM',
	framework: 'framework7'
});

// ----------------- CODE ------------------

// CURRENT SCREEN
var screen = bim.NAVIGATOR_MANAGER.CURRENT_SCREEN();
var page = $(screen).find('.page-content');


// BUILD CARDS TEST

// I DID NOT FACED THIS PROBLEM
// MULTIPLE COMPONENTS OF THE SAME PLUGIN
// DUMMY SERVER ANSWER
var feeds_context = {
	feeds: [
		{
			id: 'Id-Server-001',
			title: 'Journey To Mountains',
			image: 'background-image:url(https://loremflickr.com/350/150/girl/all)',
			name: 'John Balsamus',
			date: 'Monday 21 at 4:44',
			preview: 'Quisque eget vestibulum nulla...'
		},
		{
			id: 'Id-Server-002',
			title: 'Journey To Mountains',
			image: 'background-image:url(https://loremflickr.com/350/150/paris/all)',
			name: 'Alv Cromadius',
			date: 'Monday 12 at 4:33',
			preview: 'Quisque eget vestibulum nulla...'
		},
		{
			id: 'Id-Server-003',
			title: 'Journey To Mountains',
			image: 'background-image:url(https://loremflickr.com/350/150/cat/all)',
			name: 'Eximun Blades',
			date: 'Monday 23 at 1:24',
			preview: 'Quisque eget vestibulum nulla...'
		},
		{
			id: 'Id-Server-004',
			title: 'Journey To Mountains',
			image: 'background-image:url(https://loremflickr.com/350/150/dog/all)',
			name: 'John Balsamus',
			date: 'Monday 09 at 3:44',
			preview: 'Quisque eget vestibulum nulla...'
		},
		{
			id: 'Id-Server-005',
			title: 'Journey To Mountains',
			image: 'background-image:url(https://loremflickr.com/350/150/brazil/all)',
			name: 'Equ Blisns',
			date: 'Monday 11 at 2:59',
			preview: 'Quisque eget vestibulum nulla...'
		},
		{
			id: 'Id-Server-006',
			title: 'Journey To Mountains',
			image: 'background-image:url(https://loremflickr.com/350/150/brazil,rio/all)',
			name: 'Axin Kracli',
			date: 'Monday 22 at 5:12',
			preview: 'Quisque eget vestibulum nulla...'
		}
	]
}

var feeds = '{{#each feeds}}'+
'<div id="{{id}}" class="card demo-card-header-pic"> '+
'  <div style="{{image}}" valign="bottom" class="card-header color-white no-border">{{title}}</div> '+
'  <div class="card-content"> '+
'    <div class="card-content-inner card-content-inner-feed"> '+
'      <p class="color-gray">{{date}}</p> '+
'      <p>{{preview}}</p> '+
'    </div> '+
'  </div> '+
'  <div class="card-footer"> '+
'    <i class="card-options ion-android-favorite-outline"></i> '+
'    <i class="card-options ion-ios-chatbubble-outline"></i> '+
'    <i class="card-options ion-android-share"></i> '+
'  </div> '+
'</div> '+
'{{/each}}';

var all_feeds = bim.app.template({
	id: bim.plugin.id.get(),
	// Main template: https://idangero.us/template7/#.YDYms5P7SYV
	html: feeds,
	// Anser of server (JSON string)
	context: feeds_context,
	// Name of the plugin
	name: bim.plugin.name.get(),
	dynamic: true
});
$B.append({$:'current_screen'}, all_feeds);

$(document).on('click', '.ion-ios-chatbubble-outline', function(){

	// Emulate data from SERVER
	// DUMMY JSON response
	var context = {
		header_image: 'https://loremflickr.com/350/150/brazil/all',
		subtitle: 'Living the greatest '+
				'experience of Yach Party',
		date: '01/01/2020',
		place: 'Seoul, South Korea',
		content: '<p> '+
		'				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  '+
		'				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  '+
		'				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  '+
		'				irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  '+
		'				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt  '+
		'				mollit anim id est laborum. '+
		'			</p> '+
		'			<p> '+
		'				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  '+
		'				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  '+
		'				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  '+
		'				irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  '+
		'				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt  '+
		'				mollit anim id est laborum. '+
		'				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  '+
		'				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  '+
		'				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  '+
		'				irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  '+
		'				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt  '+
		'				mollit anim id est laborum. '+
		'			</p> '+
		'			<h3>Living the greatest experience of Yach Party</h3> '+
		'			<p> '+
		'				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  '+
		'				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  '+
		'				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  '+
		'				irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  '+
		'				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt  '+
		'				mollit anim id est laborum. '+
		'			</p> '
	};

	var params = {
		// Page.name parameter is required
		page:{
			// Name for screen that it will
			// be generated
			name: 'write',
			context: context,
			// content: content defined by the USER
			// template: to precompile data into a template layout
			// using placeholders
			content: 'template/post-content.html'
		},
	};

	bim.NAVIGATOR_MANAGER.NEW_SCREEN(params, function(resp){
		// IF ALREADY EXISTS SCREEN ON THE
		// NAVIGATOR STACK
		console.log(' resp ', resp);
		// IF ERROR MEANS SCREEN ALREADY EXISTS
		// THEN PROCEED TO LOAD IT
		if(resp.error){

			bim.NAVIGATOR_MANAGER.SCREEN(resp.screen);
		}
	});
});
