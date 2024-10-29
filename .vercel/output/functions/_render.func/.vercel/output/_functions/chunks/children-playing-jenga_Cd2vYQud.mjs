const childrenPlayingJenga = new Proxy({"src":"/_astro/children-playing-jenga.CufpMluX.jpg","width":1404,"height":900,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Coding/seasons-ot/src/assets/images/children-playing-jenga.jpg";
							}
							
							return target[name];
						}
					});

export { childrenPlayingJenga as default };
