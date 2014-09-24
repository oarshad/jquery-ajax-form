# jQuery Ajax File Upload plugin
This simple jQuery plugin allows you to submit a form via hidden iFrame hence supporting uploading of files.

## Usage
```javascript
$("#myForm").ajaxForm({
	beforeSubmit: function() { console.log("beforeSubmit Even"); },
	onSuccess: function(data) { console.log("Successful submit response: " + data ); },
	onFailure: function()  { console.log("Unable to parse response"); },
	onComplete: function() { console.log("Form submit completed"); },
	acceptsJson: true
});
```

## Options
- `acceptsJson` **default: true**

> This flag is set if you are accepting a response from the server as a json object. If this flag is set, then this plugin tries to parse the response received from the server as a JSON object and if successful calls the `onSuccess` event providing the JSON parsed data otherwise calls `onFailure` event. If you are not accepting the response from server as a JSON object, then always `onSuccess` method is called providing with any response received from the server as a text. Due to behavior of the HTML forms there is no way to check any response code from the server. e.g., 404 (Page not found) or 500.

- `beforeSubmit` Called before submitting the form.
- `onSuccess` Called after response is received and if expecting JSON then it is parsed successfully.
- `onFailure` This method is only called if expecting JSON response and it couldn't be parsed.
- `onComplete` Always gets called after receiving the response back from the server.