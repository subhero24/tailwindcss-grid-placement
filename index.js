let plugin = require("tailwindcss/plugin");

let defaults = {
	variants: {
		gridPlacement: ["responsive"]
	}
};

function gridPlacementPlugin({ addUtilities }) {
	let contentX = {
		start: "start",
		end: "end",
		left: "left",
		right: "right",
		center: "center",
		stretch: "stretch",
		around: "space-around",
		evenly: "space-evenly",
		between: "space-between"
	};

	let contentY = {
		start: "start",
		end: "end",
		center: "center",
		stretch: "stretch",
		baseline: "baseline",
		around: "space-around",
		evenly: "space-evenly",
		between: "space-between"
	};

	let itemsX = {
		start: "start",
		end: "end",
		left: "left",
		right: "right",
		center: "center",
		stretch: "stretch"
	};

	let itemsY = {
		start: "start",
		end: "end",
		center: "center",
		baseline: "baseline",
		stretch: "stretch"
	};

	let selfX = {
		start: "start",
		end: "end",
		left: "left",
		right: "right",
		center: "center",
		stretch: "stretch"
	};

	let selfY = {
		start: "start",
		end: "end",
		center: "center",
		baseline: "baseline",
		stretch: "stretch"
	};

	let contentXutilities = {};
	for (let [utility, value] of Object.entries(contentX)) {
		contentXutilities[`.content-x-${utility}`] = {
			justifyContent: value
		};
	}

	let contentYutilities = {};
	for (let [utility, value] of Object.entries(contentY)) {
		contentYutilities[`.content-y-${utility}`] = {
			alignContent: value
		};
	}

	let itemsXutilities = {};
	for (let [utility, value] of Object.entries(itemsX)) {
		itemsXutilities[`.items-x-${utility}`] = {
			alignContent: value
		};
	}

	let itemsYutilities = {};
	for (let [utility, value] of Object.entries(itemsY)) {
		itemsYutilities[`.items-y-${utility}`] = {
			alignContent: value
		};
	}

	let selfXutilities = {};
	for (let [utility, value] of Object.entries(selfX)) {
		selfXutilities[`.self-x-${utility}`] = {
			justifySelf: value
		};
	}

	let selfYutilities = {};
	for (let [utility, value] of Object.entries(selfY)) {
		selfYutilities[`.self-y-${utility}`] = {
			alignSelf: value
		};
	}

	addUtilities(selfXutilities, { variants: ["responsive"] });
	addUtilities(selfYutilities, { variants: ["responsive"] });
	addUtilities(itemsXutilities, { variants: ["responsive"] });
	addUtilities(itemsYutilities, { variants: ["responsive"] });
	addUtilities(contentXutilities, { variants: ["responsive"] });
	addUtilities(contentYutilities, { variants: ["responsive"] });
}

module.exports = plugin(gridPlacementPlugin);
