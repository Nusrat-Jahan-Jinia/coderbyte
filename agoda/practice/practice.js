function getElementsByStyle(property, value) {
    const allElements = document.querySelectorAll('*');
    const matchingElements = [];

    allElements.forEach(element => {
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.getPropertyValue(property) === value) {
            matchingElements.push(element);
        }
    });

    return matchingElements;
}

// Usage example:
const elementsWithColorRed = getElementsByStyle('color', 'red');
console.log(elementsWithColorRed);