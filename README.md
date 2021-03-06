# Blogio plugin

Example of a Blog plugin for hitbim ios/android apps builder


## THIS FILES SHOWS

```

1) HOW TO CREATE A HITBIM PLUGIN
2) JQUERY IS INSTALLED BY DEFAULT
3) HITBIM SDK INCLUDING METHODS:

```

NOTE: This generates a VMS (Visual Management System)
NOTE: This does not create a CMS (Content Management System)


## 1) INITIALIZE THE PLUGIN

```

$B.init({
  name: 'blogio',
  load: 'template_engine',
  device: true,
  token: 'token'
  pluginId: 'plugin-id',
  framework: 'framework7'
});

```



## 2) HOW TO REGISTER A FUNCTION

```

How to register a function

(A)-> Your function name to call it trough the plugin
(B)-> Your function, it can be used JQUERY and selected framework for ui,
  in this case Framework7 is selected, ionicframework to be added.
(C)-> For third party developers, small description about the
function; this for developers that want to connect to your plugin

$B.register(String:'my_function_name (A)', function:function(){} (B), String:'Optional: (C)');

```

## 3) HOW TO CALL MY FUNCTION

```

(A)-> Parameters that the function will receive

$B.call('my_function_name', 'parameters (A) ');

```


## 4) CALL iOS/Android NATIVE FUNCTIONS

```

(A)-> hardware: String: 'qr',
(B)-> event: String: 'custom parameters for a native function',
(C)-> fn: String: 'my_callback_function_name'
(D)-> params: Object || String: '{myKey:true} || my_string'
  //NOTE: Only Object with string values or boolean are accepted

bim.native.exec({
  hardware: String:'gallery (A)',
  event: String:'event_name (B)',
  fn: String:'my_callback_function_name (C)',
  params: Object:'my_parameters (D)'
});

```

## How to build template

```

(A)-> Plugin id is required, use bim.plugin.id.get()
(B)-> Main template of the plugin, uses placeholders technique
      https://idangero.us/template7/#.YDYms5P7SYV
(C)-> Context contains the JSON Object that will populate
      the plugin
(D)-> Plugin name is required, use bim.plugin.name.get()
(E)-> This option if the plugin will require to request more content
      from the server; infinity scroll technique.
      NOTE: *** This option is deprecated ***

var template = bim.app.template({
  id: bim.plugin.id.get() (A),
  html: feeds (B),
  context: feeds_context (C),
  name: bim.plugin.name.get() (D),
  dynamic: true (E), ** deprecated **
});

// THIS RETURN A PROMISE 

template.then(function(template){

  // APPEND CONTENT TO APP OR DO SOMETHING ELSE
});

```

## How to append our content into the app

```

Insert content into current visible screen
use: 'current_screen' (String)

$B.append({$:'current_screen'}, all_feeds);

OR

Insert content in some section of the screen

$B.append({$:'.my_element'}, all_feeds);


// Using template variable from example above:
template.then(function(compiled){

  $B.append({$:'current_screen'}, compiled);
});

```

## How to create a new screen

```

(A)-> Name of the new screen
(B)-> Context to fill your template dynamically
(C)-> Detect in case of load automatically a language
      by detecting device language
(D)-> Template of the new screen
      NOTE: Placeholder should match the json keyNames 
      from context lang key
(E)-> Load page with animation
(F)-> Function to generate the new page, can be done
      synchronously or asynchronously


var page = {
  page:{
    name: 'login' (A),
    context: { (B)
      lang: 'lang/login-en',
      detect: false (C)
    },
    content: 'templates/login.html' (D),
    animate: true (E)
  },
};

bim.app.page(page, function(){ (F)

  console.log('trigger after opened ', this);
});


```

## NOTE: To handle events outside of register function method.

```

$B.event({$:'.my-element', on:'click'}, function(e){

  // SAFE TO USE JQUERY OR RAW JAVASCRIPT HERE
});

```

## SQL - Database

```

/sql repo directory

https://hitbim.com/plugins-dashboard

```

##  SERVER CALLS

```

(A)-> (Object key) query: String: 'INSERT' or 'UPDATE' or 'DELETE'
(B)-> (Object key) table: String: 'Name of your generated table'
(C)-> (Object key) rows: Object key: 'Name of the row/column'
(D)-> (Object key) env: String: 'dev' is the default mode. (https://sandbox.hitbim.com)
(E)-> (Object key) pluginId: String: 'Your pluginId or other developer's plugin open for requests'


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

bim.db.query(params,  function(res){

  console.log(res);
  if(res.error) app.alert(res.message);
});


```

##  REQUESTS OTHER PLUGINS DATABASES
### (If plugin's developer enable cross-plugin requests)

```

(A)-> (String) Insert plugin id of the plugin to be accessed

var params = {
 query:[
  {
   // Query type to be executed: UPDATE, INSERT, DELETE
   query:  'INSERT', 
   // Table created called 'feeds'
   table: 'feeds', 
   rows:{ 
    // title and object are the row names of the table created
    // Example rows:{ myTableRowName: 'custom value to insert' }
    title: formData.title_post,
    content: formData.content_post
   }
  }
 ],
 env: 'dev',
 pluginId: pluginId (A)
};

bim.db.query(params,  function(res){

  console.log(res);
  if(res.error) app.alert(res.message);
});


## Display plugin database
// Display current plugins names

// Get list of current accepted plugins 
// with developers public id
bim.db.plugins();

// Get list of plugins and public plugin ids from a developer
bim.db.plugins({
  developer: 'developer-id'
});


/*

  Situations where it could be necessary to cross-plugin communication 
  
*/

Situation 1: Extending a production or development status app 
by adding a new plugin.
 
 -> https://hitbim.com/plugins-dashboard
 -> Plugins Connect menu
 -> Select app that you are working on.
    NOTE: If the plugin does not appear it may be dissabled for external
    request or the plugin is not installed on the application selected.

Situation 2: Creating a new plugin for future users, which depend of onther
plugin results.

  -> Using the developer public id
  -> Request via POST the developers's public plugin list.
  

```

