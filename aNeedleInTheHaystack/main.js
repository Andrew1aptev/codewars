function findNeedle(haystack) {
    const index = haystack.indexOf('needle',0)
    return `found the needle at position ${index}`
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));