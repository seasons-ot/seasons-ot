const aboutUsHeader = new Proxy({"src":"/_astro/about-us-header.C2K9N8ez.png","width":386,"height":122,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Coding/seasons-ot/src/assets/images/about-us-header.png";
							}
							
							return target[name];
						}
					});

export { aboutUsHeader as default };
