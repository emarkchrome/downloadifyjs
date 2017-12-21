# Downloadify.js
### Quickly implement platform-specific download links on your website
📥 Downloadify.js is a a small **1.3kb** library that takes the pain out of writing code for your download links to accommodate different platforms.

The quick setup __dynamically__ changes the URL of your download link depending on whether the user is on Windows, MacOS, or Linux.

## Usage
```html
<html>
	<head>
		<meta charset="utf-8">
		<title>Download Test</title>
	</head>
	<body>
		<button type="button" id="button">Download Here</button>
		<script src="downloadify.js"></script>
		<script>
			var button = document.getElementById('button');

			var downloadify = new Downloadify(button, navigator, {
				windows: 'https://google.com',
				macos: 'https://bing.com',
				linux: 'https://medium.com',
				fallback: 'https://yahoo.com'
			});
		</script>
	</body>
</html>
```

It only supports the three platforms, and a fallback link in case the user is not on one of these 3 platforms, but I'll improve on it in the future. 
