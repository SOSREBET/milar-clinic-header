const dropdownList = document.querySelectorAll('.dropdown')

// dropdownList.forEach(function (element) {
//     element.addEventListener('mouseover', function (evt) {
//         let alreadyActive = document.querySelectorAll('.dropdown.active')
//         for (let index = 0; index < alreadyActive.length; index++) {
//             if (alreadyActive[index] === element) {
//                 continue
//             }
//             alreadyActive[index].classList.remove('active')
//         }
//         element.classList.toggle('active')
//     })
// })


// dropdownList.forEach(function (element) {
//     element.addEventListener('mouseout', function (evt) {
//         element.classList.toggle('active')
//     })
// })

function disableDropdowns (element) {
    let alreadyActive = document.querySelectorAll('.dropdown.active')
    for (let index = 0; index < alreadyActive.length; index++) {
        if (alreadyActive[index] === element) {
            continue
        }
        alreadyActive[index].classList.remove('active')
    }
}

dropdownList.forEach(function (element) {
    element.addEventListener('mouseover', function (evt) {
        disableDropdowns(element)
    })
})

dropdownList.forEach(function (element) {
    element.addEventListener('click', function (evt) {
        disableDropdowns(element)
        element.classList.toggle('active')
    })
})