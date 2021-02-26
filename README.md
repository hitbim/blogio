# blogio

Blog plugin for hitbim ios/android apps builder

###############################################################

 __   __  ___  _______  _______  ___  __   __       _______  _______  __   __
|  | |  ||   ||       ||  _    ||   ||  |_|  |     |       ||       ||  |_|  |
|  |_|  ||   ||_     _|| |_|   ||   ||       |     |       ||   _   ||       |
|       ||   |  |   |  |       ||   ||       |     |       ||  | |  ||       |
|       ||   |  |   |  |  _   | |   ||       | ___ |      _||  |_|  ||       |
|   _   ||   |  |   |  | |_|   ||   || ||_|| ||   ||     |_ |       || ||_|| |
|__| |__||___|  |___|  |_______||___||_|   |_||___||_______||_______||_|   |_|


###############################################################

## THIS FILES SHOWS

// 1) HOW TO CREATE A HITBIM PLUGIN
// 2) JQUERY IS INSTALLED BY DEFAULT
// 3) HITBIM SDK INCLUDING METHODS:


NOTE: This generates the VMS (Visual Management System)
*** Any further questions ask me anything appskorea@hitbim.com ***


###############################################################

/*
  1) INITIALIZE THE PLUGIN

  Initializes the plugin
*/
$B.init(Object:{});

###############################################################

/*

  2) HOW TO REGISTER A FUNCTION

  How to register a function

  (A)-> Your function name to call it trough the plugin
  (B)-> Your function, it can be used JQUERY and selected framework for ui,
        in this case Framework7 is selected, ionicframework to be added.
  (C)-> For third party developers, small description about the
  function; this for developers that want to connect to your plugin
*/
$B.register(String:'my_function_name (A)', function:function(){} (B), String:'Optional: (C)');

###############################################################

/*

  3) HOW TO CALL MY FUNCTION

  (A)-> Parameters that the function would/will receive
*/
$B.call('my_function_name', 'parameters (A) ');

###############################################################

/*

  4) CALL NATIVE FUNCTIONS

  (A)-> hardware: String: 'qr',
  (B)-> event: String: 'custom parameters for a native function',
  (C)-> fn: String: 'my_callback_function_name'
  (D)-> params: Object || String: '{myKey:true} || my_string'
    //NOTE: Only Object with string values or boolean are accepted
*/
bim.native.exec({
  hardware: String:'gallery (A)',
  event: String:'event_name (B)',
  fn: String:'my_callback_function_name (C)',
  params: Object:'my_parameters (D)'
});

###############################################################

/*

  ELEMENT WHERE IT WILL BE PLACED A CONTENT,
  $ -> JQUERY
  Class element: '.page-content' as Framework7 is selected

  NOTE: For this app lets use the v1 of Framework7
  NOTE: There is no need to initialize Framework7,
        Hitbim SDK injects it when selected.
        *** JUST USE COMPONENTS ***
  https: https://v1.framework7.io/docs/get-started.html
*/
$(bim.NAVIGATOR_MANAGER.CURRENT_SCREEN()).find('.page-content')

/*

  (A)-> Plugin id is required, use bim.plugin.id.get()
  (B)-> Main template of the plugin, uses placeholders technique
        https://idangero.us/template7/#.YDYms5P7SYV
  (C)-> Context contains the JSON Object that will populate
        the plugin
  (D)-> Plugin name is required, use bim.plugin.name.get()
  (E)-> This option if the plugin will require to request more content
        from the server; infinity scroll technique.
        NOTE: *** This option is deprecated ***
*/
bim.app.template({
  id: bim.plugin.id.get() (A),
  html: feeds (B),
  context: feeds_context (C),
  name: bim.plugin.name.get() (D),
  dynamic: true (E), ** deprecated **
});

/*

  (A)-> Insert content into current visible screen
        use: 'current_screen' (String)
*/
$B.append({$:'current_screen'}, all_feeds);

/*

  NOTE: *** To handle events should be used hitbim library. ***
*/
$B.event({$:'.my-element', on:'click'}, function(e){

  // SAFE TO USE JQUERY OR RAW JAVASCRIPT HERE
});


###############################################################


  SQL demo files are already installed on the server,
  I included the demo files on sql/ folder


###############################################################

/*

  SERVER CALLS

  (A)-> (Object key) query: String: 'INSERT' or 'UPDATE' or 'DELETE'
  (B)-> (Object key) table: String: 'Name of your generated table'
  (C)-> (Object key) rows: Object key: 'Name of the row/column'
  (D)-> (Object key) env: String: 'dev' is the default mode. (https://sandbox.hitbim.com)
  (E)-> (Object key) pluginId: String: 'Your pluginId or other developer's plugin open for requests'
*/

var params = {
 query:[
  {
   // Query type to be executed: UPDATE, INSERT, DELETE
   query:  'INSERT', (A)
   // Table created called 'feeds'
   table: 'feeds', (B)
   rows:{ (C)
    // title and object are the row names of the table created
    // Example rows:{ myTableRowName: 'custom value to insert' }
    title: formData.title_post,
    content: formData.content_post
   }
  }
 ],
 env: 'dev',
 pluginId: pluginId
};

 bim.db.query(token, params,  function(res){

  console.log(res);
  if(res.error) app.alert(res.message);
});

###############################################################


Contact: appskorea@hitbim.com


###############################################################

