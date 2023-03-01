document.getElementById('btn').addEventListener('click',function(){
    
    const longLink = document.getElementById('longLink').value ;
   
    console.log(longLink);
    if(longLink===''){
        alert('Enter a valid link')
    }
    else{
        const URL = `https://api.shrtco.de/v2/shorten?url=${longLink}`
        console.log(URL);
    
        fetch(URL)
         .then(res => res.json())
         .then(data => {
            generateShortLink(data)
         })
    }

    
})
const generateShortLink = (st_link)=>{
    console.log(st_link);
    const code =st_link.result.code;
    const shortUrl  = `shrtco.de/${code}`
    document.getElementById('short-link').value = shortUrl 


}
//copy the shortest link
function myFunction() {
    // Get the text field
    var copyText = document.getElementById("short-link");
   
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }