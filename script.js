const principalBox = document.querySelector("input#principal")
const interestrateBox = document.querySelector("input#interestrate")
const numtimesyearBox = document.querySelector("input#numtimesyear")
const totalnumyearsBox = document.querySelector("input#totalnumyears")
const compintSpan = document.querySelector("#compint")

function computeCompInterest() {
  const principal = principalBox.value
  const interestrate = interestrateBox.value
  const numtimesyear = numtimesyearBox.value
  const totalnumyears = totalnumyearsBox.value
  const compint = principal * ((1 + ((interestrate / 100) / numtimesyear)) ** (numtimesyear * totalnumyears))
  compintSpan.textContent = compint
}

principalBox.addEventListener('input', computeCompInterest)
interestrateBox.addEventListener('input', computeCompInterest)
numtimesyearBox.addEventListener('input', computeCompInterest)
totalnumyearsBox.addEventListener('input', computeCompInterest)
