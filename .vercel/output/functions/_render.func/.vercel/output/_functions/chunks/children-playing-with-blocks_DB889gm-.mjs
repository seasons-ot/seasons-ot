const childrenPlayingWithBlocks = new Proxy({"src":"/_astro/children-playing-with-blocks.DGBjBpvZ.jpg","width":969,"height":450,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Coding/seasons-ot/src/assets/images/children-playing-with-blocks.jpg";
							}
							
							return target[name];
						}
					});

export { childrenPlayingWithBlocks as default };
