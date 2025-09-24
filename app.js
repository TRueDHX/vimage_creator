async function generate() { 
  const prompt = document.getElementById("prompt").value; 
  const type = document.getElementById("type").value; 
  const mode = document.getElementById("mode").value; 
  const fps = document.getElementById("fps").value; 
  const quality = document.getElementById("quality").value; 
  const captions = document.getElementById("captions").checked; 
  const res = await fetch("/generate", { 
    method:"POST", 
    headers:{"Content-Type":"application/json"}, 
    body:JSON.stringify({prompt,type,mode,fps,quality,captions}) 
  }); 
  const data = await res.json(); 
  const outputDiv = document.getElementById("output"); 
  outputDiv.innerHTML = ""; 
  if(data.type==="video"){ 
    const vid=document.createElement("video"); vid.src=data.url; vid.controls=true; vid.width=640; outputDiv.appendChild(vid); 
  } else { 
    const img=document.createElement("img"); img.src=data.url; img.width=640; outputDiv.appendChild(img); 
  } 
  const link=document.createElement("a"); link.href=data.url; link.download=`generated.${data.type==="video"?"mp4":"png"}`; link.textContent=`Download ${data.type}`; 
  outputDiv.appendChild(document.createElement("br")); 
  outputDiv.appendChild(link); 
} 
