document.querySelector("#toggle_nav").addEventListener("change", () => {

    if ( document.querySelector("#toggle_nav").checked )
    {
        document.querySelector("header nav").classList.add("toggle");
        document.querySelector("header nav").classList.remove("untoggle");
    }
    else
    {
        document.querySelector("header nav").classList.remove("toggle");
        document.querySelector("header nav").classList.add("untoggle");
    }
    
    document.querySelector("#toggle_nav + label").classList.toggle("active");
    document.querySelector(".logo").classList.toggle("active");
} );

window.addEventListener("resize", () => {
    if ( screen.width > 990 )
    {
        document.querySelector("header nav").classList.remove("toggle");
        document.querySelector("header nav").classList.remove("untoggle");
        document.querySelector("#toggle_nav").checked = false;
        document.querySelector("#toggle_nav + label").classList.remove("active");
        document.querySelector(".logo").classList.remove("active");
        
        tabClick();
    }
    else
    {
        tabClick();
    }
} );

// Tab selection movement
document.tab_buttons.tab.forEach(element => {
    element.addEventListener("click", () => {
        if ( screen.width > 990 )
        {
            document.documentElement.style.cssText =  "--tabindicator: " + 228 * element.value + "px";
        }
        else
        {
            document.documentElement.style.cssText =  "--tabindicatormobile: " + (59 * element.value + 59) + "px";
        }

        document.querySelectorAll(".tab_illustration img").forEach( el => {
            el.classList.remove("active");
        } );

        document.querySelectorAll(".tab_header div").forEach( el => {
            el.classList.remove("active");
        } );

        document.querySelector(".illustration0 img:nth-child(" + (parseInt(element.value) + 1) + ")").classList.add("active");
        document.querySelector(".tab_header div:nth-child(" + (parseInt(element.value) + 1) + ")").classList.add("active");
    } );
});

start();

function start()
{
    document.tab_buttons.tab[0].click();
}

// Simulate Click for active tab
function tabClick()
{
    document.tab_buttons.tab.forEach( element => {
        if ( element.checked ) {
            element.click()
        }
    } );
}

