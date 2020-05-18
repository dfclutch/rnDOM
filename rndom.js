const rndom = {
	between: (min, max) => {
		return Math.random() * (max - min) + min
	},

	intBetween: (min,max) => {
		return Math.floor(rndom.between(min,max))
	},

	oneOf: (a) => {
		return a[rndom.intBetween(0,a.length)];
	},

	nOf: (n, a) => {
		let indices = [],
			output = [];
		while (indices.length < n) {
			let candidate = rndom.intBetween(0, a.length);
			if (!indices.includes(candidate)) {
				indices.push(candidate);
				output.push(a[candidate]);
			}
		}
		
		return output;
	},

	color: (scheme) => {
		if (scheme) {
			switch (scheme) {
				case "rgb":
					return rndom._generateRGB();
				case "hex":
					return rndom._generateHEX();
				case "named":
					return rndom.oneOf(rndom._cssColors);
			}
		}

		return rndom._generateHEX();
	},

	coinflip: () => {
		return rndom.between(0,1) > .5
	},
	
	weightedCoinflip: (p) => {
		return rndom.between(0,1) < p;
	},
	/* 

		PRIVATE MEMBERS 

	*/
	_generateRGB: () => {
		let r = rndom.intBetween(0,256),
			g = rndom.intBetween(0,256),
			b = rndom.intBetween(0,256);
		return `rgb(${red},${green},${blue})`;
	},
	_generateHEX() {
		let r1 = rndom._hexDigit(),
			r2 = rndom._hexDigit(),
			g1 = rndom._hexDigit(),
			g2 = rndom._hexDigit(),
			b1 = rndom._hexDigit(),
			b2 = rndom._hexDigit();
		return `#${r1}${r2}${g1}${g2}${b1}${b2}`
	},
	_hexDigit: () => {
		let digits = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F",]
		return rndom.oneOf(digits);
	},
	_cssColors:["AliceBlue",
				"AntiqueWhite",
				"Aqua",
				"Aquamarine",
				"Azure",
				"Beige",
				"Bisque",
				"Black",
				"BlanchedAlmond",
				"Blue",
				"BlueViolet",
				"Brown",
				"BurlyWood",
				"CadetBlue",
				"Chartreuse",
				"Chocolate",
				"Coral",
				"CornflowerBlue",
				"Cornsilk",
				"Crimson",
				"Cyan",
				"DarkBlue",
				"DarkCyan",
				"DarkGoldenRod",
				"DarkGray",
				"DarkGrey",
				"DarkGreen",
				"DarkKhaki",
				"DarkMagenta",
				"DarkOliveGreen",
				"Darkorange",
				"DarkOrchid",
				"DarkRed",
				"DarkSalmon",
				"DarkSeaGreen",
				"DarkSlateBlue",
				"DarkSlateGray",
				"DarkSlateGrey",
				"DarkTurquoise",
				"DarkViolet",
				"DeepPink",
				"DeepSkyBlue",
				"DimGray",
				"DimGrey",
				"DodgerBlue",
				"FireBrick",
				"FloralWhite",
				"ForestGreen",
				"Fuchsia",
				"Gainsboro",
				"GhostWhite",
				"Gold",
				"GoldenRod",
				"Gray",
				"Grey",
				"Green",
				"GreenYellow",
				"HoneyDew",
				"HotPink",
				"IndianRed",
				"Indigo",
				"Ivory",
				"Khaki",
				"Lavender",
				"LavenderBlush",
				"LawnGreen",
				"LemonChiffon",
				"LightBlue",
				"LightCoral",
				"LightCyan",
				"LightGoldenRodYellow",
				"LightGray",
				"LightGrey",
				"LightGreen",
				"LightPink",
				"LightSalmon",
				"LightSeaGreen",
				"LightSkyBlue",
				"LightSlateGray",
				"LightSlateGrey",
				"LightSteelBlue",
				"LightYellow",
				"Lime",
				"LimeGreen",
				"Linen",
				"Magenta",
				"Maroon",
				"MediumAquaMarine",
				"MediumBlue",
				"MediumOrchid",
				"MediumPurple",
				"MediumSeaGreen",
				"MediumSlateBlue",
				"MediumSpringGreen",
				"MediumTurquoise",
				"MediumVioletRed",
				"MidnightBlue",
				"MintCream",
				"MistyRose",
				"Moccasin",
				"NavajoWhite",
				"Navy",
				"OldLace",
				"Olive",
				"OliveDrab",
				"Orange",
				"OrangeRed",
				"Orchid",
				"PaleGoldenRod",
				"PaleGreen",
				"PaleTurquoise",
				"PaleVioletRed",
				"PapayaWhip",
				"PeachPuff",
				"Peru",
				"Pink",
				"Plum",
				"PowderBlue",
				"Purple",
				"RebeccaPurple",
				"Red",
				"RosyBrown",
				"RoyalBlue",
				"SaddleBrown",
				"Salmon",
				"SandyBrown",
				"SeaGreen",
				"SeaShell",
				"Sienna",
				"Silver",
				"SkyBlue",
				"SlateBlue",
				"SlateGray",
				"SlateGrey",
				"Snow",
				"SpringGreen",
				"SteelBlue",
				"Tan",
				"Teal",
				"Thistle",
				"Tomato",
				"Turquoise",
				"Violet",
				"Wheat",
				"White",
				"WhiteSmoke",
				"Yellow",
				"YellowGreen"]
}

module.exports = rndom;