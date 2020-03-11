# Install

```
npm install tailwindcss-grid-placement
```

Add the plugin to your tailwind config file

```javascript
module.exports = {
	plugins: [require("tailwindcss-grid-placement")]
};
```

# Usage


Utility classes start with "content", "items" or "self" followed by the direction "x" or "y". These are all the generated CSS classes:

```css
.items-x-start {
	align-content: start;
}

.items-x-end {
	align-content: end;
}

.items-x-left {
	align-content: left;
}

.items-x-right {
	align-content: right;
}

.items-x-center {
	align-content: center;
}

.items-x-stretch {
	align-content: stretch;
}

.items-y-start {
	align-content: start;
}

.items-y-end {
	align-content: end;
}

.items-y-center {
	align-content: center;
}

.items-y-baseline {
	align-content: baseline;
}

.items-y-stretch {
	align-content: stretch;
}

.content-x-start {
	justify-content: start;
}

.content-x-end {
	justify-content: end;
}

.content-x-left {
	justify-content: left;
}

.content-x-right {
	justify-content: right;
}

.content-x-center {
	justify-content: center;
}

.content-x-stretch {
	justify-content: stretch;
}

.content-x-around {
	justify-content: space-around;
}

.content-x-evenly {
	justify-content: space-evenly;
}

.content-x-between {
	justify-content: space-between;
}

.content-y-start {
	align-content: start;
}

.content-y-end {
	align-content: end;
}

.content-y-center {
	align-content: center;
}

.content-y-stretch {
	align-content: stretch;
}

.content-y-baseline {
	align-content: baseline;
}

.content-y-around {
	align-content: space-around;
}

.content-y-evenly {
	align-content: space-evenly;
}

.content-y-between {
	align-content: space-between;
}

.self-x-start {
	justify-self: start;
}

.self-x-end {
	justify-self: end;
}

.self-x-left {
	justify-self: left;
}

.self-x-right {
	justify-self: right;
}

.self-x-center {
	justify-self: center;
}

.self-x-stretch {
	justify-self: stretch;
}

.self-y-start {
	align-self: start;
}

.self-y-end {
	align-self: end;
}

.self-y-center {
	align-self: center;
}

.self-y-baseline {
	align-self: baseline;
}

.self-y-stretch {
	align-self: stretch;
}
```

Use these generated classes in your html and enjoy tailwind grid placement 🥳

```html
<div class="grid grid-cols-2 grid-rows-2 content-x-end items-x-center items-y-start">
	<span>1</span>
	<span>2</span>
	<span>3</span>
	<span class="self-y-center">4</span>
</div>
```


