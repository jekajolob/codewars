// https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript
function aliasGen(first, last) {
    // Check if first and last names start with a letter
    if (!/^[a-zA-Z]/.test(first) || !/^[a-zA-Z]/.test(last)) {
        return "Your name must start with a letter from A - Z.";
    }
    
    // Capitalize the first letters of first and last names (to handle case-insensitivity)
    const firstInitial = first[0].toUpperCase();
    const lastInitial = last[0].toUpperCase();
    
    // Use the first letters to fetch values from the preloaded objects
    return `${firstName[firstInitial]} ${surname[lastInitial]}`;
}

// Example Objects (preloaded in the real challenge)
const firstName = {
    A: 'Alpha', B: 'Beta', C: 'Cache', D: 'Delta', E: 'Echo',
    F: 'Foxtrot', G: 'Gamma', H: 'Helix', I: 'Ice', J: 'Jester',
    K: 'Kilo', L: 'Logic', M: 'Matrix', N: 'Nebula', O: 'Omega',
    P: 'Phantom', Q: 'Quasar', R: 'Rogue', S: 'Shadow', T: 'Tracer',
    U: 'Ultra', V: 'Vector', W: 'Warp', X: 'Xerox', Y: 'Yield', Z: 'Zenith'
};

const surname = {
    A: 'Analogue', B: 'Bomb', C: 'Catalyst', D: 'Dynamo', E: 'Electron',
    F: 'Flux', G: 'Grid', H: 'Hacker', I: 'Interface', J: 'Jigsaw',
    K: 'Key', L: 'Laser', M: 'Magnet', N: 'Network', O: 'Override',
    P: 'Pulse', Q: 'Quantum', R: 'Razor', S: 'System', T: 'Trojan',
    U: 'Unity', V: 'Virus', W: 'Wave', X: 'Xenon', Y: 'Yield', Z: 'Zero'
};

console.log(aliasGen("Mike", "Millington")) // Malware Mike
