// REMEMBER TO FILL IN THE CLIENT ID              V V V V V V V
const client = require("discord-rich-presence")("YOUR_CLIENT_ID_HERE");

client.updatePresence({
	// Fill in the text and customize it to your liking
	details: "Secondary Text",
	state: "Tertiary text",

	// If you added any images
	// Remove this section if you don't want any images
	largeImageKey: "LARGE_IMAGE_NAME",
	largeImageText: "Text that appears when hovers over the image",

	// If you would like a small icon-like image
	// Remove this section if you don't want this
	smallImageKey: "SMALL_IMAGE_NAME",
	smallImageText: "Text that appears when hovers over the image",

	// If you wish to add any links
	// Remove this if you do not want any links
	buttons: [
		{ label: "BUTTON TEXT", url: "REDIRECT_URL" },
		{ label: "BUTTON TEXT", url: "REDIRECT_URL" }
	],

	// Do not remove
	instance: true,
});
