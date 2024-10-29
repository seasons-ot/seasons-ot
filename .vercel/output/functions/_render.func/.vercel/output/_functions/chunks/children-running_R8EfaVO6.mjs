const childrenRunning = new Proxy({"src":"/_astro/children-running.CCAYFCad.jpg","width":561,"height":450,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Coding/seasons-ot/src/assets/images/children-running.jpg";
							}
							
							return target[name];
						}
					});

export { childrenRunning as default };
