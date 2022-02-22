menuHandler("nameChanger")
menuHandler("emailChanger")
menuHandler("numberChanger")
menuHandler("codeChanger")
menuHandler("news")
menuHandler("cardNumber")
menuHandler("birthday")

function menuHandler(id) {
    const mainTag = document.getElementById(id)
    const mainTagEdit = mainTag.querySelector(".fa-edit")
    const mainTagValue = mainTag.querySelector(".informations-value")
    const subInfoInputs = mainTag.querySelector(".subInfo-inputs")
    
    mainTagEdit.addEventListener("click", () => {
        mainTagValue.style.opacity = "0"
        mainTagEdit.style.opacity = "0"

        setTimeout(() => {
            mainTagValue.style.display = "none"
            mainTagEdit.style.display = "none"

            subInfoInputs.style.display = "block"
            setTimeout(() => {
                subInfoInputs.style.opacity = "1"
            }, 50);
        }, 300);
    })
}
