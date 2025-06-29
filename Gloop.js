runAfterLoad(function() {
  elements.gloop = {
    color: "#6a4f4b",
    behavior: behaviors.STICKY,
    category: "liquids",
    state: "liquid",
    viscosity: 10000,
    density: 1200,
    tempHigh: 200,
    stateHigh: "gas",
    reactions: { "sparkdust": { elem1: null, elem2: "boomputty" } }
  };

  elements.sparkdust = {
    color: "#ffcc00",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 500,
    reactions: { "gloop": { elem1: null, elem2: "boomputty" } }
  };

  elements.boomputty = {
    color: "#c00000",
    behavior: behaviors.STICKY,
    category: "explosives",
    state: "solid",
    density: 1500,
    tempHigh: 100,
    stateHigh: "explosion",
    burn: 90,
    burnTime: 50,
    fireColor: "#ff2200",
  };
});
