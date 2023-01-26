import chroma from "chroma-js";

// {
//     paletteName: "Flat UI Colors Aussie",
//     id: "flat-ui-colors-aussie",
//     emoji: "🇦🇺",
//     colors: [
//       { name: "Beekeeper", color: "#f6e58d" },
//       { name: "SpicedNectarine", color: "#ffbe76" },
//       { name: "PinkGlamour", color: "#ff7979" },
//       { name: "JuneBud", color: "#badc58" },
//       { name: "CoastalBreeze", color: "#dff9fb" },
//       { name: "Turbo", color: "#f9ca24" },
//       { name: "QuinceJelly", color: "#f0932b" },
//       { name: "CarminePink", color: "#eb4d4b" },
//       { name: "PureApple", color: "#6ab04c" },
//       { name: "HintOfIcePack", color: "#c7ecee" },
//       { name: "MiddleBlue", color: "#7ed6df" },
//       { name: "Heliotrope", color: "#e056fd" },
//       { name: "ExodusFruit", color: "#686de0" },
//       { name: "DeepKoamaru", color: "#30336b" },
//       { name: "SoaringEagle", color: "#95afc0" },
//       { name: "GreenlandGreen", color: "#22a6b3" },
//       { name: "SteelPink", color: "#be2edd" },
//       { name: "Blurple", color: "#4834d4" },
//       { name: "DeepCove", color: "#130f40" },
//       { name: "WizardGrey", color: "#535c68" },
//     ],
//   }

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatedPallete(starterPallete) {
  let newPallete = {
    palleteName: starterPallete.paletteName,
    id: starterPallete.id,
    emoji: starterPallete.emoji,
    colors: {
      50: [],
      100: [],
    },
  };
  for (let level of levels) {
    newPallete.colors[level] = [];
  }
  for (let color of starterPallete.colors) {
    let scale = generateScale(color.color, 10).reverse();
    for (let i in scale) {
      newPallete.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(" ", "_"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPallete;
}

function getRange(hexColor) {
  const end = "FFF";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

function generateScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}

export { generatedPallete };
