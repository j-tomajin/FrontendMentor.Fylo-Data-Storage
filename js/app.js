const progressBar = document.getElementsByClassName('progress-bar')[0]

setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0

    progressBar.style.setProperty('--width', width + .1)
})

const leftInterval = setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const left = parseFloat(computedStyle.getPropertyValue('--left')) || 0

    progressBar.style.setProperty('--left', left + .1)

    if(left === 72) {
        clearInterval(leftInterval)
    }
}, 4.775)