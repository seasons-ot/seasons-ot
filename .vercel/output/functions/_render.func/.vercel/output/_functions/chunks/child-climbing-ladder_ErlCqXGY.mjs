const childClimbingLadder = new Proxy({"src":"/_astro/child-climbing-ladder.B_5ILYEw.jpg","width":1382,"height":900,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Coding/seasons-ot/src/assets/images/child-climbing-ladder.jpg";
							}
							
							return target[name];
						}
					});

export { childClimbingLadder as default };
