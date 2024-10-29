const seasonsOtBg = new Proxy({"src":"/_astro/seasons-ot-bg.Bs8nPmQ2.jpg","width":1440,"height":810,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Coding/seasons-ot/src/assets/images/seasons-ot-bg.jpg";
							}
							
							return target[name];
						}
					});

export { seasonsOtBg as default };
