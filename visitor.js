
async function getVisitorCount () {
    const res = await fetch('https://i3ser8avgh.execute-api.us-east-1.amazonaws.com/visitor-count');
    
    myJson = await res.json();
    console.log(myJson);
    document.getElementById("p1").innerHTML = `Visitors Today: ${myJson.count}`;
    console.log("testing");
}

window.onload = getVisitorCount();
