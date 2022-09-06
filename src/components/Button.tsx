// initially set the button symbol to ▼
// when the tree is collapsed, change the symbol to ▶

export const Button = ({item}: any) => {

    // set button styling so that there is no border or background
    const ButtonStyle = {
        padding: "0",
        border: "none",
        background: "none"
    };

    // if there is no children, dont return a button
    if (!item.children) {
        return null;
    }

    
    return (
        <button 
        style={ButtonStyle}
        className="open"
        id={`${item.name}`} onClick={() => {
        
            // get the children elements list by id
            const child = document.getElementById(`child-${item.name}`)

            // when tree is collapsed, set the display as none, otherwise set as block
            child?.setAttribute("style", `display: ${
            child.style.display == "none" ? "block" : "none"
            };`)

            // if the button is set as ▶, change to ▼, and vice-versa
            if (document.getElementById(item.name)?.textContent == "▶") {
                document.getElementById(item.name)!.textContent = "▼"
                document.getElementById(item.name)!.className = "open"
            } else {
                document.getElementById(item.name)!.textContent = "▶"
                document.getElementById(item.name)!.className = "closed"
            }
            
        }}
        >▼</button>
    )

}