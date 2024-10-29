const childColoring = new Proxy({"src":"/_astro/child-coloring.BHG-niJg.jpg","width":1655,"height":900,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Coding/seasons-ot/src/assets/images/child-coloring.jpg";
							}
							
							return target[name];
						}
					});

export { childColoring as default };
