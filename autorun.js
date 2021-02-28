setTimeout(() => {

	const client = require("discord-rich-presence")("YOUR_CLIENT_ID_HERE");

	client.updatePresence({
		details: "Secondary Text",
		state: "Tertiary text",

		largeImageKey: "LARGE_IMAGE_NAME",
		largeImageText: "Text that appears when hovers over the image",

		smallImageKey: "SMALL_IMAGE_NAME",
		smallImageText: "Text that appears when hovers over the image",

		buttons: [
			{ label: "BUTTON TEXT", url: "REDIRECT_URL" },
			{ label: "BUTTON TEXT", url: "REDIRECT_URL" }
		],

		instance: true,
	});
	console.log("Displaying Rich Presence");

}, 600000);