const sliderInner = document.querySelector("[data-sliderInner]")
const sliderContent = Array.from(sliderInner.children)
sliderContent.forEach((element) => {
   const duplicate = element.cloneNode(true)
   sliderInner.appendChild(duplicate)                                                 
})
sliderInner.appendChild(sliderInner.firstElementChild.cloneNode(true))
sliderInner.appendChild(sliderInner.firstElementChild.nextElementSibling.cloneNode(true))
const sliderInnerTwo = document.querySelector("[data-sliderInnerTwo]")
const sliderContentTwo = Array.from(sliderInnerTwo.children)
sliderContentTwo.forEach((element) => {
   const duplicate = element.cloneNode(true)
   sliderInnerTwo.appendChild(duplicate)                                                 
})
sliderInnerTwo.appendChild(sliderInnerTwo.firstElementChild.cloneNode(true))
sliderInnerTwo.appendChild(sliderInnerTwo.firstElementChild.nextElementSibling.cloneNode(true))

                                                                        



